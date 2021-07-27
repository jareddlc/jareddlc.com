use serde_json::{json, Value};
use warp::Filter;

use crate::templates::Hbs;

pub fn get_routes(
    data: Value,
    hbs: Hbs,
) -> impl Filter<Extract = impl warp::Reply, Error = warp::Rejection> + Clone {
    // load routes
    let assets = assets();
    let favicon = favicon();
    let pages = pages(data, hbs);

    // combine routes
    assets.or(favicon).or(pages)
}

fn assets() -> impl Filter<Extract = impl warp::Reply, Error = warp::Rejection> + Clone {
    warp::get()
        .and(warp::path("static"))
        .and(warp::fs::dir("./www/static"))
}

fn favicon() -> impl Filter<Extract = impl warp::Reply, Error = warp::Rejection> + Clone {
    warp::get()
        .and(warp::path("favicon.ico"))
        .and(warp::fs::file("./www/static/img/favicon.ico"))
}

fn pages(
    data: Value,
    hbs: Hbs,
) -> impl Filter<Extract = impl warp::Reply, Error = warp::Rejection> + Clone {
    let index = page_index(data.clone(), hbs.clone());
    let projects = page_projects(data.clone(), hbs.clone());
    let resume = page_resume(data.clone(), hbs.clone());
    let resume_pdf = page_resume_pdf(data, hbs);

    index.or(projects).or(resume).or(resume_pdf)
}

fn page_index(
    data: Value,
    hbs: Hbs,
) -> impl Filter<Extract = impl warp::Reply, Error = warp::Rejection> + Clone {
    warp::get()
        .and(warp::path::end())
        .and(with_value(data))
        .and(with_hbs(hbs))
        .map(|data: Value, hbs: Hbs| {
            render("page_index.hbs", data["page_index"].clone(), hbs.clone())
        })
}

fn page_projects(
    data: Value,
    hbs: Hbs,
) -> impl Filter<Extract = impl warp::Reply, Error = warp::Rejection> + Clone {
    warp::get()
        .and(warp::path("projects"))
        .and(warp::path::end())
        .and(with_value(data))
        .and(with_hbs(hbs))
        .map(|data: Value, hbs: Hbs| {
            render(
                "page_projects.hbs",
                data["page_projects"].clone(),
                hbs.clone(),
            )
        })
}

fn page_resume(
    data: Value,
    hbs: Hbs,
) -> impl Filter<Extract = impl warp::Reply, Error = warp::Rejection> + Clone {
    warp::get()
        .and(warp::path("resume"))
        .and(warp::path::end())
        .and(with_value(data))
        .and(with_hbs(hbs))
        .map(|data: Value, hbs: Hbs| {
            render("page_resume.hbs", data["page_resume"].clone(), hbs.clone())
        })
}

fn page_resume_pdf(
    data: Value,
    hbs: Hbs,
) -> impl Filter<Extract = impl warp::Reply, Error = warp::Rejection> + Clone {
    warp::get()
        .and(warp::path!("resume" / "pdf"))
        .and(warp::path::end())
        .and(with_value(data))
        .and(with_hbs(hbs))
        .map(|data: Value, hbs: Hbs| {
            let mut pdf_data = data["page_resume"].clone();
            pdf_data["pdf"] = json!(true);
            render("page_resume_pdf.hbs", pdf_data, hbs.clone())
        })
}

fn with_value(
    data: Value,
) -> impl Filter<Extract = (Value,), Error = std::convert::Infallible> + Clone {
    warp::any().map(move || data.clone())
}

fn with_hbs(hbs: Hbs) -> impl Filter<Extract = (Hbs,), Error = std::convert::Infallible> + Clone {
    warp::any().map(move || hbs.clone())
}

fn render(name: &'static str, value: Value, hbs: Hbs) -> impl warp::Reply {
    let render = hbs
        .render(name, &value)
        .unwrap_or_else(|err| err.to_string());
    warp::reply::html(render)
}

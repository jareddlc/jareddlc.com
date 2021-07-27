use log::info;
use std::env;
use warp::Filter;

mod configuration;
mod routes;
mod templates;

use configuration::Configuration;

#[tokio::main]
async fn main() {
    // load configuration
    let config = match Configuration::load() {
        Ok(config) => config,
        Err(error) => panic!("Unable to load configuration, {}", error),
    };

    // load website data
    let data = match Configuration::load_page_data() {
        Ok(data) => data,
        Err(error) => panic!("Unable to load website data, {}", error),
    };

    // set log level
    if env::var_os("RUST_LOG").is_none() {
        let log_level = format!("{}", &config.logging.level);
        env::set_var("RUST_LOG", log_level);
    }

    // initialize the logger
    env_logger::init();

    // load templates
    let hbs = templates::get_handlebars();

    // load routes
    let routes = routes::get_routes(data, hbs).with(warp::log("web"));

    // docker needs to listen on 0.0.0.0
    info!("Listening on: {}", &config.server.port);
    warp::serve(routes)
        .run(([0, 0, 0, 0], config.server.port as u16))
        .await;
}

use handlebars::Handlebars;
use log::info;
use std::fs;
use std::sync::Arc;

pub type Hbs = Arc<Handlebars<'static>>;

pub fn get_handlebars() -> Hbs {
    // create handlebars
    let mut hb = Handlebars::new();

    // read files in templates dir
    let paths = fs::read_dir("www/templates").expect("Failed to read templates directory");

    // register template
    for path in paths {
        let p = path.expect("Failed to get path");
        let file_path = p
            .path()
            .into_os_string()
            .into_string()
            .expect("Failed to get file path");
        let file_name = p
            .file_name()
            .into_string()
            .expect("Failed to get file name");

        info!("Registering template: {}", file_name);
        hb.register_template_file(&file_name, file_path)
            .expect("Failed to register template");
    }

    Arc::new(hb)
}

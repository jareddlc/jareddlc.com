use config::{Config, ConfigError, Environment, File as ConfigFile};
use serde_derive::Deserialize;
use serde_json::{json, Value};
use std::error::Error;
use std::fs::File;
use std::io::BufReader;

#[derive(Clone, Debug, Deserialize)]
pub struct Configuration {
    pub logging: LoggingOpts,
    pub server: ServerOpts,
}

#[derive(Clone, Debug, Deserialize)]
pub struct LoggingOpts {
    pub level: String,
}

#[derive(Clone, Debug, Deserialize)]
pub struct ServerOpts {
    pub port: usize,
}

impl Configuration {
    pub fn load() -> Result<Self, ConfigError> {
        // construct a new configuration
        let mut config = Config::new();

        // merge with the file provided
        config.merge(ConfigFile::with_name("config/default.toml"))?;

        // merge with environment variables
        config.merge(Environment::with_prefix("web").separator("_"))?;

        // deserialize the configuration
        config.try_into()
    }

    pub fn load_page_data() -> Result<Value, Box<dyn Error>> {
        // load json files
        let page_index = load_json("config/page_index.json")?;
        let page_projects = load_json("config/page_projects.json")?;
        let page_resume = load_json("config/page_resume.json")?;

        // create Value with data
        let page_data = json!({
            "page_index": page_index,
            "page_projects": page_projects,
            "page_resume": page_resume
        });

        Ok(page_data)
    }
}

fn load_json(file_name: &str) -> Result<Value, Box<dyn Error>> {
    let file = File::open(file_name).expect("Failed to open file");
    let reader = BufReader::new(file);

    let json: Value = serde_json::from_reader(reader).expect("Failed to parse json file");

    Ok(json)
}

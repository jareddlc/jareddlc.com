# use rust for the build container
FROM rust:1.53-slim-buster as rustc

RUN apt update && apt install -y curl

# create empty rust project
RUN USER=root cargo new --bin jareddlc_com
WORKDIR /jareddlc_com

# download dependencies
COPY ./install.sh ./install.sh
RUN ./install.sh

# copy over manifest files
COPY ./Cargo.toml ./Cargo.toml

# build dependencies (the dependencies will be cached unless the manifest files are updated)
RUN cargo build --release

# remove empty project files
RUN rm src/*.rs

# copy source
COPY ./config ./config
COPY ./src ./src
COPY ./www ./www

# build release
RUN touch -a -m ./src/main.rs
RUN cargo build --release

# use debian as the release container
FROM debian:buster-slim
WORKDIR /opt/jareddlc_com

# copy the config and binary
COPY --from=rustc /jareddlc_com/config ./config
COPY --from=rustc /jareddlc_com/www ./www
COPY --from=rustc /jareddlc_com/target/release/jareddlc_com .

# start turnip-towers with the default configuration
CMD ["./jareddlc_com", "default.toml"]

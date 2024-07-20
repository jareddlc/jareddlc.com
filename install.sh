#!/usr/bin/env bash

download() {
    local url=$1
    local dest=$2

    echo -e "Downloading: ${url}"
    curl -sSL "${url}" -o "${dest}"
}

mkdir "./www/"
mkdir "./www/static/"

# CSS
mkdir "./www/static/css"
download "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.css" "./www/static/css/bulma.css"
download "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" "./www/static/css/font-awesome.min.css"

# Fonts
mkdir "./www/static/fonts"
download "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/FontAwesome.otf" "./www/static/fonts/FontAwesome.otf"
download "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.eot" "./www/static/fonts/fontawesome-webfont.eot"
download "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.svg" "./www/static/fonts/fontawesome-webfont.svg"
download "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf" "./www/static/fonts/fontawesome-webfont.ttf"
download "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff" "./www/static/fonts/fontawesome-webfont.woff"
download "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2" "./www/static/fonts/fontawesome-webfont.woff2"

# Assets
mkdir "./www/static/file"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/binary-clock.jpg" "./www/static/file/binary-clock.jpg"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/binary-clock.mp4" "./www/static/file/binary-clock.mp4"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/blitzmax.jpg" "./www/static/file/blitzmax.jpg"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/blitzmax.mp4" "./www/static/file/blitzmax.mp4"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/circuitron.jpg" "./www/static/file/circuitron.jpg"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/circuitron.mp4" "./www/static/file/circuitron.mp4"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/cogswell-now.jpg" "./www/static/file/cogswell-now.jpg"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/cogswell-now.mp4" "./www/static/file/cogswell-now.mp4"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/cogswell-registrar.jpg" "./www/static/file/cogswell-registrar.jpg"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/cogswell-registrar.mp4" "./www/static/file/cogswell-registrar.mp4"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/coregi.jpg" "./www/static/file/coregi.jpg"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/coregi.mp4" "./www/static/file/coregi.mp4"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/gut-rust.jpg" "./www/static/file/gut-rust.jpg"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/gut-rust.mp4" "./www/static/file/gut-rust.mp4"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/gut.jpg" "./www/static/file/gut.jpg"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/gut.mp4" "./www/static/file/gut.mp4"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/jinx.jpg" "./www/static/file/jinx.jpg"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/jinx.mp4" "./www/static/file/jinx.mp4"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/lint.jpg" "./www/static/file/lint.jpg"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/lint.mp4" "./www/static/file/lint.mp4"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/midi-controller.jpg" "./www/static/file/midi-controller.jpg"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/midi-controller.mp4" "./www/static/file/midi-controller.mp4"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/mobile-maze.jpg" "./www/static/file/mobile-maze.jpg"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/mobile-maze.mp4" "./www/static/file/mobile-maze.mp4"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/mobile-sidescroller.jpg" "./www/static/file/mobile-sidescroller.jpg"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/mobile-sidescroller.mp4" "./www/static/file/mobile-sidescroller.mp4"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/network-game.jpg" "./www/static/file/network-game.jpg"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/network-game.mp4" "./www/static/file/network-game.mp4"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/openfit.jpg" "./www/static/file/openfit.jpg"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/openfit.mp4" "./www/static/file/openfit.mp4"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/quadratic.jpg" "./www/static/file/quadratic.jpg"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/quadratic.mp4" "./www/static/file/quadratic.mp4"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/subtract-game.jpg" "./www/static/file/subtract-game.jpg"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/subtract-game.mp4" "./www/static/file/subtract-game.mp4"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/tessract.jpg" "./www/static/file/tessract.jpg"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/tessract.mp4" "./www/static/file/tessract.mp4"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/torrent-cleaner.jpg" "./www/static/file/torrent-cleaner.jpg"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/torrent-cleaner.mp4" "./www/static/file/torrent-cleaner.mp4"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/turnip-towers.jpg" "./www/static/file/turnip-towers.jpg"
download "https://github.com/jareddlc/jareddlc.com/releases/download/0.0.0/turnip-towers.mp4" "./www/static/file/turnip-towers.mp4"

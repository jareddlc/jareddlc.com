#!groovy

node {
  stage("Checkout") {
    checkout scm
  }
  stage("Build") {
    sh "docker-build.sh"
  }
  stage("Deploy") {
    sh "docker-service.sh"
  }
}

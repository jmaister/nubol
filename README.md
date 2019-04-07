# Nubol

Upload your files to the cloud.

# Build

    mvn clean install

# Run

## Development

    mvn spring-boot:run

Then open [http://localhost:8080](http://localhost:8080) 

## Run with Docker

Build:

    docker build -t nubol .
    
Run:

    docker run -d -p 8080:8080 --name nubol nubol

# TODO

- Upload image to Dockerhub [https://hub.docker.com/](https://hub.docker.com/)
- Docker volume for persistent data
- Create better UI

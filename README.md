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

    docker build -t jordiburgos/nubol .
    
Run:

    docker run -d -p 8080:8080 --name nubol nubol

Push to dockerhub:

    docker build -t jordiburgos/nubol .
    docker push jordiburgos/nubol:tagname

# TODO

- Upload image to Dockerhub [https://hub.docker.com/](https://hub.docker.com/)
- Docker volume for persistent data
- Create better UI
- Backend - Frontend build http://justincalleja.com/2016/04/17/serving-a-webpack-bundle-in-spring-boot/

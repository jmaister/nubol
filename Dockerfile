#
# docker rm -f nubol
# docker build -t jordiburgos/nubol:0.0.1 .
# docker run -d -p 8080:8080 --name nubol jordiburgos/nubol:0.0.1
# docker push jordiburgos/nubol:0.0.1
#

FROM tomcat:9.0.17-jre8-alpine

RUN rm -rf /usr/local/tomcat/webapps/*

COPY ./target/nubol-0.0.1-SNAPSHOT.war /usr/local/tomcat/webapps/ROOT.war

ENV JAVA_OPTS ""

EXPOSE 8080

CMD ["catalina.sh", "run"]

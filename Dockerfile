FROM openjdk:17
COPY target/studentApp-0.0.1.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
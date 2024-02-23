#FROM: specifies the base Image
FROM node

#tells docker where teh working directory should be

WORKDIR /app

COPY hello.js /app/

RUN echo "This is inside the docker file"
RUN ls


# Mostly for documentation and for developers to know which port to expose
#EXPOSE 8080

# How to start the application 
# More customizable than run
ENTRYPOINT [ "node", "hello.js" ]
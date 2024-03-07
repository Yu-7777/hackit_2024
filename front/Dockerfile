FROM node:20.11.0

RUN mkdir /myapp
WORKDIR /myapp

ADD package.json /myapp/package.json
ADD package-lock.json /myapp/package-lock.json

RUN npm install

ADD . /myapp

EXPOSE 8080

CMD ["npm", "run", "dev"]

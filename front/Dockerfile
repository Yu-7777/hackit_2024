FROM node:20.11.0

RUN mkdir /myapp
WORKDIR /myapp

ADD . /myapp

RUN npm install

CMD ["npm", "run", "dev"]

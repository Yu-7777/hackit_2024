FROM ruby:3.2.2
RUN apt-get update -qq && \
    apt-get install -y build-essential libpq-dev vim && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    npm install yarn -g -y
RUN mkdir /myapp
WORKDIR /myapp
ADD . /myapp
RUN chmod 755 /myapp/bin/render-build.sh

RUN bundle install

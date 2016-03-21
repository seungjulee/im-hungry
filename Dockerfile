FROM node:argon

# Create app directory
RUN mkdir -p /src

# Install app dependencies
COPY package.json /src
WORKDIR /src
RUN npm install

# Bundle app source
COPY . /src
WORKDIR /src
RUN npm build

EXPOSE 3000
CMD [ "npm", "start" ]

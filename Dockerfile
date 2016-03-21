FROM node:argon

# Create app directory
RUN mkdir -p /src

# Install app dependencies
COPY package.json /src
RUN npm install

# Bundle app source
WORKDIR /src
COPY . /src
RUN npm build

EXPOSE 3000
CMD [ "npm", "start" ]

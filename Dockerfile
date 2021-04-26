FROM node:14.16.0 as build-deps
WORKDIR /ReactPJWebCourse
ENV PATH /ReactPJWebCourse/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
CMD ["npm", "start"]

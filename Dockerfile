FROM node:8
RUN mkdir dist
WORKDIR dist
RUN git clone https://github.com/cesarvega/lb4.git
WORKDIR lb4
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]

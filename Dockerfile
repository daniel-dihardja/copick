FROM node:6.9.2
RUN npm install -g strongloop
USER node
COPY package.json /home/node/package.json
RUN cd /home/node/ && npm install
ENV NODE_ENV=production
WORKDIR /home/node
COPY . /home/node
CMD ["npm", "start" ]

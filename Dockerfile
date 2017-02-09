FROM node:6.9.3
RUN npm install -g strongloop
USER node
COPY package.json /home/node/package.json
RUN cd /home/node/ && npm install
WORKDIR /home/node
COPY . /home/node
ENV NODE_ENV=production
CMD ["npm", "start" ]

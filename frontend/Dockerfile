FROM node:26-alpine

COPY . /frontend
WORKDIR /frontend
RUN npm clean-install

CMD ["npm", "run", "start"]

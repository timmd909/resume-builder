FROM devuan/devuan:excalibur

EXPOSE 8888

ENV PDF_PORT 8888

RUN apt update && \
    apt install -y nodejs npm

RUN mkdir /pdf

COPY . /pdf
WORKDIR /pdf
RUN npm install

CMD ["npm", "start"]

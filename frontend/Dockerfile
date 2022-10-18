FROM node:16

WORKDIR /app/desafio-front

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT [ "npm" ]

CMD [ "start" ]

LABEL maintener="Breno Nascimento <breno564nascimento@gmail.com>"
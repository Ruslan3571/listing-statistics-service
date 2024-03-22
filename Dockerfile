FROM node:20-alpine

RUN  ["npm", "i", "-g", "modclean"]

COPY ["package*.json", "./"]

RUN  ["npm", "ci"]

RUN  ["modclean", "-r"]

RUN  ["npm", "uninstall", "modclean"]

COPY . .

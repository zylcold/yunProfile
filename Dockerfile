FROM node
WORKDIR $(pwd)/dist
COPY . /nginx/
CMD [ "npm" "start" ]

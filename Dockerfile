FROM akhatove/nubuntu

MAINTAINER Maurice Dominguez

RUN git clone https://github.com/madoos/case-technical-test.git /home/case-technical-test/

WORKDIR /home/case-technical-test/

RUN  npm install -g gulp
RUN npm install -g pm2
RUN npm install
RUN mkdir dist

CMD ["npm", "start"]

EXPOSE 3005

FROM node:16
ENV TZ="utc"
WORKDIR /usr/src/app
RUN useradd dtm --shell /bin/bash --create-home \
  && usermod -a -G root dtm \
  && echo 'ALL ALL = (ALL) NOPASSWD: ALL' >> /etc/sudoers \
  && echo 'dtm:secret' | chpasswd \
  && chown -R dtm:dtm  /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
USER dtm
EXPOSE 8080
CMD [ "node", "app.js" ]

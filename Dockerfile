FROM node:16
WORKDIR /home/dtm
RUN useradd dtm --shell /bin/bash --create-home \
  && usermod -a -G root dtm \
  && echo 'ALL ALL = (ALL) NOPASSWD: ALL' >> /etc/sudoers \
  && echo 'dtm:secret' | chpasswd \
  && apt-get update \
  && apt-get install vim -y
COPY package.json ./
RUN npm install
COPY . .
RUN chown -R dtm:dtm  /home/dtm
USER dtm
EXPOSE 8080
CMD [ "node", "src/index.js" ]

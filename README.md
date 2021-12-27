### Quick Start Guide

1. git clone https://github.com/aaronnassiry/DTM.git
2. cd DTM
3. ./start.sh

```
let's build the docker image....

[+] Building 0.7s (11/11) FINISHED                                                                                                             
 => [internal] load build definition from Dockerfile                                                                                      0.0s
 => => transferring dockerfile: 37B                                                                                                       0.0s
 => [internal] load .dockerignore                                                                                                         0.0s
 => => transferring context: 34B                                                                                                          0.0s
 => [internal] load metadata for docker.io/library/node:16                                                                                0.5s
 => [internal] load build context                                                                                                         0.0s
 => => transferring context: 2.41kB                                                                                                       0.0s
 => [1/6] FROM docker.io/library/node:16@sha256:32605ead97ed57bd39a8a7b0e919240e1a3218974dfc6965e61b54a801753131                          0.0s
 => CACHED [2/6] WORKDIR /usr/src/app                                                                                                     0.0s
 => CACHED [3/6] RUN useradd dtm --shell /bin/bash --create-home   && usermod -a -G root dtm   && echo 'ALL ALL = (ALL) NOPASSWD: ALL' >  0.0s
 => CACHED [4/6] COPY package*.json ./                                                                                                    0.0s
 => CACHED [5/6] RUN npm install                                                                                                          0.0s
 => [6/6] COPY . .                                                                                                                        0.0s
 => exporting to image                                                                                                                    0.0s
 => => exporting layers                                                                                                                   0.0s
 => => writing image sha256:7946426e8d64fd76d78d24340b3e68fec270d72e0523c5495c8e2d5b4be0dc55                                              0.0s
 => => naming to docker.io/library/dtm-web-app:latest                                                                                     0.0s
 
starting docker image: dtm-web-app:latest....
sleeping for 15 seconds
logging into the docker image now....

```

4. ./shell-scripts/curl.sh 

```
starting dtm node app....
sleeping for 5 seconds...
making 25 calls to this endpoint:  http://localhost:9999

Timestamp,RequestType,RequestNumber,SourceIP
"Mon, 27 Dec 2021 19:56:50 GMT",GET,1,::ffff:127.0.0.1
"Mon, 27 Dec 2021 19:56:51 GMT",GET,2,::ffff:127.0.0.1
"Mon, 27 Dec 2021 19:56:51 GMT",GET,3,::ffff:127.0.0.1
"Mon, 27 Dec 2021 19:56:52 GMT",GET,4,::ffff:127.0.0.1
"Mon, 27 Dec 2021 19:56:52 GMT",GET,5,::ffff:127.0.0.1
"Mon, 27 Dec 2021 19:56:53 GMT",GET,6,::ffff:127.0.0.1
"Mon, 27 Dec 2021 19:56:53 GMT",GET,7,::ffff:127.0.0.1
"Mon, 27 Dec 2021 19:56:53 GMT",GET,8,::ffff:127.0.0.1
"Mon, 27 Dec 2021 19:56:54 GMT",GET,9,::ffff:127.0.0.1
"Mon, 27 Dec 2021 19:56:54 GMT",GET,10,::ffff:127.0.0.1
"Mon, 27 Dec 2021 19:56:55 GMT",GET,11,::ffff:127.0.0.1
"Mon, 27 Dec 2021 19:56:55 GMT",GET,12,::ffff:127.0.0.1
"Mon, 27 Dec 2021 19:56:56 GMT",GET,13,::ffff:127.0.0.1
"Mon, 27 Dec 2021 19:56:56 GMT",GET,14,::ffff:127.0.0.1
"Mon, 27 Dec 2021 19:56:57 GMT",GET,15,::ffff:127.0.0.1
"Mon, 27 Dec 2021 19:56:57 GMT",GET,16,::ffff:127.0.0.1
"Mon, 27 Dec 2021 19:56:58 GMT",GET,17,::ffff:127.0.0.1
"Mon, 27 Dec 2021 19:56:58 GMT",GET,18,::ffff:127.0.0.1
"Mon, 27 Dec 2021 19:56:59 GMT",GET,19,::ffff:127.0.0.1
"Mon, 27 Dec 2021 19:56:59 GMT",GET,20,::ffff:127.0.0.1
"Mon, 27 Dec 2021 19:57:00 GMT",GET,21,::ffff:127.0.0.1
"Mon, 27 Dec 2021 19:57:00 GMT",GET,22,::ffff:127.0.0.1
"Mon, 27 Dec 2021 19:57:01 GMT",GET,23,::ffff:127.0.0.1
"Mon, 27 Dec 2021 19:57:01 GMT",GET,24,::ffff:127.0.0.1
"Mon, 27 Dec 2021 19:57:02 GMT",GET,25,::ffff:127.0.0.1

```
5. cd bigquery
6. vi account.json and add your cloud account details to this file
7. export GOOGLE_APPLICATION_CREDENTIALS=./account.json
8. export GOOGLE_APPLICATION_PROJECT_ID=""
9. export BIGQUERY_DATASET_ID=""
10. node load.js
```
Job interview-323823:US.c48b3f87-8a12-4325-a73f-16229d8757fe completed.
```
11. node query.js
```
{
  Timestamp: 'Mon, 27 Dec 2021 21:19:10 GMT',
  Request_Type: 'GET',
  Request_Number: '25',
  Source_IP: '::ffff:127.0.0.1'
}
{
  Timestamp: 'Mon, 27 Dec 2021 21:19:10 GMT',
  Request_Type: 'GET',
  Request_Number: '24',
  Source_IP: '::ffff:127.0.0.1'
}
{
  Timestamp: 'Mon, 27 Dec 2021 21:19:09 GMT',
  Request_Type: 'GET',
  Request_Number: '23',
  Source_IP: '::ffff:127.0.0.1'
}
{
  Timestamp: 'Mon, 27 Dec 2021 21:19:09 GMT',
  Request_Type: 'GET',
  Request_Number: '22',
  Source_IP: '::ffff:127.0.0.1'
}
{
  Timestamp: 'Mon, 27 Dec 2021 21:19:08 GMT',
  Request_Type: 'GET',
  Request_Number: '21',
  Source_IP: '::ffff:127.0.0.1'
}
```
12. exit docker image

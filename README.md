```ls -tlr DTM
-rw-r--r--  1 anassiry  staff   363 Dec 23 10:14 package.json
-rw-r--r--  1 anassiry  staff  1479 Dec 23 13:43 app.js
-rw-r--r--  1 anassiry  staff   393 Dec 23 14:44 Dockerfile
-rwxr-xr-x  1 anassiry  staff   278 Dec 23 14:48 run.sh*
-rwxr-xr-x@ 1 anassiry  staff   207 Dec 23 15:00 curl.sh*
-rw-r--r--  1 anassiry  staff    39 Dec 23 15:01 README.md

docker build . -t dtm-web-app:latest

./run.sh
starting docker image: dtm-web-app:latest....
sleeping for 15 seconds
logging into the docker image now....


./curl.sh 
sleeping for 5 seconds...
making 25 calls to this endpoint:  http://localhost:9999

Timestamp (UTC)               Request Type    Request Number   Source IP
Thu, 23 Dec 2021 23:05:36 GMT	GET		1		::ffff:127.0.0.1
Thu, 23 Dec 2021 23:05:36 GMT	GET		2		::ffff:127.0.0.1
Thu, 23 Dec 2021 23:05:37 GMT	GET		3		::ffff:127.0.0.1
Thu, 23 Dec 2021 23:05:37 GMT	GET		4		::ffff:127.0.0.1
Thu, 23 Dec 2021 23:05:38 GMT	GET		5		::ffff:127.0.0.1
Thu, 23 Dec 2021 23:05:38 GMT	GET		6		::ffff:127.0.0.1
Thu, 23 Dec 2021 23:05:39 GMT	GET		7		::ffff:127.0.0.1
Thu, 23 Dec 2021 23:05:39 GMT	GET		8		::ffff:127.0.0.1
Thu, 23 Dec 2021 23:05:40 GMT	GET		9		::ffff:127.0.0.1
Thu, 23 Dec 2021 23:05:40 GMT	GET		10		::ffff:127.0.0.1
Thu, 23 Dec 2021 23:05:41 GMT	GET		11		::ffff:127.0.0.1
Thu, 23 Dec 2021 23:05:41 GMT	GET		12		::ffff:127.0.0.1
Thu, 23 Dec 2021 23:05:42 GMT	GET		13		::ffff:127.0.0.1
Thu, 23 Dec 2021 23:05:42 GMT	GET		14		::ffff:127.0.0.1
Thu, 23 Dec 2021 23:05:43 GMT	GET		15		::ffff:127.0.0.1
Thu, 23 Dec 2021 23:05:44 GMT	GET		16		::ffff:127.0.0.1
Thu, 23 Dec 2021 23:05:44 GMT	GET		17		::ffff:127.0.0.1
Thu, 23 Dec 2021 23:05:45 GMT	GET		18		::ffff:127.0.0.1
Thu, 23 Dec 2021 23:05:45 GMT	GET		19		::ffff:127.0.0.1
Thu, 23 Dec 2021 23:05:46 GMT	GET		20		::ffff:127.0.0.1
Thu, 23 Dec 2021 23:05:46 GMT	GET		21		::ffff:127.0.0.1
Thu, 23 Dec 2021 23:05:47 GMT	GET		22		::ffff:127.0.0.1
Thu, 23 Dec 2021 23:05:47 GMT	GET		23		::ffff:127.0.0.1
Thu, 23 Dec 2021 23:05:48 GMT	GET		24		::ffff:127.0.0.1
Thu, 23 Dec 2021 23:05:48 GMT	GET		25		::ffff:127.0.0.1 ```

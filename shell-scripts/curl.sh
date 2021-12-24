#!/bin/bash
echo "starting dtm node app...."
node src/index&
echo "sleeping for 5 seconds..."
sleep 5
echo "making 25 calls to this endpoint:  http://localhost:9999"
for i in {1..25}
do
        curl http://localhost:9999
done
cat ./weblog.csv

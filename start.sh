#!/bin/bash
seconds=15
docker_image="dtm-web-app:latest"

echo "let's build the image..."
docker build . -t $docker_image

echo "starting docker image: $docker_image...."
docker run -p 9999:9999 $docker_image &
echo "sleeping for $seconds seconds"
sleep $seconds

echo "logging into the docker image now...."
docker run -ti $docker_image bash 

#!/bin/bash

# Check to see if service is running
output="$(docker service ls 2>/dev/null | grep jareddlc_com)"
if [ -z "$output" ]; then
  echo "Docker service is not running. Creating docker service..."
  docker service create --replicas 1 --name jareddlc_com -p 80 jareddlc.com
  exit 0
fi
echo "Docker service is running."

# Check container id
containerId=$(docker ps | grep jareddlc_com | awk '{print $1}')
if [ -z "$containerId" ]; then
  echo "Docker container id not found"
  exit 1
fi

# Kill the container to force docker service to create a new container
echo "killing container id: $containerId"
docker kill "$containerId"

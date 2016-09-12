#!/bin/bash

docker kill jareddlc_com &> /dev/null
KILL=$?
if [ $KILL -ne 0 ]; then
  echo "Docker kill failed"
  #exit $KILL
fi

docker rm jareddlc_com &> /dev/null
RM=$?
if [ $RM -ne 0 ]; then
  echo "Docker remove failed"
  #exit $RM
fi

docker build -t jareddlc.com .

echo "Container: docker run -d --name jareddlc_com -p 80 jareddlc.com"
echo "Service: docker service create --replicas 1 --name jareddlc_com -p 80 jareddlc.com"

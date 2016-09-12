jareddlc.com
============

`Description`:  My website

`Author`:     Jared De La Cruz

```
$ docker build -t jareddlc.com .
$ docker run -d --name jareddlc_com -p 80 jareddlc.com
$ docker service create --replicas 1 --name jareddlc_com -p 80 jareddlc.com
```

# Redis install via Docker 

``` docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest ```
 
 * it will install my redis sever in my docker machine,
 * localhost : 8001 
 * to enter this container 
 ```docker exec -it id bash```
 * Now Your in Container, to start the redis server ```redis-cli``` 

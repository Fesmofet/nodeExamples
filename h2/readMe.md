[![N|Solid](https://habrastorage.org/getpro/habr/post_images/792/138/92e/79213892e85d57177c0ba9864dd75cc6.png)](https://medium.com/analytics-vidhya/use-node-js-with-h2-database-4154887e121f)
```sh
docker pull croraf/h2-postgresql-server:1.0
```
```sh
docker create -p 1521:1521 -p 81:81 -v /path/to/local/data_dir:/opt/h2-data --name=H2dbWithPostgres croraf/h2-postgresql-server:1.0
```
```sh
docker start H2dbWithPostgres
```
Also tou need to create file for your db in /path/to/local/data_dir

```sh
touch /path/to/local/data_dir/mydatabase.mv.db
```
For browser GUI connection use  http://localhost:81
URL - jdbc:h2:/opt/h2-data/mydatabase

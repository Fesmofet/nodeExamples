$ docker pull croraf/h2-postgresql-server:1.0
$ docker create -p 1521:1521 -p 81:81 -v /path/to/local/data_dir:/opt/h2-data --name=H2dbWithPostgres croraf/h2-postgresql-server:1.0
$ docker start H2dbWithPostgres
$ touch /path/to/local/data_dir/mydatabase.mv.db

# The-Gameporium
Website for selling second hand games


## Dependencies
To build the website using Docker
- docker
- docker-compose

To build the project locally
- node
- nodemon
- postgres


## Development
### Local
To install required modules for use in local development for either the client or server first 

```
$ cd client
```
or
```
$ cd server
```
then run 
```
$ npm install
```
To start the client on port 3000, be in the client directory and run
```
$ npm run start
```
To start the server on port 5000, be in the server directory and run
```
$ nodemon index
```

**Note:** there is currently no automated way to setup postgreSQL locally and it must be done manually,
see `./database/database.sql` for refrence on how that should be setup
### Docker
From the root of the project simply run
```
$ sudo docker-compose up
```
Additionally, a script called `./scripts/cleanup.sh` is provided that both calls
```
$ docker-compose down
```
and removes any uneeded images for a clean rebuild.

**Note:** if you uncomment the volume used in the database the docker container will use the database on the local system instead of creating a whole new one. This is useful if you want your data to be persistent in testing.


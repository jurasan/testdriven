[![Build Status](https://travis-ci.org/jurasan/testdriven.svg?branch=master)](https://travis-ci.org/jurasan/testdriven)

docker-compose -f docker-compose-dev.yml build
docker-compose -f docker-compose-dev.yml up -d
docker exec -it testdriven-app_users_1 sh

docker-compose -f docker-compose-dev.yml build --no-cache
docker-compose -f docker-compose-dev.yml up -d --build

pip install -r requirements.txt

Recreate db:
$ docker-compose -f docker-compose-dev.yml run users python manage.py recreate_db

Seed db:
$ docker-compose -f docker-compose-dev.yml run users python manage.py seed_db

Connect to db:
$ docker-compose -f docker-compose-dev.yml exec users-db psql -U postgres

Shell:
$ docker-compose -f docker-compose-dev.yml run users flask shell

Test:
$ docker-compose -f docker-compose-dev.yml run users python manage.py test

Coverage:
$ docker-compose -f docker-compose-dev.yml run users python manage.py cov

Lint:
$ docker-compose -f docker-compose-dev.yml run users flake8 project

Create a new AWS EC2 Docker host with Docker Machine:
$ docker-machine create --driver amazonec2 testdriven-prod
Point to production host:
$ docker-machine env testdriven-prod
$ eval $(docker-machine env testdriven-prod)
Point to local:
eval $(docker-machine env -u)

$ docker-compose -f docker-compose-prod.yml up -d --build
$ docker-compose -f docker-compose-prod.yml run users python manage.py recreate_db
$ docker-compose -f docker-compose-prod.yml run users python manage.py seed_db
$ docker-compose -f docker-compose-prod.yml run users python manage.py test

Show config:
$ docker-compose -f docker-compose-prod.yml run users env

To show configuration:
Add a print statement to **init**.py, right before the route handler, to view the app config to ensure that it is working:
import sys
print(app.config, file=sys.stderr)
$ docker-compose -f docker-compose-dev.yml logs

Problems with mounting volume on Windows:

1.  Docker Setting -> Shared Drive -> Reset credentials.

OR

2.  Local Security Policy > Network List Manager Policies and Double-clicked ‘unidentified Networks’ and change the location type to ‘private’
    https://forums.docker.com/t/volume-mounts-in-windows-does-not-work/10693/92

# Client

## Run client app

`npm start`

## Tests

```
npm test
react-scripts test --coverage
```

## Docker

### Run

`docker-compose -f docker-compose-dev.yml up --build -d client`

### Test

`docker-compose -f docker-compose-dev.yml run client npm test`

# Production

$ docker-machine env testdriven-prod-2
$ eval $(docker-machine env testdriven-prod-2)
$ export REACT_APP_USERS_SERVICE_URL=http://184.73.131.145
$ docker-compose -f docker-compose-prod.yml up -d --build

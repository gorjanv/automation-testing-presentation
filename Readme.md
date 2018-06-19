# app

First you need to build target application. To do that you need to run:
`npm run build`

Run the target application:
`npm start`

To access the app you need to use username/password: admin@testapp.com / secret

# 01-simple-selenium-test

Go to `01-simple-selenium-test` directory.

To run selenium test against the target application just run:
`npm run test`

Make sure the `app` application runs on localhost at the moment.


# 02-simple-cypress-test

Go to `02-simple-cypress-test` directory.

To run cypress test against the target application just run:
`npm run test`

Make sure the `app` application runs on localhost at the moment.


# 03-advanced-selenium-test

Go to `02-simple-cypress-test` directory.

You can run this selenium test on localhost or inside the docker container. To run it locally, execute:
`npm run test`

To run it on localhost in headless mode, use `HEADLESS=true` environment variable.

The see the output screenshots of every step check `03-advanced-selenium-test/screenshots` directory.

Make sure the `app` application runs on localhost at the moment.

To run it in the docker container, go to the root directory of the project and execute the set of commands:
```
docker-compose -f ./docker-compose.selenium.yml build
docker-compose -f ./docker-compose.selenium.yml up
```

Make sure the `app` application has been built first.

To stop all the running containers, execute:
`docker-compose -f ./docker-compose.selenium.yml down`


# 04-advanced-cypress-test

Go to `04-advanced-cypress-test` directory.

You can run this cypress test on localhost or inside the docker container. To run it locally, execute:
`npm run test`

To run it on localhost in headless mode, execute:
`npm run test:headless`

Make sure the `app` application runs on localhost at the moment.

To run it in the docker container, go to the root directory of the project and execute the set of commands:

```
docker-compose -f ./docker-compose.cypress.yml build
docker-compose -f ./docker-compose.cypress.yml up
```

Make sure the `app` application has been built first.

To stop all the running containers, execute:
`docker-compose -f ./docker-compose.cypress.yml down`
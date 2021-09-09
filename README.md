## DB

We added `sqlite` as db provider in `schema.prisma` you can change it to your custom db provider

after an update your `schema.prisma` run

```shell
> yarn db-dev
```

this command will save your schema into db

now run

```shell
> yarn generate
> yarn dev
```

- build prisma client
- build crud system
- build client graphql hooks
- start dev server

`Good work`

## To run the app inside a local Docker engine

```shell
docker-compose up
```

## To build the Docker container

Via Docker Compose:

```shell
docker-compose build
```

Via Skaffold:

```shell
skaffold build --tag='hello-world-kustomize-k8s-local'
```

## To deploy to K8s cluster

```shell
> skaffold run --tail --port-forward
```

Now the app will be deployed, the deployment will be port-forwarded, and you can access it on http://localhost:3002.

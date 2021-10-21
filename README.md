# Holoplot Github Vorlage

### Please, run only in the development mode.

## Development

```sh
yarn nx run-many --target=serve --all
```

## Build

```sh
yarn nx run-many --target=build --prod --all
```

## Test

```sh
yarn nx run-many --target=test --prod --all
```

## Start Server

```sh
http-server --port 3000 -P http://localhost:3000? dist/apps/template
```

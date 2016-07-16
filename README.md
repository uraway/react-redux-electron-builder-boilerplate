# react-redux-electron-builder-boilerplate

```
react-redux-electron-builder-boilerplate
|__ app/              --- application directory
|__ build/            --- build resource
|__ dist/             --- distributions
|__ scripts/
|__ src/              --- source directory
|__ test/
```

## Development

Start hot server:

```
$ npm run server-hot
```

And run electron in another tab:

```
$ npm run start-hot
```

## Package

See more info: [electron-packager](https://github.com/electron-userland/electron-packager)

To package the application, run this command:

```
$ npm run package
```

Only OS X version will be packaged by default.

## Github Release

See more info: [electron-builder](https://github.com/electron-userland/electron-builder)

Set enviromental variable `GH_TOKEN`. Check your [personal access token](https://github.com/settings/tokens).

To package and upload the application installers to your repository's github release

```
$ npm run release
```

## TODO
- [ ] [codesign](https://github.com/electron-userland/electron-builder/wiki/Code-Signing)

# YOCCI_ii7 BLOG


### 開発用メモ

#### Pug Watch
```bash
# 公開用(圧縮)
$ find ./src/pug -type f -not -path '*/_*' -name '*.pug' -exec pug -w {} -o ./dist \; & pug -w ./src/pug/page -o ./dist/page

# 開発用
$ find ./src/pug -type f -not -path '*/_*' -name '*.pug' -exec pug -w {} -o ./dist -P \; & pug -w ./src/pug/page -o ./dist/page -P
```

#### npm
``` baash
$ npm init -y
  npm install --save-dev ts-loader typescript webpack webpack-cli webpack-dev-server
```

#### scripts
```bash
# Webpack Server
$ npm start

# build
$ npm run build

# build -W
$ npm run watch
```

#### Directory Structure
```bash
C:.
├─.vscode
├─dist
│  ├─common
│  │  ├─css
│  │  └─js
│  ├─img
│  └─page
│      ├─about
│      ├─contact
│      └─news
├─node_modules
└─src
    ├─original_css
    ├─pug
    │  ├─page
    │  │  ├─about
    │  │  ├─contact
    │  │  └─news
    │  ├─_include
    │  ├─_layout
    │  └─_var
    ├─scss
    │  ├─foundation
    │  ├─layout
    │  ├─project
    │  └─var
    └─ts
```

# YOCCI_ii7 BLOG

[link](https://yocci7-blog.vercel.app)

### 開発用メモ

#### Pug Watch
```bash
# 開発用
$ find ./src/pug -type f -not -path '*/_*' -name '*.pug' -exec pug -w {} -o ./dist -P \; & pug -w ./src/pug/page -o ./dist/page -P

# 公開用(圧縮)
$ find ./src/pug -type f -not -path '*/_*' -name '*.pug' -exec pug -w {} -o ./dist \; & pug -w ./src/pug/page -o ./dist/page
```

#### npm
``` bash
$ npm init -y
  npm install --save-dev webpack webpack-cli webpack-dev-server ts-loader typescript
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

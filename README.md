# YOCCI_ii7 BLOG


#### Pug Watch
```bash
find ./src/pug -type f -not -path '*/_*' -name '*.pug' -exec pug -w {} -o ./dist -P \; & pug -w ./src/pug/page -o ./dist/page -P

```
#### Webpack Server
```bash
npm start
```

#### build
```bash
npm run build
```

#### build -W
```bash
npm run watch
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

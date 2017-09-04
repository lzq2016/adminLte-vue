## Demo Build Setup


# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

### 修改
#### admin-lte/dist/css/skins/_all-skins.min.css
```
.skin-blue-light .main-header .navbar {
    background-color: #01C0C8
}
.skin-blue-light .main-header .logo {
    background-color: #01B8C0;
    color: #fff;
    border-bottom: 0 solid transparent
}
```

#### webpack.config.js 删掉
```
{
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: "pre",
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
```
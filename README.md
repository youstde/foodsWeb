# 博客系统前端项目
主要功能：
1.用户的登录和注册
2.文章的编写
3.用户的可以对文章进行点赞，评价，同时可以订阅关注喜欢的作者

###后续我会继续不定期新增功能，新增的功能或者修复的bug会在底部的更新日志中一一列出

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

线上线下改动地方：退出登录的时候的cookie的domain，请求接口的地址

#### 更新日志：

2018.1.26 周五 博客系统上线

2018.1.27 周六 新增了文章按标签筛选功能，用户退出功能，同时修复了标签刷新后消失的问题（下期计划：新增我的主页，我的关注两个功能,优化点：项目中的线上线下的配置信息单独提取成一个配置文件）
22018.1.29 周一 配置已经区别于线上线下
2018.02.13 添加了跳转登录页登录成功后回调的记忆功能
		       添加了文章浏览量的功能


# 微信小程序api封装


```js

// app.js 引入
import { request } from './src/index.js'

App({
  request: request
})


// 需求页面

app.request({
  url:'',
  method: 'GET' , // 默认POST
  data:'',
  header:'',
}).then((res) => {
  //success
}).catch((error) => {
  //fail
})

```

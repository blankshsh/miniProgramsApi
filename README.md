# 微信小程序api封装

# 使用
```js
// app.js 按需引入
import { 
  request, // wx.request
  getSize, // 获取元素size
  showImgs, // 全屏显示图片轮播
  navBack, // 页面回退
  showModal, // 模态弹窗
  showToast, // 消息弹窗
} from './src/index.js'
App({
  request: request,
  getSize: getSize
})

// 需求页面
const app = getApp()
app.request()

```

# API
## Promise类 .then().catch()
- request
- getSize
- showImgs
- showModal

## 其他类
- navBack
- showToast

### request(Object)
| key | 说明 | 类型 | 默认值 |
| url | 接口地址 | String | -- |
| method | 请求方式 | String | POST |
| data | 发送数据 | Object | -- |
| header | 数据头 | Object | -- |

```js
app.request({
  url:'',
  data:{},
  header:{}
}).then((res) => {
  // success
}).catch((error) => {
  // fail
})
```

### getSize()

```js
app.getSize(id).then((res) => {
  // success
}).catch((error) => {
  // fail
})
```

### showImgs(Array, Index)
| key | 说明 | 类型 | 默认值 |
| Array | 图片数组 | Array | -- |
| Index | 需显示的图片下标 | Number | 0 |

```js
app.showImgs(Array, Index).then((res) => {
  // success
}).catch((error) => {
  // fail
})
```

### showModal(Content, Title)
| key | 说明 | 类型 | 默认值 |
| Content | 内容 | String | -- |
| Title | 标题 | String | 提示 |

```js
app.showModal(Content, Title).then((res) => {
  // success
}).catch((error) => {
  // fail
})
```

### navBack(Time, Num)
| key | 说明 | 类型 | 默认值 |
| Time | 延时 | Number | 2000 |
| Num | 后退页数 | Number | 1 |

```js
app.navBack()
```

### showToast(Type, Title, Time, Mask)
| key | 说明 | 类型 | 可选参数 | 默认值 |
| Type | 图标类型 | String | error/loading/succees | loading |
| Title | 内容 | String | -- | -- |
| Time | 显示时长 | Number | -- | 2000 |
| Mask | 遮罩层 | Boolean | -- | false |

```js
app.showToast('error', '错误信息', 2000, true)
```

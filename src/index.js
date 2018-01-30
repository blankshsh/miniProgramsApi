export function request(data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: data.url,
      method: method || 'POST',
      data: data.data || {},
      header: data.header || {},
      success: function(res) {
        resolve(res)
      },
      fail: function(res) {
        reject({ data: { status: { succeed: 0, error_desc: '网络错误' } } })
      }
    })
  })
}

export function getSize(id) {
  return new Promise((resolve, reject) => {
    wx.createSelectorQuery().select(id).boundingClientRect(function(rect) {
      resolve(rect)
    }).exec()
  })
}

export function showImgs(url) {
  wx.previewImage({ urls: url })
}

export function navBack(time) {
  setTimeout(function() {
    wx.navigateBack({ delta: 1 })
  }, time || 2000)
}

export function showModal(text) {
  return new Promise((resolve, reject) => {
    wx.showModal({
      title: '提示',
      content: text || ' ',
      success: function(res) {
        if (res.confirm) {
          resolve({ succeed: 1 })
        } else if (res.cancel) {
          resolve({ succeed: 0 })
        }
      }
    })
  })
}

export function showToast(type, title, time, mask) {
  wx.showToast({
    title: title || ' ',
    image: type === 'error' ? '/static/error_fff.png' : '',
    icon: type || 'loading',
    duration: time || 2000,
    mask: mask || false
  })
}
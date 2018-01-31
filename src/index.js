export function request(data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: data.url,
      method: data.method || 'POST',
      data: data.data || {},
      header: data.header || {},
      success: (res) => { resolve(res) },
      fail: () => {
        resolve({ data: { status: { succeed: 0, error_desc: '网络错误' } } })
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

export function showImgs(url, index) {
  return new Promise((resolve, reject) => {
    wx.previewImage({
      urls: url,
      current: url[index] || url[0],
      succees: (res) => {
        resolve({ succeed: 1 })
      },
      fail: (error) => {
        resolve({ succeed: 0 })
      }
    })
  })
}

export function navBack(time, num) {
  setTimeout(() => {
    wx.navigateBack({ delta: num || 1 })
  }, time || 2000)
}

export function showModal(text, title) {
  return new Promise((resolve, reject) => {
    wx.showModal({
      title: title || '提示',
      content: text || ' ',
      success: (res) => {
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
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

export function showImgs(url, index = 0) {
  return new Promise((resolve, reject) => {
    wx.previewImage({
      urls: url,
      current: url[index],
      succees: (res) => {
        resolve({ succeed: 1 })
      },
      fail: (error) => {
        resolve({ succeed: 0 })
      }
    })
  })
}

export function navBack(time = 2000, num = 1) {
  setTimeout(() => {
    wx.navigateBack({ delta: num })
  }, time)
}

export function showModal(text = ' ', title = '提示') {
  return new Promise((resolve, reject) => {
    wx.showModal({
      title: title,
      content: text,
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

export function showToast(type = 'loading', title = ' ', time = 2000, mask = false) {
  wx.showToast({
    title: title,
    image: type === 'error' ? '/static/error_fff.png' : '',
    icon: type,
    duration: time,
    mask: mask
  })
}
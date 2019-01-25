// pages/sign/sign.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false
  },
  changeMask() {
    var isShow = this.data.show ? false : true;
    this.setData({
      show: isShow
    })
  },
  turnTo(){
    wx.navigateTo({
      url: '/pages/sign/sign'
    })
  }
})
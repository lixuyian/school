// pages/score/score.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    array: ['大一上', '大一下', '大二上', '大二上', '大三上', '大三下', '大四上', '大四下'],
    objectArray: [
      {
        id: 0,
        name: '大一上'
      },
      {
        id: 1,
        name: '大一下'
      },
      {
        id: 2,
        name: '大二上'
      },
      {
        id: 3,
        name: '大二上'
      },
      {
        id: 4,
        name: '大三上'
      },
      {
        id: 5,
        name: '大三下'
      },
      {
        id: 6,
        name: '大四上'
      },
      {
        id: 7,
        name: '大四下'
      }
    ],
    index: 0,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  showResult() {
    var isShow = this.data.show ? false : true;
    this.setData({
      show: isShow
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
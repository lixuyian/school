// pages/weather/weather.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cities: [],
    array: ['武汉', '2', '3', '4', '5', '6', 'abc', 'e'],
    objectArray: [
      {
        id: 0,
        name: '武汉'
      },
      {
        id: 1,
        name: '2'
      },
      {
        id: 2,
        name: '3'
      },
      {
        id: 3,
        name: '4'
      },
      {
        id: 4,
        name: '5'
      },
      {
        id: 5,
        name: '6'
      },
      {
        id: 6,
        name: 'abc'
      },
      {
        id: 7,
        name: 'e'
      }
    ],
  },
  bindPickerChange(e) {
    var index = e.detail.value;
    var item = this.data.array[index];
    var cities = this.data.cities;
    var has = cities.includes(item);
    console.log(item)
    cities.push(item);
    console.log(cities)
    console.log(has)
    if(has){
      cities.pop();
    }
    this.setData({
      cities
    })
    console.log(cities)
  },
  delect() {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  location() {
    var isShow = this.data.show ? false : true;
    this.setData({
      show: isShow
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
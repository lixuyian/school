// pages/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    course: [
      {
        day: "周一", date: "10",
        course: [
          { time: "1,2", course: "大学语文", adress: "J3-103" },
          { time: "9,10,11", course: "高等数学", adress: "J2-418" }
        ]
      },
      {
        day: "周二", date: "11",
        course: [
          { time: "3,4", course: "大学英语", adress: "J2-315" }
        ]
      },
      {
        day: "周三", date: "12",
        course: [
          { time: "7,8", course: "大学英语", adress: "J2-315" }
        ]
      },
      {
        day: "周四", date: "13",
        course: [
          { time: "5,6", course: "大学英语", adress: "J2-315" }
        ]
      },
      {
        day: "周五", date: "14",
        course: [
          { time: "3,4", course: "大学英语", adress: "J2-315" }
        ]
      },
      {
        day: "周六", date: "15",
        course: [
          { time: "1,2", course: "大学英语", adress: "J2-315" }
        ]
      },
      {
        day: "周日", date: "16",
        course: [
          { time: "3,4", course: "大学英语", adress: "J2-315" }
        ]
      },
    ],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
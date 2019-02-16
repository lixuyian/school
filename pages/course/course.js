// pages/course/course.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    update: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow() {
    wx.onSocketOpen(function(res) {
      console.log("已连接")
    })
    //获取当前周课表
    //获取系统时间
    var course = wx.getStorageSync('course');
    if (course) {
      this.setData({
        course,
      })
    } else {
      var currentDate = new Date().getDate();
      var week = Math.ceil(currentDate / 7);
      //使用获取到的week发送请求获取当前课表
      wx.sendSocketMessage({
        data: '{ "type": "curriculum", "action": "request", "data": { "weekid": ' + week + ' } }',
      })
      console.log("已发送");
      this.setData({
        update: true
      })
    }


    wx.onSocketMessage(res => {
      if (this.data.update) {
        var data = JSON.parse(res.data);
        var course = data.data.course;
        this.setData({
          course,
        })
        wx.setStorageSync("course", this.data.course);
      }
    })
  },


  //显示当前月日历
  showMonths() {
    this.setData({
      showMonth: true
    })
  },

  //显示具体课表
  showCourse(e) {
    // console.log(e);
    //获取对应weekId
    var date = e.detail;
    var weekId = Math.ceil(date / 7);
    //发送请求获取对应周课表
    wx.sendSocketMessage({
      data: '{ "type": "curriculum", "action": "request", "data": { "weekid": ' + weekId + ' } }',
    })
    console.log("已发送");
    this.setData({
      update: true,
      course: [],
      showMonth: false,
    })
  }
})

// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    newSchool: "",
    newMajor: "",
    newYear: "",
    upload: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var avatarUrl = wx.getStorageSync('avatarUrl');
    var nickName = wx.getStorageSync('nickName');
    var student = wx.getStorageSync('student');
    this.setData({
      avatarUrl,
      nickName,
      student
    })
  },
  showResult() {
    var isShow = this.data.show ? false : true;
    this.setData({
      show: isShow
    })
  },
  onSchool(e) {
    var newSchool = e.detail.value;
    this.setData({
      newSchool,
    })
  },
  onMajor(e) {
    var newMajor = e.detail.value;
    this.setData({
      newMajor,
    })
  },
  onYear(e) {
    var newYear = e.detail.value;
    this.setData({
      newYear,
    })
  },

  submit() {
    if (this.data.newSchool == '') {
      this.setData({
        newSchool: this.data.student.school,
      })
    }
    if (this.data.newMajor == '') {
      this.setData({
        newMajor: this.data.student.major,
      })
    }
    if (this.data.newYear == '') {
      this.setData({
        newYear: this.data.student.year,
      })
    }
    //发送请求上传新的用户信息，使用学号进行发送
    wx.sendSocketMessage({
      data: '{"type":"login","action":"upload","data":{ "nickName": "' + this.data.student.nickName + '","school":"' + this.data.newSchool + '","major":"' + this.data.newMajor + '","year":"' + this.data.newYear + '","id":"' + this.data.student.id + '","password":"' + this.data.student.password + '"}}',
    })
    console.log("已发送");
    this.setData({
      update: true,
      upload: true,
    })
    wx.onSocketMessage(res => {
      if (this.data.update) {
        var data = JSON.parse(res.data);
        console.log(data);
        //如果是信息数据
        if (!this.data.upload) {
          var student = data.data;
          //获取原有用户信息中的学籍信息并设置缓存
          if (student) {
            this.setData({
              student,
            })
            wx.setStorageSync("student", this.data.student);
            //跳转到欢迎页
          }
        }
      }
    })
    //成功后
    var student = {
      "id": this.data.student.id,
      "nickName": this.data.student.nickName,
      "password": this.data.student.password,
      "year": this.data.newYear,
      "school": this.data.newSchool,
      "major": this.data.newMajor,
    }
    wx.setStorageSync("student", student);
    this.setData({
      student,
      show: false,
      newSchool: "",
      newMajor: "",
      newYear: ""
    })
  }
}) 
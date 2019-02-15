// pages/information/information.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //1.是否注册过
    isLogin: false,
    //2.学籍信息
    ableToSee: false,
    socketOpen: false,
    update: false,
    upload: false,

  },
  onGetUserInfo(e) {
    //获取微信用户信息
    const user = e.detail.userInfo;
    var nickName = user.nickName;
    var avatarUrl = user.avatarUrl
    this.setData({
      nickName,
      avatarUrl
    })
    /*
    * 将某些信息放入缓存，便于其他页面使用
    * 1.用户头像地址及nickName
    * 2.学籍信息
    * (学籍信息要在判断是否注册后进行设置)
    * 
    */
    wx.setStorageSync('nickName', this.data.nickName);
    wx.setStorageSync('avatarUrl', this.data.avatarUrl);

    //验证曾经是否有该用户

    //!!!!发送一次请求，判断是否有data

    wx.connectSocket({
      url: 'ws://47.94.193.159:4649',
      // url:'ws://127.0.0.1:4649',
      success: function (res) {
        console.log("链接成功");
      }
    })
    wx.onSocketOpen(res => {
      this.setData({
        socketOpen: true
      })
      setTimeout(() => {
        wx.sendSocketMessage({
          data: '{"type":"login","action":"request","data":{ "nickName": "' + this.data.nickName + '","id":""}}',
          // data: '{"type":"login","action":"request","data":{ "nickName": "赵一","id":""}}',
        })
        console.log("已发送");
        this.setData({
          update: true
        })
      }, 500)
    })
    wx.onSocketMessage(res => {
      if (this.data.update) {
        var data = JSON.parse(res.data);
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
            wx.navigateTo({
              url: '/pages/welcome/welcome'
            })
          }
          //没有对应信息，创建新用户
          else {
            //进行学籍信息的填写
            this.setData({
              isLogin: true,
            })
          }
        }
      }
    })
  },

  //获取填写的学籍信息  并设置学籍缓存信息
  onSchool(e) {
    var school = e.detail.value;
    this.setData({
      school,
    })
  },
  clearSchool() {
    this.setData({
      school: "",
    })
  },

  onMajor(e) {
    var major = e.detail.value;
    this.setData({
      major,
    })
  },
  clearMajor() {
    this.setData({
      major: "",
    })
  },
  onYear(e) {
    var year = e.detail.value;
    this.setData({
      year,
    })
  },
  clearYear() {
    this.setData({
      year: "",
    })
  },
  onId(e) {
    var id = e.detail.value;
    this.setData({
      id,
    })
  },
  clearId() {
    this.setData({
      id: "",
    })
  },
  onPassword(e) {
    var password = e.detail.value;
    this.setData({
      password,
    })
  },
  //密码显示隐藏功能
  see() {
    var ableToSee = this.data.ableToSee;
    this.setData({
      ableToSee: !ableToSee,
    })
  },

  //提交按钮功能
  submitAndTurn() {
    wx.sendSocketMessage({
      data: '{"type":"login","action":"upload","data":{ "nickName": "赵一","school":"' + this.data.school + '","major":"' + this.data.major + '","year":"' + this.data.year + '","id":"' + this.data.id + '","password":"' + this.data.password + '"}}',
    })
    console.log("已发送");
    this.setData({
      update: true,
      upload: true,
    })
    var student = {
      "school": this.data.school,
      "major": this.data.major,
      "year": this.data.year,
      "id": this.data.id,
      "password": this.data.password,
    }
    wx.setStorageSync("student", student);
    //跳转到欢迎页
    wx.navigateTo({
      url: '/pages/welcome/welcome'
    })
  },




})
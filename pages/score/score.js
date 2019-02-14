// pages/score/score.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    array: ['大一上', '大一下', '大二上', '大二下', '大三上', '大三下', '大四上', '大四下'],
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
    inputId: "",
    inputPassword: "",
    socketOpen: true,
    update: false,
    score: []
  },
  /**
   * 生命周期函数--监听页面加载
   */

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value,
      score: []
    })
  },

  //获取输入id
  onId(e) {
    var inputId = e.detail.value;
    this.setData({
      inputId,
    })
  },
  //获取输入密码
  onPassword(e) {
    var inputPassword = e.detail.value;
    this.setData({
      inputPassword,
    })
  },

  //显示查询结果
  showResult() {
    //从缓存中获取对应信息进行匹配
    var student = wx.getStorageSync('student');
    var password = student.password;
    var id = student.id;
    var inputId = this.data.inputId;
    var inputPassword = this.data.inputPassword;
    var sameId = (id == inputId);
    var samePassword = (password == inputPassword);
    if (sameId && samePassword) {

      //获取选择的学期
      var term = Number(this.data.index) + 1;
      console.log(term);
      //发送请求获取对应学期的学习成绩
      if (this.data.socketOpen) {
          wx.sendSocketMessage({
            data: '{"type":"score","action": "request","data":{"term":' + term + ',"id":"' + id + '"}}',
          })
          console.log("已发送");
          this.setData({
            update: true
          })
      }

      wx.onSocketMessage(res => {
        if (this.data.update) {
          var data = JSON.parse(res.data);
          var score = data.data;
          this.setData({
            score,
          })
        }
        // console.log(res);
      })
      //成功的情况下才显示以下内容
      var isShow = this.data.show ? false : true;
      this.setData({
        show: isShow
      })
    }
    else {
      console.log("sameId:" + sameId + ";" + "samePassword:" + samePassword);
      wx.showModal({
        title: '',
        content: '请重新输入学号和密码',
        showCancel: false
      })
    }

  },
  hideResult() {
    var isShow = this.data.show ? false : true;
    this.setData({
      show: isShow,
      update: false
    })
  }
})
// // pages/sign/sign.js
// // Page({

// //   /**
// //    * 页面的初始数据
// //    */
// //   data: {
// //     show: false
// //   },
// //   changeMask() {
// //     var isShow = this.data.show ? false : true;
// //     this.setData({
// //       show: isShow
// //     })
// //   },
// //   turnTo(){
// //     wx.navigateTo({
// //       url: '/pages/sign/sign'
// //     })
// //   }
// // })

// Page({
//   data: {
//     socketOpen: false,
//     msg: '{ "type": "curriculum", "action": "request", "data": { "dayid": 6 } }',
//     gupdate: false,
//   },
//   onLoad: function (options) {
//     wx.connectSocket({
//       url: 'ws://47.94.193.159:4649'
//     })


//     wx.onSocketOpen(res => {
//       this.setData({
//         socketOpen: true
//       })
//     })
//     wx.onSocketMessage(res => {
//       console.log(res.data);
//       if (this.data.gupdate) {
//         var res1 = JSON.parse(res.data);
//         console.log(res1)
//       }
//     })
//   },
//   sendSocketMessage() {
//     var socketOpen = this.data.socketOpen;
//     var msg = this.data.msg;
//     if (socketOpen) {
//       wx.sendSocketMessage({
//         data: msg
//       })
//       this.setData({
//         gupdate: true,
//       })
//     }
//   }
// })





// components/weather/weather.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    content: Object,
  },

  /**
   * 组件的初始数据
   */
  data: {
    date: false,
    detailWeather: [],
    update: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
  },
  attached() {
    var myDate = new Date();
    var currentMonth = myDate.getMonth() + 1;
    var currentDate = myDate.getDate().toString();
    var date = this.properties.content.date.toString();
    //用currentDate获取今日详细天气
    wx.onSocketMessage(res => {
      if (this.data.update) {
        var data = JSON.parse(res.data);
        var detailWeather = data.detailWeather;
        console.log(detailWeather)
        console.log(this.properties.content.date.toString());
        console.log(date.endsWith(currentDate))
        if (date.endsWith(currentDate)) {
          console.log(1);
          this.setData({
            detailWeather,
            date: true,
          })
        }
        console.log(this.data.detailWeather);
      }
    })
    wx.sendSocketMessage({
      data: '{ "type": "weatherDetail", "action": "request", "data": { "cityId": 0, "date": "2018/12/12" } }'
    })
    this.setData({
      update: true
    })
  }
})

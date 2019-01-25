// pages/index/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex:0,
    cardRightIn:false,
    cardLeftIn:false,
    weather: [
      {
        id: 0,
        city: "武汉",
        weather:
          [
            {
              date: "12 / 13",
              day: "周四",
              type: 0,//0,1,2,3,4,5,6,7,8区分天气类型
              range: "-2~5",
            },
            {
              date: "12 / 14",
              day: "周五",
              type: 1,//0,1,2,3,4,5,6,7,8区分天气类型
              range: "0~7",
            },
            {
              date: "12 / 15",
              day: "周六",
              type: 2,//0,1,2,3,4,5,6,7,8区分天气类型
              range: "1~7",
            },
            {
              date: "12 / 16",
              day: "周日",
              type: 3,//0,1,2,3,4,5,6,7,8区分天气类型
              range: "0~13",
            },
            {
              date: "12 / 17",
              day: "周一",
              type: 4,//0,1,2,3,4,5,6,7,8区分天气类型
              range: "0~14",
            },
            {
              date: "12 / 18",
              day: "周二",
              type: 5,//0,1,2,3,4,5,6,7,8区分天气类型
              range: "0~5",
            },
            {
              date: "12 / 19",
              day: "周三",
              type: 6,//0,1,2,3,4,5,6,7,8区分天气类型
              range: "0~5",
            }
          ],
      },
      {
        id: 1,
        city: "厦门",
        weather:
          [
            {
              date: "12 / 13",
              day: "周四",
              type: 0,//0,1,2,3,4,5,6,7,8区分天气类型
              range: "-2~1",
            },
            {
              date: "12 / 14",
              day: "周五",
              type: 1,//0,1,2,3,4,5,6,7,8区分天气类型
              range: "0~7",
            },
            {
              date: "12 / 15",
              day: "周六",
              type: 2,//0,1,2,3,4,5,6,7,8区分天气类型
              range: "1~7",
            },
            {
              date: "12 / 16",
              day: "周日",
              type: 3,//0,1,2,3,4,5,6,7,8区分天气类型
              range: "0~13",
            },
            {
              date: "12 / 17",
              day: "周一",
              type: 4,//0,1,2,3,4,5,6,7,8区分天气类型
              range: "0~14",
            },
            {
              date: "12 / 18",
              day: "周二",
              type: 5,//0,1,2,3,4,5,6,7,8区分天气类型
              range: "0~5",
            },
            {
              date: "12 / 19",
              day: "周三",
              type: 6,//0,1,2,3,4,5,6,7,8区分天气类型
              range: "0~5",
            }
          ],

      },
      {
        id: 2,
        city: "南京",
        weather:
          [
            {
              date: "12 / 13",
              day: "周四",
              type: 0,//0,1,2,3,4,5,6,7,8区分天气类型
              range: "-2~15",
            },
            {
              date: "12 / 14",
              day: "周五",
              type: 1,//0,1,2,3,4,5,6,7,8区分天气类型
              range: "0~7",
            },
            {
              date: "12 / 15",
              day: "周六",
              type: 2,//0,1,2,3,4,5,6,7,8区分天气类型
              range: "1~7",
            },
            {
              date: "12 / 16",
              day: "周日",
              type: 3,//0,1,2,3,4,5,6,7,8区分天气类型
              range: "0~13",
            },
            {
              date: "12 / 17",
              day: "周一",
              type: 4,//0,1,2,3,4,5,6,7,8区分天气类型
              range: "0~14",
            },
            {
              date: "12 / 18",
              day: "周二",
              type: 5,//0,1,2,3,4,5,6,7,8区分天气类型
              range: "0~5",
            },
            {
              date: "12 / 19",
              day: "周三",
              type: 6,//0,1,2,3,4,5,6,7,8区分天气类型
              range: "0~5",
            }
          ],

      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  //手指触摸动作开始 记录起点X坐标
  touchstart: function (e) {
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY
    })
  },
  //滑动事件处理
  touchmove: function (e) {
    let idx = e.currentTarget.dataset.index;
    let startX = this.data.startX,//开始X坐标
        startY = this.data.startY,//开始Y坐标
        touchMoveX = e.changedTouches[0].clientX,//滑动变化坐标
        touchMoveY = e.changedTouches[0].clientY,//滑动变化坐标
    //获取滑动角度
    angle = this.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });

    //滑动超过45度角 return
    if (Math.abs(angle) > 45) return;

    if (touchMoveX > startX) { //右滑
      this.setData({
        currentIndex: idx == 0 ? 0 : idx-1,
        cardRightIn: false,          
        cardLeftIn: true
      })
    }else{
      this.setData({
        currentIndex: idx == this.data.weather.length - 1 ? idx : idx + 1,
        cardRightIn:true,
        cardLeftIn: false
      })
    }
    // wx.pageScrollTo({
    //   scrollTop: 0
    // })
        
  },
  /**
 * 计算滑动角度
 * @param {Object} start 起点坐标
 * @param {Object} end 终点坐标
 */
  angle: function (start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI)
  },
})
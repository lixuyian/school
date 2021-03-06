// pages/weather/weather.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /**左右滑动begin */
    currentIndex: 0,
    cardRightIn: false,
    cardLeftIn: false,
    /**左右滑动end */
    /**地理位置切换begin */
    show: false,
    cities: ['武汉'],
    array: ['武汉', '厦门', '南京', '上海', '广州', '深圳', '香港', '台湾'],
    objectArray: [{
      id: 0,
      name: '武汉'
    },
    {
      id: 1,
      name: '厦门'
    },
    {
      id: 2,
      name: '南京'
    },
    {
      id: 3,
      name: '上海'
    },
    {
      id: 4,
      name: '广州'
    },
    {
      id: 5,
      name: '深圳'
    },
    {
      id: 6,
      name: '香港'
    },
    {
      id: 7,
      name: '台湾'
    }
    ],
    /**地理位置切换end */
    /**天气信息begin */
    weather: [],
    cityIndex: [0],
    update: false,
    empty: false,
    // idx: 0,

    /**天气信息end */
  },
  /**地理位置选择 */
  bindPickerChange(e) {
    //1.获取城市id值
    var index = e.detail.value;
    var item = this.data.array[index];
    var cities = this.data.cities;
    //2.判断该城市是否在cities数组中，如果没有添加进去
    var has = cities.includes(item);
    var cityIndex = this.data.cityIndex;
    var weather = this.data.weather;
    cities.push(item);
    if (has) {
      cities.pop();
    } else {
      cityIndex.push(index);
    }
    this.setData({
      cities,
      cityIndex,
      weather
    })
    //2.使用获取的index值发送请求获取天气数据
    wx.sendSocketMessage({
      data: '{ "type": "weather", "action": "request", "data": { "cityId": ' + index + ', "date": "2018/12/12" } }'
    })
    this.setData({
      update: true,
      empty: false
    })
    wx.onSocketMessage(res => {
      if (this.data.update) {
        var weather = this.data.weather;
        var data = JSON.parse(res.data);
        var item = data.weather;
        if (cities.length != weather.length) {
          weather.push(item)
        }
        this.setData({
          weather
        })
      }
    })

  },
  /**地理位置标签块删除 */
  delect(e) {
    if (this.data.cities.length == 0) {
      this.setData({
        empty: true
      })
    } else {
      if (e.detail.value) {
        var value = e.detail.value;
        var cities = this.data.cities;
        var cityIndex = this.data.cityIndex;
        var weather = this.data.weather;
        var delectIndex = cities.indexOf(value);
        // var idx = this.data.idx;
        var currentIndex = this.data.currentIndex;
        var cityTemp = cities.filter(item => {
          if (item != value) {
            return true
          }
        })
        cityIndex.splice(delectIndex, 1);
        var weatherTemp = weather.filter(item => {
          if (item.city != value) {
            return true
          }
        })
        this.setData({
          cities: cityTemp,
          cityIndex,
          weather: weatherTemp
        })
        currentIndex = " ";
        this.setData({
          currentIndex,
        })
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //进入页面请求武汉当前天气
    //1.获取当前时间请求一周天气
    var date = new Date().getDate();
    var year = new Date().getFullYear();
    var month = (new Date().getMonth()) + 1;
    var currentDate = year + "/" + month + "/" + date;

    wx.onSocketMessage(res => {
      if (this.data.update) {
        var data = JSON.parse(res.data);
        var item = data.weather;
        var weather = [
          item
        ]
        this.setData({
          weather,
        })
      }

    })
    //进入页面默认取武汉12月12号之后一周天气
    wx.sendSocketMessage({
      data: '{ "type": "weather", "action": "request", "data": { "cityId": 0, "date": "2018/12/12" } }'
    })
    this.setData({
      update: true
    })
  },



  /**地理位置切换模块 */
  location() {
    var isShow = this.data.show ? false : true;
    this.setData({
      show: isShow
    })
  },
  touchstart: function (e) {
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY
    })
  },
  touchmove: function (e) {
    let idx = e.currentTarget.dataset.index;
    let arr = this.data.cityIndex;
    let startX = this.data.startX;//开始X坐标
    let startY = this.data.startY;//开始Y坐标
    let touchMoveX = e.changedTouches[0].clientX;//滑动变化坐标
    let touchMoveY = e.changedTouches[0].clientY;//滑动变化坐标
    let currentIndex = this.data.currentIndex;
    //获取滑动角度
    let angle = this.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });

    //滑动超过45度角 return
    if (Math.abs(angle) > 45) return;

    if (touchMoveX > startX) { //右滑
      console.log("idx", idx);
      console.log(arr);
      arr.map((item, index) => {
        if (item == idx) {
          console.log("找到相同项,item为", item, ",前一项为", arr[index - 1]);
          if (arr.length != 1) {
            this.setData({
              currentIndex: index - 1
            })
          } else {
            this.setData({
              currentIndex: 0
            })
          }
        }
      })
      this.setData({
        // currentIndex,
        cardRightIn: false,
        cardLeftIn: true
      })
    } else {
      console.log("currentIndex", this.data.currentIndex);
      console.log("length-1", this.data.weather.length - 1);
      if (idx == this.data.weather.length - 1) {
        currentIndex = idx
      } else if (idx < this.data.weather.length - 1) {
        currentIndex = idx + 1
      } else if (idx > this.data.weather.length - 1) {
        currentIndex = this.data.weather.length - 1
      }
      this.setData({
        currentIndex,
        cardRightIn: true,
        cardLeftIn: false
      })
    }
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
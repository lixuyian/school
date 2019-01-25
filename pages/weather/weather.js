// pages/weather/weather.js
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
    cities: [],
    array: ['武汉', '厦门', '南京', '上海', '广州', '深圳', '香港', '台湾'],
    objectArray: [
      { id: 0, name: '武汉' },
      { id: 1, name: '厦门' },
      { id: 2, name: '南京' },
      { id: 3, name: '上海' },
      { id: 4, name: '广州' },
      { id: 5, name: '深圳' },
      { id: 6, name: '香港' },
      { id: 7, name: '台湾' }
    ],
    /**地理位置切换end */
    /**天气信息begin */
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
    cityIndex: [],

    /**天气信息end */
  },
  /**地理位置选择 */
  bindPickerChange(e) {
    var index = e.detail.value;
    var item = this.data.array[index];
    var cities = this.data.cities;
    var has = cities.includes(item);
    var cityIndex = this.data.cityIndex;
    var weather = this.data.weather;
    cities.push(item);
    if (has) {
      cities.pop();
    }
    else {
      cityIndex.push(index);
    }

    this.setData({
      cities,
      cityIndex,
      weather
    })
    wx.setStorageSync('cities', this.data.cities);
    wx.setStorageSync('cityIndex', this.data.cityIndex);
    wx.setStorageSync('weather', this.data.weather);

  },
  /**地理位置标签块删除 */
  delect(e) {
    // console.log(e)
    if (e.detail.value) {
      var value = e.detail.value;
      var cities = this.data.cities;
      var cityIndex = this.data.cityIndex;
      var weather = this.data.weather;
      var index = cities.indexOf(value);
      cities.splice(index, 1);
      cityIndex.splice(index, 1);
      weather.splice(index, 1);
      this.setData({
        cities,
        cityIndex,
        weather
      })
      wx.setStorageSync('cities', this.data.cities);
      wx.setStorageSync('cityIndex', this.data.cityIndex);
      wx.setStorageSync('weather', this.data.weather);


      // console.log(cities)
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var cities = wx.getStorageSync('cities');
    var cityIndex = wx.getStorageSync('cityIndex');
    var weather = wx.getStorageSync('weather');
    if (cities) {
      //将当日天气信息置于数组首位
      // var myDate = new Date();
      // // var currentTime = myDate.getHours();
      // var currentDate = myDate.getDate().toString();
      // weather.forEach(ele => {
      //   var weather = ele.weather;
      //   weather.forEach(element=>{
      //     var date = element.date.toString();
      //     console.log(element)
      //   })
      // });
      return cities,
        this.setData({
          cities,
          cityIndex,
          weather,
          // currentDate
        })
    }
    else {
      return []
    };
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
    // console.log(e)
    let idx = e.currentTarget.dataset.index;
    let startX = this.data.startX;//开始X坐标
    let startY = this.data.startY;//开始Y坐标
    let touchMoveX = e.changedTouches[0].clientX;//滑动变化坐标
    let touchMoveY = e.changedTouches[0].clientY;//滑动变化坐标
    //获取滑动角度
    let angle = this.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });

    //滑动超过45度角 return
    if (Math.abs(angle) > 45) return;

    if (touchMoveX > startX) { //右滑
      this.setData({
        currentIndex: idx == 0 ? 0 : idx - 1,
        cardRightIn: false,
        cardLeftIn: true
      })
    } else {
      this.setData({
        currentIndex: idx == this.data.weather.length - 1 ? idx : idx + 1,
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
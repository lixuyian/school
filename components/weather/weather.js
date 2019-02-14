
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
    var currentDate = myDate.getDate().toString();
    var date = this.properties.content.date.toString();
    // console.log(date);
    //用currentDate获取今日详细天气
    if (date.endsWith(currentDate)) {
      wx.onSocketMessage(res => {
        if (this.data.update) {
          var data = JSON.parse(res.data);
          var detailWeather = data.detailWeather;

          this.setData({
            detailWeather,
            date: true,
          })
        }
        // console.log(this.data.detailWeather);
      }),
        wx.sendSocketMessage({
          data: '{ "type": "weatherDetail", "action": "request", "data": { "cityId": 0, "date": "2018/12/12" } }'
        })
      this.setData({
        update: true
      })
    }
  }
})
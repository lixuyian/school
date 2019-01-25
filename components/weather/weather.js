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
    detailWeather: [{
      id: 0,
      whole: [
        {
          time: "00", temperature: 4, type: 0
        },
        {
          time: "01", temperature: 4, type: 0
        },
        {
          time: "02", temperature: 4, type: 0
        },
        {
          time: "03", temperature: 4, type: 0
        },
        {
          time: "04", temperature: 4, type: 0
        },
        {
          time: "05", temperature: 4, type: 0
        },
        {
          time: "06", temperature: 4, type: 0
        },
        {
          time: "07", temperature: 4, type: 0
        },
        {
          time: "08", temperature: 4, type: 0
        },
        {
          time: "09", temperature: 4, type: 0
        },
        {
          time: "10", temperature: 4, type: 0
        },
        {
          time: "11", temperature: 4, type: 0
        },
        {
          time: "12", temperature: 4, type: 0
        },
        {
          time: "13", temperature: 4, type: 0
        },
        {
          time: "14", temperature: 4, type: 0
        },
        {
          time: "15", temperature: 4, type: 0
        },
        {
          time: "16", temperature: 4, type: 0
        },
        {
          time: "17", temperature: 4, type: 0
        },
        {
          time: "18", temperature: 4, type: 0
        },
        {
          time: "19", temperature: 4, type: 0
        },
        {
          time: "20", temperature: 4, type: 0
        },
        {
          time: "21", temperature: 4, type: 0
        },
        {
          time: "22", temperature: 4, type: 0
        },
        {
          time: "23", temperature: 4, type: 0
        }]
    }
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
  },
  attached() {
    var myDate = new Date();
    // var currentMonth = myDate.getMonth()+1;
    var currentDate = myDate.getDate().toString();
    //用currentDate获取今日详细天气
    // console.log(currentMonth+'/'+currentDate)
    var date = this.properties.content.date.toString();
    

    if (date.endsWith(currentDate)) {
      console.log()
      this.setData({
        date: true,
        detailWeather: this.data.detailWeather,

      })
      // console.log(this.data.detailWeather);
    }
  }
})

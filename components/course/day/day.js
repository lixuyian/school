//// components/course/day/day.js
Component({
  /**
  * 组件的属性列表
  */
  properties: {
    item: Object,
  },

  /**
  * 组件的初始数据
  */
  data: {
    oneDayContent: [],
  },

  /**
  * 组件的方法列表
  */
  methods: {

  },
  attached() {
    // console.log(this.properties.item);
    var oneDayContent = this.data.oneDayContent;
    var course = this.properties.item.course;
    // console.log(course);
    if (course) {
      course.forEach(ele => {
        var courseTime = ele.time;
        // var courseName = ele.course.slice(0,4) + "...";
        var courseName = ele.course;
        for (let i = 1; i <= 11; i++) {
          var beginTime = courseTime.startsWith(i);
          if (beginTime) {
            // console.log("开始在" + i + "节")
            for (let j = i; j <= 11; j++) {
              if (courseTime.endsWith(j)) {
                var span = j - i + 1;
                var type = Math.round(10 * Math.random());
                // console.log(type);
                // console.log(span)
                var temp = {
                  i,
                  span,
                  type,
                  courseName
                }
                // console.log("结束在" + j + "节")
                oneDayContent.push(temp)
                // console.log(temp)
                this.setData({
                  oneDayContent
                })
                console.log(oneDayContent);
              }
            }
          }
        }
      });
    }
  }
})

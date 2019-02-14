// components/course/week/week.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    day: [{ week: "1", date: 1 }, { week: "1", date: 2 }, { week: "1", date: 3 }, { week: "1", date: 4 }, { week: "1", date: 5 }, { week: "1", date: 6 }, { week: "1", date: 7 }, { week: "2", date: 8 }, { week: "2", date: 9 }, { week: "2", date: 10 }, { week: "2", date: 11 }, { week: "2", date: 12 }, { week: "2", date: 13 }, { week: "2", date: 14 }, { week: "3", date: 15 }, { week: "3", date: 16 }, { week: "3", date: 17 }, { week: "3", date: 18 }, { week: "3", date: 19 }, { week: "3", date: 20 }, { week: "3", date: 21 }, { week: "4", date: 22 }, { week: "4", date: 23 }, { week: "4", date: 24 }, { week: "4", date: 25 }, { week: "4", date: 26 }, { week: "4", date: 27 }, { week: "4", date: 28 }, { week: "5", date: 29 }, { week: "5", date: 30 }, { week: "5", date: 31 }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showCourse(e) {
      // console.log(e);
      this.triggerEvent("showCourse", e._relatedInfo.anchorTargetText);
    }
  }
})

// components/course/date/date.js
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
    showMonth:false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showMonths(){
      var showMonth = this.data.showMonth;
      this.triggerEvent("showMonths",{showMonth});
    }
  }
  
})

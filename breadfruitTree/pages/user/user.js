var app = getApp();//获取的当前小程序实例
Page({
  /**
   * 页面的初始数据
   */
  data: {
     item: [
        {
           img: "../../imgs/pic01.jpg",
           name: "茉莉蜜茶CC"
        },
        {
           img: "../../imgs/pic02.jpg",
           name: "星星SKY"
        },
        {
           img: "../../imgs/pic03.jpg",
           name: "Smile"
        },
     ],
     fans:[
        {
           img: "../../imgs/pic03.jpg",
           name: "茉莉蜜茶CC"
        },
        {
           img: "../../imgs/pic01.jpg",
           name: "星星SKY"
        },
        {
           img: "../../imgs/pic02.jpg",
           name: "Smile"
        },
        {
           img: "../../imgs/pic03.jpg",
           name: "茉莉蜜茶CC"
        },
        {
           img: "../../imgs/pic01.jpg",
           name: "星星SKY"
        },
        {
           img: "../../imgs/pic02.jpg",
           name: "Smile"
        }
     ],
      winWidth: 0,
      winHeight: 0,
      // tab切换  
      currentTab: 0
  },
  bindChange: function (e) {

     var that = this;
     console.log(e.detail.current);
     that.setData({ currentTab: e.detail.current });

  },
  onLoad: function () {
     var that = this;

     /** 
      * 获取系统信息 
      */
     wx.getSystemInfo({

        success: function (res) {
           that.setData({
              winWidth: res.windowWidth,
              winHeight: res.windowHeight
           });
        }

     });
  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {

     var that = this;
     console.log(e.target.dataset);
     if (this.data.currentTab === e.target.dataset.current) {
        return false;
     } else {
        that.setData({
           currentTab: e.target.dataset.current
        })
     }
  }
})
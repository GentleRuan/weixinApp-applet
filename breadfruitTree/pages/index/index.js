//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
     arr: [
        { 
          img: "../../imgs/pic01.jpg", 
          text:"小丸子呀小丸子"},
        { 
           img: "../../imgs/pic02.jpg",
          text:"萌萌哒小丸子"},
        { 
           img: "../../imgs/pic03.jpg",
          text: "小丸子啊萌萌哒"},
        { 
           img: "../../imgs/pic04.jpg",
          text: "小丸子呀小丸子" },
        {
           img: "../../imgs/pic02.jpg",
           text: "萌萌哒小丸子"},
        {
           img: "../../imgs/pic03.jpg",
           text: "小丸子啊萌萌哒"},
        {
           img: "../../imgs/pic04.jpg",
           text: "小丸子呀小丸子"},
        {
           img: "../../imgs/pic01.jpg",
           text: "小丸子呀小丸子"
        },
     ],
     life: [
        {
           img: "../../imgs/img01.jpg",
           text: "徐云龙争顶！"
        },
        {
           img: "../../imgs/img02.jpg",
           text: "马志奇向教练示意对手拉扯武磊进球后腿抽筋"
        },
        {
           img: "../../imgs/img02.jpg",
           text: "徐云龙争顶！"
        },
        {
           img: "../../imgs/img01.jpg",
           text: "马志奇向教练示意对手拉扯武磊进球后腿抽筋"
        },
        {
           img: "../../imgs/img02.jpg",
           text: "马志奇向教练示意对手拉扯武磊进球后腿抽筋"
        },
        {
           img: "../../imgs/img01.jpg",
           text: "徐云龙争顶！"
        },
        {
           img: "../../imgs/img02.jpg",
           text: "马志奇向教练示意对手拉扯武磊进球后腿抽筋"
        },
        {
           img: "../../imgs/img01.jpg",
           text: "徐云龙争顶！"
        },
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

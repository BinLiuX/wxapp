//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        count: [],
        current: 0,
        active: false,
        over: false,
        deviceInfo:{
            screenHeight: "",
            screenWidth: ""
        },
        edit: {
            startY: 0,
            top:0,
        }
    },
    onLoad: function () {
        this.data.count = [];
        for (let i = 0; i < 100; i++) {
            this.data.count.push(i);
        }
        this.setData({
            count: this.data.count
        })
    },
    getList: function () {
    },
    addEdit: function (e) {
        let current = e.target.dataset.index;
        this.setData({
            current: current,
            over: true,
            active: true
        });

    },
    removeEdit: function (e) {
        this.setData({
            over: false,
            active: false
        });
    },
    moveTo: function (e) {
        // 移动的时候 跟着动
        // 记录当前Y，和初始Y的差，然后完成随动
        console.log(e)
    },
    moveStart: function (e) {
        // 开始的时候记录下Y
    },
    moveEnd: function (e) {
        // 结束的时候判断下Y
        // 距离顶部低于50PX，铺满全屏
        // 距离顶部超过屏幕的一半remove掉
    },

})

import wx from 'weixin-js-sdk'

let wxshare = function(obj){

    // config接口注入权限
    // 接入微信接口的最主要也是最重要一步步就是填写下面这些信息，填完这些信息之后，基本就好了。下面这些信息通常是通过后端接口来获取的

    wx.config({
      debug:false, // debug等于true,开启调试模式,调用的所有api的返回值会在客户端alert出来，参数信息会通过log打出。
      appId: '', // 必填，公众号的唯一标识
      timestamp:'', // 必填，生成签名的时间戳
      nonceStr:'', // 必填，生成签名的随机串
      signature: '', // 必填，签名
      jsApiList: ["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ"] // 必填，需要使用的JS接口列表，所有JS接口列表见微信公众平台
    });

    wx.ready(function(){
      let url = window.location.hash;
        //分享到朋友圈
        wx.onMenuShareTimeline({
        title: obj.title || "默认分享文案",
        link: obj.link || window.location.href,
        imgUrl: "图标地址（必须是有效的Link）",
        success: function () {
          // 回调函数 可做页面跳转等操作
        },
        cancel: function () {
        }
        });
        //分享给朋友
        wx.onMenuShareAppMessage({
        title: obj.title || "默认分享文案",
        link: obj.link || window.location.href,
        imgUrl: "图标地址（必须是有效的Link）",
        desc: obj.desc || "默认分享文案",
        type: '', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
          // 回调函数 可做页面跳转等操作
        },
        cancel: function () {
        // 用户取消分享后执行的回调函数
        }
        });
        //分享到QQ
        wx.onMenuShareQQ({
        title: obj.title || "默认分享文案",
        link : obj.link || window.location.href,
        imgUrl :"图标地址（必须是有效的Link）",
        success: function () {
          // 回调函数 可做页面跳转等操作
        },
        cancel: function () {
       
        }
        });
       
        });
}
export default wxshare;
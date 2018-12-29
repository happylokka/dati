const config = {
    // "getUser":'',// 获取用户信息
    "question":"./src/json/question.json",// 答题接口
    "time":"./src/json/time.json",// 倒计时接口
    "result":"./src/json/result.json",// 成绩页信息接口
    "ranking":'./src/json/rankingList.json',// 排行榜接口
    "share":"./src/json/share.json",// 分享成绩展示接口
    "url":window.location.origin + window.location.pathname// 项目域名
}
export default config;
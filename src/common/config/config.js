﻿// default config
module.exports = {
  default_module: 'api',
  weixin: {
    appid: 'wx97cbcebac0ec4ff8', // 小程序 appid
    secret: '6c06e00db4f3ad6ea8214fab3e57d91a', // 小程序密钥
    mch_id: '', // 商户帐号ID
    partner_key: '', // 微信支付密钥
    notify_url: '' // 微信异步通知，
  },
  express: {
    // 快递物流信息查询使用的是快递鸟接口，申请地址：http://www.kdniao.com/
    appid: '', // 对应快递鸟用户后台 用户ID
    appkey: '', // 对应快递鸟用户后台 API key
    request_url: 'http://api.kdniao.cc/Ebusiness/EbusinessOrderHandle.aspx'
  },
  vaptcha: {
    vid: '5b91e6cafc650e21701ec0f5',
    key: '2383e7da4c2048b8a39fd652802a07b7'
  },
  qiniu: {
    accessKey: 'u7LNFHcD_1Ytud3CstNn_RkhiJXmv2-FS081bjbh', // 七牛提供的公钥
    secretKey: 'QwnnjPQaoa_JFKzyRTiBwalEe-x2S8G_U1mMc5k5', // 七牛提供的私钥
    bucketName: 'szelam'// 存储空间名
  },
  SMSClient: { // 阿里云通信基础能力业务短信发送 德威商城
    accessKeyId: 'accessKeyId',
    secretAccessKey: 'secretAccessKey',
    SignatureName: '', 
    TemplateDomesticCode: '', // 国内短信code
    TemplateAbroadCode: '' // 国际短信code
  }
};

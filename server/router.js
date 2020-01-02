const express = require("express");
const router = express.Router();
const url = require("url");
//引入mock
const Mock = require("mockjs");

//引入配置文件
const config = require("./config");


//get：资源定位 
//跨域解决  后台
router.all("*", function (req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200); //让options尝试请求快速结束
    else
        next();
})

//写自己接口
/* router.get("/login",(req,res)=>{
    req//可以接受参数
    res//往外发送东西
}) */

//例子
//mockjs测试接口
router.get("/mock", (req, res) => {
    let mockData = Mock.mock({
        'number|5-10': 1,
        'name': Mock.mock("@cname"),
        'age|18-35': 1,
        'count|5-99.3': 1,
        // "address|"
        'list|5': [
            {
                'id|+1': 1,
                'uname': Mock.mock("@cname"),
                'age': Mock.mock("@integer")
            }
        ]
    })

    res.send({
        msg: "success",
        status: 200,
        mockData: mockData
    })
})

// var uname=url.parse(req.url,true).query.username;
//首页------主页tab切换
router.get(config.home_tab, (req, res) => {
    let id = url.parse(req.url, true).query.id;
    /* let mockData =[
        {
            'id': 1,
            "tabList": [{
                "title": Mock.mock("@ctitle(10,20)"),
            },
            {
                "title": Mock.mock("@ctitle(10,20)"),
            },
            {
                "title": Mock.mock("@ctitle(10,20)"),
            }
            ]
    
        },
    ];
    */

    /*  for(let item in mockData){
         if(item.id == id){
            let resData =  mockData[item]
             return resData;
         }
     } */
    let mockData = Mock.mock({
        'tabList|5': [{
            "id|+1": 1,
            "tabData|5-10": [{
                "title": Mock.mock("@ctitle(20,30)"),
                "name": Mock.mock("@cfirst") + "老师",
                "timelength|30-60": 1,
                "bugnumber|0-10000": 1,
                "buystatus": Mock.mock("@boolean"),
                "img": Mock.mock("@image('150x100', '@color', '#FFF', 'jpg', 'tab')")
            }]
        }]
    })


    let resData = mockData.tabList.filter((item) => {
        return item.id == id
    })

    res.status(200).send({
        msg: "success",
        status: 200,
        resData
    })
})


//首页------主页搜索
router.get(config.home_search, (req, res) => {
    let serachData = Mock.mock({
        "logList|2-5": [Mock.mock("@cword(3,10)")],
        "hotList|2-5": [Mock.mock("@cword(3,10)")]
    })

    res.status(200).send({
        msg: "success",
        status: 200,
        serachData
    })
})


//首页--------推荐课程
router.get(config.home_recommend, (req, res) => {
    let recommendData = Mock.mock({
        "courseList|10-20": [
            {
                "courseid|+1": 1,
                "courseTitle": Mock.mock("@ctitle(10,20)"),
                "courseimg": Mock.mock("@image('150x100', '@color', '#FFF', 'jpg', 'course')")
            }
        ]
    })

    res.status(200).send({
        msg: "success",
        status: 200,
        recommendData
    })
})



//首页--------推荐内页
router.get(config.home_detail, (req, res) => {
    let id = url.parse(req.url, true).query.id;
    let detailData = Mock.mock({
        "detailList|20": [
            {
                "id|+1": 1,
                "titlepic": Mock.mock("@image('50x50','@color', '#FFF', 'jpg', 'user')"),
                "uname": Mock.mock("@ctitle(5,10)"),
                "courseinfo": Mock.mock("@cword(20,30)"),
                "courseimg": Mock.mock("@image('500x300','@color', '#FFF', 'jpg', 'course')")
            }
        ]
    })

    let resData = detailData.detailList.filter((item)=>{
        return item.id == id;
    })

    res.status(200).send({
        msg: "success",
        status: 200,
        resData
    })

})


//首页--------课程详情-----视屏列表
router.get(config.home_video,(req,res)=>{
    let vedioData = Mock.mock({
        "videoList|10-20":[{
            "id|+1":1,
            "courseName":"【Vue从入门到实战】第"+Mock.mock('@increment()')+"章"+Mock.mock('@ctitle(6,15)'),
            "information":"QQ群"+Mock.mock("@id")+",领取该课件"
        }]
    })

    res.status(200).send({
        msg: "success",
        status: 200,
        vedioData
    })
})


//首页--------课程详情-----老师推荐列表
router.get(config.home_teacher,(req,res)=>{
    let teacherData = Mock.mock({
        "teacherList|5-10":[{
            "img":Mock.mock("@image('150x100','@color', '#FFF', 'jpg', 'course')"),
            "title":Mock.mock("@ctitle(8,15)"),
            "price|199-1999":1,
            "free|1":true
        }]
    })

    res.status(200).send({
        msg: "success",
        status: 200,
        teacherData
    });
})




module.exports = router;
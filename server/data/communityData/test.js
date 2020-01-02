const picData = {
    // 社交一级页面
    hotSearch: {
        topic1: '公务员那些事',
        topic2: '护士加班',
        topic3: '手绘插画',
        topic4: '土木工程',
    },
    navData: [{

        url: "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3892266725,1507330699&fm=26&gp=0.jpg",
        title: '#热门话题#',
        id: '1',
    }, {
        url: "https://t12.baidu.com/it/u=4022538458,1408200217&fm=76",
        title: '#精华问答#',
        id: '2',

    }, {
        url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4138684417,1631555700&fm=26&gp=0.jpg",
        title: '#课程相关#',
        id: '3',
    }],
    //   学习动态发布
    // hr{
        //      padding-bottom: 0.1rem;
        //   border-top: 1px solid #e0e0e0;
        // }

    Learningdynamics: [
        {
            headPic: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2996670195,119529534&fm=26&gp=0.jpg',
            userName: 'Happy girl',
            time: '2018.7.25',
            content: '今天是我第一天学习，分享一下我的笔记，哈哈 在一个类中可以定义多个同名方法,各个方法的参数表一定不同.但修饰词可能相同, 返回值也可能相同. 在程序的编译过程中根据变量类型来找相应的方...',
            browse: 1800,
        },
        {
            headPic: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=138302187,4100695541&fm=26&gp=0.jpg',
            userName: '阳光很暖',
            time: '2018.7.25',
            // 
            content: '你要学习，不可以偷懒哦,今天是我第一天学习，分享一下我的笔记，哈哈 ',
            browse: 5600
        },
        {
            headPic: 'http://img3.imgtn.bdimg.com/it/u=2979092018,3556968797&fm=26&gp=0.jpg',
            userName: '诗和远方',
            time: '2018.7.25',
            content: '学习:今天是我第一天学习，分享一下我的笔记，哈哈 在一个类中可以定义多个同名方法,各个方法的参数表一定不同.但修饰词可能相同, 返回值也可能相同. 在程序的编译过程中根据变量类型来找相应的方..., ',
            browse: 1000

        },
        {
            headPic: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=138302187,4100695541&fm=26&gp=0.jpg',
            userName: '诗和远方',
            time: '2018.7.25',
            content: '你要学习，不可以偷懒哦,今天是我第一天学习，分享一下我的笔记，哈哈 在一个类中可以定义多个同名方法,各个方法的参数表一定不同.但修饰词可能相同, 返回值也可能相同. 在程序的编译过程中根据变量类型来找相应的方...',
            browse: 1000

        }],

    //   热门榜单数据
    hotList: [
        //   热门话题
        {
            id: 1,
            hot: [{
                leftImg: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1655265529,4044442171&fm=26&gp=0.jpg',
                title: '手绘插画魅力',
                content: '团子老师邀请你免费学习插画技巧',
                commit: 86,
                see: 8000,
                id: 1
            },
            {
                leftImg: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4138684417,1631555700&fm=26&gp=0.jpg',
                title: '公务员笔试技巧',
                content: '马老师带你两个周全程笔试技巧',
                commit: 86,
                see: 8000,
                id: 2

            },
            {
                leftImg: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3158546624,186205432&fm=26&gp=0.jpg',
                title: '建筑工程学习心得',
                content: '何老师讲堂理顺每一个知识点',
                commit: 86,
                see: 8000,
                id: 3
            },
            {
                leftImg: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2892776736,1917083033&fm=26&gp=0.jpg',
                title: '金融理财小技巧',
                content: '每个团队倾力打造，',
                commit: 86,
                see: 8000,
                id: 4
            },
            {
                leftImg: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3005857003,4065852126&fm=26&gp=0.jpg',
                title: '职场魅力篇',
                content: '易老师教你玩转职场',
                commit: 86,
                see: 8000,
                id: 5
            }]
        },
        //精华问答
        {
            id: 2,
            hot: [{
                leftImg: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1655265529,4044442171&fm=26&gp=0.jpg',
                title: '精华问答',
                content: '团子老师邀请你免费学习插画技巧',
                commit: 86,
                see: 8000,
                id: 6
            },
            {
                leftImg: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4138684417,1631555700&fm=26&gp=0.jpg',
                title: '公务员笔试技巧',
                content: '马老师带你两个周全程笔试技巧',
                commit: 86,
                see: 8000,
                id: 7

            },
            {
                leftImg: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3158546624,186205432&fm=26&gp=0.jpg',
                title: '建筑工程学习心得',
                content: '何老师讲堂理顺每一个知识点',
                commit: 86,
                see: 8000,
                id: 8
            },
            {
                leftImg: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2892776736,1917083033&fm=26&gp=0.jpg',
                title: '金融理财小技巧',
                content: '每个团队倾力打造，',
                commit: 86,
                see: 8000,
                id: 9
            },
            {
                leftImg: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3005857003,4065852126&fm=26&gp=0.jpg',
                title: '职场魅力篇',
                content: '易老师教你玩转职场',
                commit: 86,
                see: 8000,
                id: 10
            }]
        },
        // 课程相关
        {
            id: 3,
            hot: [{
                leftImg: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1655265529,4044442171&fm=26&gp=0.jpg',
                title: '课程相关',
                content: '团子老师邀请你免费学习插画技巧',
                commit: 86,
                see: 8000,
                id: 11
            },
            {
                leftImg: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4138684417,1631555700&fm=26&gp=0.jpg',
                title: '公务员笔试技巧',
                content: '马老师带你两个周全程笔试技巧',
                commit: 86,
                see: 8000,
                id: 12

            },
            {
                leftImg: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3158546624,186205432&fm=26&gp=0.jpg',
                title: '建筑工程学习心得',
                content: '何老师讲堂理顺每一个知识点',
                commit: 86,
                see: 8000,
                id: 13
            },
            {
                leftImg: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2892776736,1917083033&fm=26&gp=0.jpg',
                title: '金融理财小技巧',
                content: '每个团队倾力打造，',
                commit: 86,
                see: 8000,
                id: 14
            },
            {
                leftImg: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3005857003,4065852126&fm=26&gp=0.jpg',
                title: '职场魅力篇',
                content: '易老师教你玩转职场',
                commit: 86,
                see: 8000,
                id: 15
            }]
        }



    ],
    //跳转详情页面数据

    detail: [

        //   热门话题
        {
            id: 1,
            leftImg: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4006154411,184687657&fm=26&gp=0.jpg',
            title: '手绘插画魅力',
            commit: 86,
            read: 8000,
            topic: '手绘达人团子',
            Introducer: '导语：团子老师的手绘课堂免费邀请你试听啦',
            detailList: [
                {
                    headPic: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2996670195,119529534&fm=26&gp=0.jpg',
                    userName: 'Happy girl',
                    time: '2018.7.25',
                    img: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=415231727,3010250641&fm=26&gp=0.jpg',
                    content: '和团子老师学习插画,很开心的第一天',
                },
                {
                    headPic: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1924916187,3378434830&fm=26&gp=0.jpg',
                    userName: '好多鱼',
                    time: '2018.7.25',
                    img: 'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4092630665,2472194677&fm=85&app=63&f=PNG?w=121&h=75&s=04345A954F5374471A3C81C2030050BA',
                    content: '和团子老师学习插画,很开心的第一天',
                }
            ]
        },
        {
            id: 2,
            leftImg: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4138684417,1631555700&fm=26&gp=0.jpg',
            title: '公务员笔试技巧',
            commit: 86,
            read: 8000,
            topic: '公务员笔试技巧',
            Introducer: '导语：马老师带你两个周全程笔试技巧',
            detailList: [
                {
                    headPic: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2399964549,3044081970&fm=26&gp=0.jpg',
                    userName: '一天',
                    time: '2018.7.25',
                    img: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=415231727,3010250641&fm=26&gp=0.jpg',
                    content: '第一天学习公务员笔试技巧,感触颇深,',
                },
                {
                    headPic: 'http://img1.imgtn.bdimg.com/it/u=1048090134,3072977329&fm=26&gp=0.jpg',
                    userName: '小皮球',
                    time: '2018.7.25',
                    img: 'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4092630665,2472194677&fm=85&app=63&f=PNG?w=121&h=75&s=04345A954F5374471A3C81C2030050BA',
                    content: '加油,相信自己,只要努力,一定可以上岸',
                }
            ]
        },
        {
            id: 3,
            leftImg: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2880272027,2725675047&fm=26&gp=0.jpg',
            title: '建筑工程学习心得',
            commit: 86,
            read: 8000,
            topic: '建筑工程学习心得',
            Introducer: '导语：何老师讲堂为你理顺每一个知识点',
            detailList: [
                {
                    headPic: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2996670195,119529534&fm=26&gp=0.jpg',
                    userName: '哈哈哈',
                    time: '2018.7.25',
                    img: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=415231727,3010250641&fm=26&gp=0.jpg',
                    content: '听了何老师的课程,越来越喜欢建筑工程学了',
                },
                {
                    headPic: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=458890635,3103148813&fm=26&gp=0.jpg',
                    userName: '建筑boy',
                    time: '2018.7.25',
                    img: 'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4092630665,2472194677&fm=85&app=63&f=PNG?w=121&h=75&s=04345A954F5374471A3C81C2030050BA',
                    content: '现在觉得建筑工程学并不是一个乏味枯燥的专业',
                }
            ]
        },
        {
            id: 4,
            leftImg: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2892776736,1917083033&fm=26&gp=0.jpg',
            title: '金融理财小技巧',
            commit: 86,
            read: 8000,
            topic: '金融理财小技巧',
            Introducer: '导语：每个团队倾力打造',
            detailList: [
                {
                    headPic: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1774325013,1911705803&fm=26&gp=0.jpg',
                    userName: '小鱼',
                    time: '2018.7.25',
                    img: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=415231727,3010250641&fm=26&gp=0.jpg',
                    content: '金融理财小技巧值得你去探究,乐趣无穷',
                },
                {
                    headPic: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1924916187,3378434830&fm=26&gp=0.jpg',
                    userName: '扛把子',
                    time: '2018.7.25',
                    img: 'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4092630665,2472194677&fm=85&app=63&f=PNG?w=121&h=75&s=04345A954F5374471A3C81C2030050BA',
                    content: '学习金融理财小技巧',
                }
            ]
        },
        {
            id: 5,
            leftImg: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2892776736,1917083033&fm=26&gp=0.jpg',
            title: '职场魅力篇',
            commit: 86,
            read: 8000,
            topic: '职场魅力篇',
            Introducer: '导语：团子老师的手绘课堂免费邀请你试听啦',
            detailList: [
                {
                    headPic: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2996670195,119529534&fm=26&gp=0.jpg',
                    userName: '飘啊飘',
                    time: '2018.7.25',
                    img: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=415231727,3010250641&fm=26&gp=0.jpg',
                    content: '职场魅力篇,职场魅力篇,职场魅力',
                },
                {
                    headPic: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1924916187,3378434830&fm=26&gp=0.jpg',
                    userName: 'CC阿满',
                    time: '2018.7.25',
                    img: 'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4092630665,2472194677&fm=85&app=63&f=PNG?w=121&h=75&s=04345A954F5374471A3C81C2030050BA',
                    content: '职场魅力篇,职场魅力篇,,职场魅力',
                }
            ]
        },

        // 精华问答部分
        {
            id: 6,
            leftImg: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3005857003,4065852126&fm=26&gp=0.jpg',
            title: '精华问答',
            commit: 86,
            read: 8000,
            topic: '职场魅力篇,',
            Introducer: '导语：团子老师的手绘课堂免费邀请你试听啦',
            detailList: [
                {
                    headPic: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2996670195,119529534&fm=26&gp=0.jpg',
                    userName: '荷兰豆',
                    time: '2018.7.25',
                    img: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=415231727,3010250641&fm=26&gp=0.jpg',
                    content: '职场魅力篇,职场魅力篇,,职场魅力',
                },
                {
                    headPic: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1924916187,3378434830&fm=26&gp=0.jpg',
                    userName: '美羊羊小姐',
                    time: '2018.7.25',
                    img: 'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4092630665,2472194677&fm=85&app=63&f=PNG?w=121&h=75&s=04345A954F5374471A3C81C2030050BA',
                    content: '职场魅力篇,职场魅力篇,,职场魅力',
                }
            ]
        },
        {
            id: 7,
            leftImg: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3005857003,4065852126&fm=26&gp=0.jpg',
            title: '7',
            commit: 86,
            read: 8000,
            topic: '职场魅力篇',
            Introducer: '导语：团子老师的手绘课堂免费邀请你试听啦',
            detailList: [
                {
                    headPic: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2996670195,119529534&fm=26&gp=0.jpg',
                    userName: '飘啊飘',
                    time: '2018.7.25',
                    img: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=415231727,3010250641&fm=26&gp=0.jpg',
                    content: '职场魅力篇,职场魅力篇,,职场魅力',
                },
                {
                    headPic: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1924916187,3378434830&fm=26&gp=0.jpg',
                    userName: 'CC阿满',
                    time: '2018.7.25',
                    img: 'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4092630665,2472194677&fm=85&app=63&f=PNG?w=121&h=75&s=04345A954F5374471A3C81C2030050BA',
                    content: '职场魅力篇,职场魅力篇,,职场魅力',
                }
            ]
        },
        {
            id: 8,
            leftImg: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3005857003,4065852126&fm=26&gp=0.jpg',
            title: '8',
            commit: 86,
            read: 8000,
            topic: '职场魅力篇',
            Introducer: '导语：团子老师的手绘课堂免费邀请你试听啦',
            detailList: [
                {
                    headPic: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2996670195,119529534&fm=26&gp=0.jpg',
                    userName: 'AD钙',
                    time: '2018.7.25',
                    img: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=415231727,3010250641&fm=26&gp=0.jpg',
                    content: '职场魅力篇,职场魅力篇,,职场魅力',
                },
                {
                    headPic: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1924916187,3378434830&fm=26&gp=0.jpg',
                    userName: '趣多多',
                    time: '2018.7.25',
                    img: 'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4092630665,2472194677&fm=85&app=63&f=PNG?w=121&h=75&s=04345A954F5374471A3C81C2030050BA',
                    content: '职场魅力篇,职场魅力篇,,职场魅力',
                }
            ]
        },
        {
            id: 9,
            leftImg: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3005857003,4065852126&fm=26&gp=0.jpg',
            title: '9',
            commit: 86,
            read: 8000,
            topic: '职场魅力篇',
            Introducer: '导语：团子老师的手绘课堂免费邀请你试听啦',
            detailList: [
                {
                    headPic: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2996670195,119529534&fm=26&gp=0.jpg',
                    userName: '落叶',
                    time: '2018.7.25',
                    img: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=415231727,3010250641&fm=26&gp=0.jpg',
                    content: '职场魅力篇,职场魅力篇,职场魅力',
                },
                {
                    headPic: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1924916187,3378434830&fm=26&gp=0.jpg',
                    userName: '维他命',
                    time: '2018.7.25',
                    img: 'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4092630665,2472194677&fm=85&app=63&f=PNG?w=121&h=75&s=04345A954F5374471A3C81C2030050BA',
                    content: '职场魅力篇,职场魅力篇,,职场魅力',
                }
            ]
        },
        {
            id: 10,
            leftImg: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3005857003,4065852126&fm=26&gp=0.jpg',
            title: '10',
            commit: 86,
            read: 8000,
            topic: '职场魅力篇',
            Introducer: '导语：团子老师的手绘课堂免费邀请你试听啦',
            detailList: [
                {
                    headPic: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2996670195,119529534&fm=26&gp=0.jpg',
                    userName: '大约是你',
                    time: '2018.7.25',
                    img: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=415231727,3010250641&fm=26&gp=0.jpg',
                    content: '职场魅力篇,职场魅力篇,,职场魅力',
                },
                {
                    headPic: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1924916187,3378434830&fm=26&gp=0.jpg',
                    userName: '啊哈',
                    time: '2018.7.25',
                    img: 'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4092630665,2472194677&fm=85&app=63&f=PNG?w=121&h=75&s=04345A954F5374471A3C81C2030050BA',
                    content: '职场魅力篇,职场魅力篇,,职场魅力',
                }
            ]
        },
        // 课程相关部分
        {
            id: 11,
            leftImg: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3005857003,4065852126&fm=26&gp=0.jpg',
            title: '课程相关',
            commit: 86,
            read: 8000,
            topic: '职场魅力篇',
            Introducer: '导语：团子老师的手绘课堂免费邀请你试听啦',
            detailList: [
                {
                    headPic: 'http://img0.imgtn.bdimg.com/it/u=1410451816,4073826360&fm=26&gp=0.jpg',
                    userName: '飘啊飘',
                    time: '2018.7.25',
                    img: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=415231727,3010250641&fm=26&gp=0.jpg',
                    content: '职场魅力篇,职场魅力篇,职场魅力',
                },
                {
                    headPic: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1924916187,3378434830&fm=26&gp=0.jpg',
                    userName: 'CC阿满',
                    time: '2018.7.25',
                    img: 'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4092630665,2472194677&fm=85&app=63&f=PNG?w=121&h=75&s=04345A954F5374471A3C81C2030050BA',
                    content: '职场魅力篇,职场魅力篇,职场魅力',
                }
            ]
        },
        {
            id: 12,
            leftImg: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3005857003,4065852126&fm=26&gp=0.jpg',
            title: '12',
            commit: 86,
            read: 8000,
            topic: '职场魅力篇',
            Introducer: '导语：团子老师的手绘课堂免费邀请你试听啦',
            detailList: [
                {
                    headPic: 'http://img2.imgtn.bdimg.com/it/u=247795485,1711071869&fm=26&gp=0.jpg',
                    userName: '是故',
                    time: '2018.7.25',
                    img: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=415231727,3010250641&fm=26&gp=0.jpg',
                    content: '职场魅力篇,职场魅力篇,职场魅力',
                },
                {
                    headPic: 'http://img5.imgtn.bdimg.com/it/u=40313889,2142903398&fm=26&gp=0.jpg',
                    userName: 'CCTV',
                    time: '2018.7.25',
                    img: 'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4092630665,2472194677&fm=85&app=63&f=PNG?w=121&h=75&s=04345A954F5374471A3C81C2030050BA',
                    content: '职场魅力篇,职场魅力篇,职场魅力',
                }
            ]
        },
        {
            id: 13,
            leftImg: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3005857003,4065852126&fm=26&gp=0.jpg',
            title: '13',
            commit: 86,
            read: 8000,
            topic: '职场魅力篇',
            Introducer: '导语：团子老师的手绘课堂免费邀请你试听啦',
            detailList: [
                {
                    headPic: 'http://img1.imgtn.bdimg.com/it/u=3541007422,2796445831&fm=26&gp=0.jpg',
                    userName: '飞雪',
                    time: '2018.7.25',
                    img: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=415231727,3010250641&fm=26&gp=0.jpg',
                    content: '职场魅力篇,职场魅力篇,职场魅力',
                },
                {
                    headPic: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1924916187,3378434830&fm=26&gp=0.jpg',
                    userName: '阿dd',
                    time: '2018.7.25',
                    img: 'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4092630665,2472194677&fm=85&app=63&f=PNG?w=121&h=75&s=04345A954F5374471A3C81C2030050BA',
                    content: '职场魅力篇,职场魅力篇,职场魅力',
                }
            ]
        },
        {
            id: 14,
            leftImg: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3005857003,4065852126&fm=26&gp=0.jpg',
            title: '14',
            commit: 86,
            read: 8000,
            topic: '职场魅力篇',
            Introducer: '导语：团子老师的手绘课堂免费邀请你试听啦',
            detailList: [
                {
                    headPic: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2996670195,119529534&fm=26&gp=0.jpg',
                    userName: '飘啊飘',
                    time: '2018.7.25',
                    img: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=415231727,3010250641&fm=26&gp=0.jpg',
                    content: '职场魅力篇,职场魅力篇,职场魅力',
                },
                {
                    headPic: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1924916187,3378434830&fm=26&gp=0.jpg',
                    userName: '嘿嘿呀',
                    time: '2018.7.25',
                    img: 'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4092630665,2472194677&fm=85&app=63&f=PNG?w=121&h=75&s=04345A954F5374471A3C81C2030050BA',
                    content: '职场魅力篇,职场魅力篇,职场魅力',
                }
            ]
        },
        {
            id: 15,
            leftImg: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3005857003,4065852126&fm=26&gp=0.jpg',
            title: '15',
            commit: 86,
            read: 8000,
            topic: '职场魅力篇',
            Introducer: '导语：团子老师的手绘课堂免费邀请你试听啦',
            detailList: [
                {
                    headPic: 'http://img3.imgtn.bdimg.com/it/u=2496063453,2603528854&fm=26&gp=0.jpg',
                    userName: '你的名字',
                    time: '2018.7.25',
                    img: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=415231727,3010250641&fm=26&gp=0.jpg',
                    content: '职场魅力篇,职场魅力篇,职场魅力',
                },
                {
                    headPic: 'http://img4.imgtn.bdimg.com/it/u=2489088344,2155397382&fm=26&gp=0.jpg',
                    userName: '不予',
                    time: '2018.7.25',
                    img: 'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4092630665,2472194677&fm=85&app=63&f=PNG?w=121&h=75&s=04345A954F5374471A3C81C2030050BA',
                    content: '职场魅力篇,职场魅力篇,职场魅力',
                }
            ]
        },
    ],
   
}




export default picData
<template>
    <div>
    
        <div class="topBox">
            <div class="touxiang">
                <img src="../../../assets/images/mine/images/2.png" alt="">
                <span class="uname">{{uname}}</span>
            </div>
            <!-- 退出登陆事件 -->
            <div class="loginout" @click="loginout">退出登陆</div>
            <div>
                <img src="../../../assets/images/mine/images/1.png" alt="" class="icon-top">
                <p class="icon-text">签到</p>
            </div>
        </div>
        <div class="contentBox">
            <div class="mine" v-for="(item,index) in img" :key="index" >
                <img  :src="item.url" alt="" @click="switchHandle(item)">
                <p>{{item.title}}</p>
            </div>
        </div>
        <div class="function">
            <div class="functionBox">
                <div><img src="../../../assets/images/mine/images/function1.png" alt=""></div>
                <div><p>下载管理</p></div>
                <div class="arrow"><img src="../../../assets/images/mine/images/arrow-left.png" alt=""></div>
            </div>
            <div class="functionBox" @click="tiaozhuanHandle">
                <div><img src="../../../assets/images/mine/images/function2.png" alt=""></div>
                <div><p>消息中心</p></div>
                <div class="arrow"><img src="../../../assets/images/mine/images/arrow-left.png" alt=""></div>
            </div>
            <div class="functionBox">
                <div><img src="../../../assets/images/mine/images/function3.png" alt=""></div>
                <div><p>学习币</p></div>
                <div class="arrow"><img src="../../../assets/images/mine/images/arrow-left.png" alt=""></div>
            </div>
            <div class="functionBox">
                <div><img src="../../../assets/images/mine/images/function4.png" alt=""></div>
                <div><p>反馈意见</p></div>
                <div class="arrow"><img src="../../../assets/images/mine/images/arrow-left.png" alt=""></div>
            </div>
            <div class="functionBox">
                <div><img src="../../../assets/images/mine/images/function5.png" alt=""></div>
                <div><p>设置</p></div>
                <div class="arrow"><img src="../../../assets/images/mine/images/arrow-left.png" alt=""></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                img:[
                    { url:require('../../../assets/images/mine/images/3.png'),title:'我的课程',id:1},
                    { url:require('../../../assets/images/mine/images/4.png'),title:'订单管理',id:2},
                    { url:require('../../../assets/images/mine/images/5.png'),title:'我的收藏',id:3},
                    { url:require('../../../assets/images/mine/images/6.png'),title:'观看记录',id:4} 
                ],
                uname:""
            }
        },
        mounted() {
            //获取登陆用户名
            let user = localStorage.getItem("loginUser");
            this.uname = user;
        },
        methods:{
            //退出登陆事件
            loginout(){
                localStorage.removeItem("loginUser");
                localStorage.removeItem("isLogin");

                // 强制刷新页面
                // location.reload();
                this.$router.go(0);
            },



        //点击事件切换页面
            switchHandle(item){
                if(item.id==1){
                    this.$router.push('/course')
                }else if(item.id==2){
                    this.$router.push('/guanli')
                }else if(item.id==3){
                    this.$router.push('/collect')
                }
            },
            //点击切换页面
            tiaozhuanHandle(){
                this.$router.push('/message')
            }
        }
    }
</script>

<style scoped>
.topBox{
    width: 100%;
    height: 3.25rem;
    background-image:url('http://www.wsgsoft.net/plds/images/big/07.jpg');
    background-size:100%;
    position: relative;
    color: #000;
    font-size: 0.38rem;
}

/* 退出登陆 */
.loginout{
    position: absolute;
    top: 0.2rem;
    left: 0.10rem;
    
}
.icon-top{
    width: 0.93rem;
    height: 0.93rem;
    float: right;
    margin-top: 1.125rem;
    border-radius: 80%;
    margin-right: 0.2rem;
}
.icon-text{
    float: left;
    margin-left: 6.5rem;
    width: 0.8rem;
    height: 0.5rem;
    color:black;
    font-size: 0.4rem;
}
.touxiang{
    margin-top: 0.8rem;
    float: left;
}
.touxiang img{
    width: 1.42rem;
    height: 1.42rem;
    border-radius: 52%;
    display: block;
    float: left;
}
.uname{
    float: left;
    display: block;
    margin-top: 0.5rem;
    margin-left: 0.2rem;
}
.contentBox{
    margin-top: 0.5rem;
    overflow: hidden; 
}
.mine{
    float: left;
    padding-left: 0.5rem;
}
.mine img{
    width: 1rem;
    height: 0.8rem;
    margin-left: 0.2rem;
}
.function{
    padding-left: 0.5rem;
    margin-top: 0.3rem;
    padding: 0.2rem;
}
.functionBox{
    width: 100%;
    height: 100%;
}
.function div img{
    width: 0.4rem; 
    height: 0.4rem;
}
.function div{
    float: left;
    margin-left: 0.1rem;
    font-size: 0.35rem;
    padding:0.1rem 0;
}

.functionBox>.arrow{
    float: right; 
    margin-left: 4rem;
    width: 0.35rem;
    height: 0.53rem;
    padding-right: 0.2rem;
}
</style>
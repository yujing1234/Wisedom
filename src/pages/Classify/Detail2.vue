<template>
        <div>
            <Search  bgcolor="blue"  quxiao="取消" />
            <div  class="box">
                    <ul>
                             <li  >综合排序</li>
                             <li  >{{ids}}</li>
                             <li :class="{active:cur}" @click="handell()" >筛选</li>
                    </ul>
            </div>
             <div  class="box2" v-if="isShow">
                    <div class="price">
                                <p>课程类型</p>
                                <span>系列课程</span>
                                <span>单门课程</span>
                                <span>成套课程</span>
                      </div>
                       <div >
                                <div   class="price2" >价格区间</div>
                                                <span>100~500</span>
                                                <span>500~1000</span>
                                                <span>1000以上</span>
                        </div>
                        <!-- <h4 style="color:skyblue; margin-top:0.2rem;float:right;margin-right:0.5rem">清空筛选</h4> -->
                     
                </div> 
                   
                  <div class="box4">
               
                       <div class="box5" v-for="(item,index) in  detailss" :key="index">
                                <img class="tupian"  :src="item.img" alt="" />
                                <h3 class="ehn">{{item.title}}</h3>
                                <span class="im">{{item.money}}</span>
                                <span class="im2">{{item.buy}}</span>
                       </div>
              </div>
     
        </div>
</template>

<script>
import demo from "../../../server/data/classifyData/json";
import Search from "../../components/Serach";
import "../../assets/font/iconfont.css";
export default {
        components:{
                Search
        },
        data(){
                return{
                        detailss:[],
                        cur:false,
                        ids:'',
                        isShow:false,
                        
                }
        },
        methods: {
            handell() {
               this.cur = !this.cur;
               this.isShow=!this.isShow

           }

        },
        mounted(id){
                this.ids=localStorage.getItem('name')
                this.detailss=demo.details

        },
  
}
</script>

<style lang="less" scoped>
.box{
        height: 1rem;
        background-color: rgb(238,238,238);
        border-bottom: 1px solid rgb(178,178,178);
        ul{
                margin-left: 0.4rem;
        li{
           float: left;
           margin-top: 0.32rem;
           margin-bottom: 0.2rem
      }
      li:nth-child(2){
              margin-left: 1.5rem;
              margin-right: 1.6rem;
      }
 
        }
}
.box2{
        height: 5rem;
        border-bottom: 1px solid #eeeeee;
        p{
                width: 1.8rem;
                color: rgb(102,102,102);
                margin-top: 0.68rem;
                margin-left: 0.36rem;
        }
        span{
                display: block;
                width: 2.11rem;
                height: 0.68rem;
                line-height: 0.68rem;
                border: 1px solid #eeeeee;
                margin-left: 0.3rem;
                margin-top: 0.53rem;
                text-align: center;
                border-radius:40%;
                float: left;
                color: rgb(102,102,102)
        }
        .price2{
              margin-top: 2rem;
               width: 1.8rem;
                color: rgb(102,102,102);
                margin-left: 0.36rem;
        }
}
.active{
         color:skyblue;
  }
  .box4 img{
        width: 42%;
        height: 2.2rem;
        margin-left: 0.3rem;
        margin-bottom: 0.25rem;
        margin-top: 0.3rem;
        float: left;
        margin-right: 0.2rem;
}
.box3{
        width: 100%;
}
.box5{
        border-bottom: 1px solid rgb(221,220,220);
        overflow: hidden;
        position: relative;
        padding:0.2rem 0;
        span{
                color:rgb(250,141,51);
                position: absolute;
                bottom:0.4rem;
        }
        .im{
             margin-right: 2rem;   
        }
}
.im2{
            right:0.25rem;     
}
h3{
        width: 50%;
        height: 0.5rem;
        line-height: 0.5rem;
        margin-bottom: 0.1rem;
        margin-top: 0.3rem
}


</style>


<template>
        <div>
                <Search  bgcolor="white" quxiao="取消"  placeholder="请搜索我感兴趣的内容"/>
                <div>
                        <h3>热门搜索</h3>
                        <ul >
                                <li  v-for="(item,index)  in  details" :key="index" class="sousuo" @click="handell">{{item}}</li>
                        </ul>
                </div>
        </div>
</template>

<script>
import demo from "../../../server/data/classifyData/json";
import "../../assets/font/iconfont.css";
import Search from "../../components/Serach";
export default {
   components:{
              Search
    },
    data(){
            return{
                    details:[],
            }
    },
    methods:{
            handell(){
                    this.$router.push('/detail')
            }
    },
    
    mounted(){
            this.details=demo.detail

    }
}
</script>

<style lang="less" scoped>
h3{
        margin-left: 0.4rem;
}
ul{
         margin-left: 0.4rem;

}
.sousuo{
        
        display: block;
        float: left;
        font-size: 0.3rem;
        text-align: center;
        color: rgb(112, 108, 108);
        margin-top: 0.4rem;
        margin-right: 0.3rem;
        height: 0.8rem;
        line-height: 0.8rem;
        border: 1px solid rgb(186,186,186);
        border-radius:0.4rem;
}
.sousuo:nth-child(-n+3){
        width: 1.5rem  
}
.sousuo:nth-last-child(3){
        width:1.3rem
}
.sousuo:nth-last-child(2){
        width:1.5rem
}
.sousuo:nth-last-child(1){
        width: 2.2rem

}


</style>
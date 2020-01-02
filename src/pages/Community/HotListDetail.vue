<template>
  <div>
    <div class="hotHead">
      <img
        @click="()=>{$router.back()}"
        class="return"
        src="../../assets/images/icon/return.png"
        alt
      />
      <p style="color:white;font-size:0.4rem;padding-top:0.2rem">详情</p>

      <!-- 标题 -->
      <div v-if="datas.length>0">
        <div class="box">
          <img class="headpic" :src="datas[0].leftImg" alt />
          <div class="hotContent">
            <p class="navTitle"><span>#</span>{{datas[0].title}}</p>

            <div style="margin-top:0.3rem">
              <p class="commit">{{datas[0].commit}}条评论</p>
              <p class="see">{{datas[0].read}}阅读</p>
              <p>话题发起人:{{datas[0].topic}}</p>
            </div>
          </div>
          <p class="Introducer">{{datas[0].Introducer}}</p>
        </div>
        <!-- 动态 -->
        <div v-for="(item, index) in datas[0].detailList" :key="index">
         
          <div class="userName">
            <div style="display:inline-block">
              <img class="headImg" :src="item.headPic" alt />
            </div>
            <div style="display:inline-block; padding-right: 4.3rem;">
              {{item.userName}}
              <p class="time">{{item.time}}</p>
            </div>
            <p class="content">{{item.content}}</p>
          </div>
          <img class="img" :src="item.img" alt />
          <!-- 点赞 -->
          <div class="praise">
            <img src="../../assets/images/icon/comment.png" alt />
            <img src="../../assets/images/icon/praise.png" alt />
          </div>
        </div>
      </div>
      <!-- 参与评论 -->
      <div class="find" @click="flag = !flag">
        <p>发表评论</p>
        <img src="../../assets/images/icon/published.png" alt />
      </div>
      <!-- 点击显示 -->
      <div class="show" v-if="flag">
        <div class="showContent">
          <p>发表评论</p>
          <img  @click="flag = !flag" src="../../assets/images/icon/arrow-top.png" alt />
        </div>
        <input type="textarea" v-model="inputData" />
        <div class="findTalk" @click="finTalking">发表</div>
      </div>
    </div>
  </div>
</template>

<script>
import picData from "../../../server/data/communityData/test";
export default {
  name: "HotListdetail",
  data() {
    return {
      datas: [],
      id: "",
      flag: false,
      inputData:''
    };
  },
  methods:{
       //   发布动态
   finTalking(){
       
     this.inputData='';
     this.flag=false;

    },
  },
  mounted() {
    this.id = this.$route.query.id;
    this.datas = picData.detail.filter((item, index) => {
      return item.id == this.id;
    });
  },
  watch: {
    id(n) {
      console.log(this.id, n);
    },
    datas(n) {
      console.log(this.datas);
    }
  }
};
</script>

<style lang="less" scoped>
// 头部
.return {
  width: 0.5rem;
  float: left;
  margin-top: 0.2rem;
}
.hotHead {
  text-align: center;
  height: 1rem;
  background-color: rgb(62, 179, 253);
}

//
.hotContent {
  margin-bottom: 0.3rem;
  display: inline-block;
  padding-left: 0.2rem;
}

.headpic {
  margin-top: 0.4rem;
      margin-left: -0.9rem;
  display: inline-block;
  width: 2rem;
  height: 2rem;
}
.navTitle {
  font-size: 0.4rem;
  display: inline-block;
  span{
      color: rgb(62, 179, 253);
      margin-right: 0.1rem;
  }
}
.commit {
  display: inline-block;

  margin-right: 1rem;
  font-size: 0.2rem;
}
.see {
  font-size: 0.2rem;
  display: inline-block;
}
.Introducer {
    float: left;
        margin-left: 0.3rem;

}
.img {
  width: 7rem;
  height: 3.5rem;
}

// 下面部分

.headImg {
  //   float: left;
  width: 1rem;
  margin-top: 0.2rem;
  margin-right: 0.2rem;
}

.userName {
  margin-bottom: 0.2rem;
  margin-top:1rem;
  font-size: 0.3rem;
  padding-bottom: 0.1rem;
          border-top: 1px solid #e0e0e0;
}

.time {
  font-size: 0.1rem;
  margin-top: 0.2rem;
  color: gray;
}

.content {
  font-size: 0.3rem;
      margin-top: 0.2rem;
          margin-left: 0.5rem;
}

.praise {
  font-size: 0.1rem;
  margin-top: 0.4rem;
  float: right;
  img {
    width: 0.4rem;
    padding-right: 0.8rem;
  }
}

//
.find {
  width: 94%;
  top: 95%;
  height: 0.6rem;
  position: fixed;
  border: 1px solid gray;
  background-color: white;
  color: gray;
  margin-left: 0.1rem;
  p {
    display: inline-block;
    line-height: 0.5rem;
    margin-right: 0.2rem;
  }
  img {
    width: 0.4rem;
    display: inline-block;
    color: gray;
    
  }
}


//发布动态
.show {
  position: fixed;
  z-index: 12;
  top:70%;
  background: white;
  width: 100%;

  .showContent {
    p {
      font-size: 0.4rem;
      float: left;
      margin-left: 0.5rem;
    }
    img {
      width: 0.6rem;
      float: right;
      margin-right: 0.5rem;
    }
  }

  .findTalk {
    font-size: 0.4rem;
    text-align: right;
    padding-right: 0.5rem;
  }
}
input {
  width: 6.5rem;
  height: 2rem;
  background-color: #eee;

}





</style>
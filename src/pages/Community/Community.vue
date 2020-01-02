<template>
  <div>
    <Search bgcolor="blue" @shijian="search" />
    <div class="head">
      <div v-for="(item, index) in datas.navData" :key="index" style="display:inline-block">
        <div>
          <!-- <router-link :to="'/community/hotList?id='+item.id"> -->
          <div @click="toHotList('/hotList?id='+item.id)">
            <img class="headpic" :src="item.url" alt />
          </div>
          <!-- <router-link exact to="/hotList">
            <img class="headpic" :src="item.url" />
          </router-link>-->
          <!-- </router-link> -->
        </div>
        <p class="navTitle">{{item.title}}</p>
      </div>
    </div>
    <div class="talk">聊天室</div>
    <!-- 动态  -->
    <!-- 点击显示 -->
    <div class="show" v-if="flag">
      <div class="showContent">
        <p>发动态</p>
        <img @click="flag = !flag" src="../../assets/images/icon/arrow-top.png" alt />
      </div>
      <input type="textarea" v-model="inputData" />

      <div class="findTalk" @click="finTalking">发表</div>
    </div>

    <!--  -->
    <div>
      <div class="box" v-for="(item,index) in datas.Learningdynamics" :key="index">
        
        <div class="userName">
          <div style="display:inline-block">
            <img class="headImg" :src="item.headPic" alt />
          </div>
          <div style="display:inline-block">
            {{item.userName}}
            <p class="time">{{item.time}}</p>
          </div>
        </div>
        <p class="content">{{item.content}}</p>
        <div class="browse">
          浏览{{item. browse}}次
          <div class="praise">
            <img class="second" src="../../assets/images/icon/comment.png" alt />
            <img class="first" src="../../assets/images/icon/praise.png" alt />
          </div>
           
        </div>
        
      </div>
    </div>
    <div class="find" @click="flag = !flag">
      <p>发布内容</p>
      <img src="../../assets/images/icon/published.png" alt />
    </div>
    <Nav />
  </div>
</template>


<script>
import picData from "../../../server/data/communityData/test";
import Search from "../../components/Serach";
import Nav from "../../components/Nav/Nav";

export default {
  name: "Community",
  data() {
    return {
      datas: {},
      flag: false,
      inputData: ""
    };
  },
  components: {
    Nav,
    Search
  },
  methods: {
    //   发布动态
    finTalking() {
      //  this.datas.Learningdynamics.unshift( {content:this.inputData})
      this.inputData = "";
      this.flag = false;
    },
    search() {
      this.$router.push("/communitySearchInput");
    },
    toHotList(url) {
      location.href = url;
    }
  },
  // methods: {
  //     handleDivClick(){
  //         console.log(handleJsonGet)
  //         this.datas = handleJsonGet()
  //     }
  // },
  mounted() {
    this.datas = picData;
  }
};
</script>

<style lang="less" scoped>
.head {
  display: inline-block;
  margin-top: 0.52rem;
}
.headpic {
  display: inline-block;
  width: 2rem;
  height: 1.5rem;
  margin-left: 0.38rem;
}
.navTitle {
  margin-left: 0.6rem;
  font-size: 0.3rem;
}
.talk {
  margin-top: 0.5rem;
  margin-left: 0.2rem;
  width: 1.5rem;
  line-height: 0.44rem;
  font-size: 0.27rem;
  height: 0.44rem;
  text-align: center;
  background-color: #ff7500;
  color: white;
}
//
.box {
      padding-bottom: 1.3rem;
  border-bottom: 1px solid #e0e0e0;
  position: relative;
}
.headImg {
  //   float: left;
  width: 1rem;
  margin-top: 0.6rem;
  margin-right: 0.2rem;
  margin-left: 0.1rem;
}

.userName {
  font-size: 0.3rem;
       
}

.time {
  font-size: 0.1rem;
  margin-top: 0.2rem;
  color: gray;
}
.content {
  font-size: 0.3rem;
  margin: 0.3rem 0.1rem 0.2rem 0.2rem;
}
.browse {
  font-size: 0.13rem;
  margin-top: 0.4rem;
  margin-left: 0.2rem;
  color: orangered;

  img {
    width: 0.38rem;
    padding-left: 0.5rem;
    display: inline-block;
    margin-left: 0.5rem;
    // float:right;
  }
  .praise {
    display: inline-block;
    margin-left: 3rem;
  }
}
// 点击发布动态
.find {
  margin-left: 35%;
  top: 83%;
  width: 2.5rem;
  height: 0.7rem;
  border-radius: 30px;
  box-shadow: 2px 0 10px 0 rgba(0, 0, 0, 0.3);
  position: fixed;
  background-color: white;
  font-size: 0.3rem;
  p {
    margin-left: 0.85rem;

    font-size: 0.32rem;
    line-height: 0.7rem;
  }
  img {
    width: 0.4rem;
    margin-left: 0.2rem;
    position: absolute;
    top: 0.15rem;
    left: 0.1rem;
  }
}

//发布动态
.show {
  position: fixed;
  z-index: 12;
  top: 68%;
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
  margin-left: 0.5rem;
}
</style>
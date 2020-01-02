<template>
  <div class="Classify">
    <Search @shijian="tiao"  bgcolor="blue" quxiao="取消" />

    <ul class="aside">

      <li
        v-for="(item,index)  in navTitles"
        :key="index"
        class="content1"
        :class="{'active':cur==index}"
        @click="handle(item.dataName,index)"
      >{{item.title}}</li>
    </ul>
    <div class="right">
      <div v-for="(item,index) in   myData" :key="index" @click="handleTitle()" >
        <h3 @click="clickme(item.title)">{{item.title}}</h3>
                <span v-for="(it,i) in   item.content" :key="i" @click="handleContent(it)" class="bt">{{it}}</span>
      </div>
    </div>

    <Nav />
  </div>
</template>

<script>
import demo from "../../../server/data/classifyData/json";
import Search from "../../components/Serach";
import "../../assets/font/iconfont.css";
import Nav from "../../components/Nav/Nav";
export default {
  name: "Classify",
  components: {
    Search,
    Nav
  },
  data() {
    return {
      navTitles: [],
      myData: [],
      content: [],
      selectKey: "",
      cur:0,
     
    };
  },
  methods: {
    handle(value,index) {
      console.log(value,index);
      this.selectKey = value;
      this.cur = index;

    },
    clickme(id){
      this.$router.push('/detail2');
      localStorage.setItem('name',id)

    },

    handleTitle() {},
    handleContent(it) {
      this.$router.push("/detail");
      // console.log(it);
      localStorage.setItem('name',it);
    },
    tiao(){
      this.$router.push("/searchinput");
    }
  },
  watch: {
    selectKey: function(val) {
      this.myData = demo.data[val];
      this.content = demo.content;
      console.log(demo.data[val]);
    }
  },
  mounted() {
    this.navTitles = demo.navTitle;
    this.myData = demo.data.hangye;
    this.content = demo.data.hangye;
    // console.log(this.myData);
  }
};
</script>

<style lang="less" scoped>
.Classify {
  width: 100%;
  .right {
    width: 72%;
    margin-top: 0.2rem;
    float: right;
    overflow: hidden;
    h3 {
      width: 75%;
      padding: 0.4rem 0.05rem;
      margin-left: 0.02rem;
      overflow: hidden;
      display: block;
    }
    .bt {
      display: block;
      height: 0.7rem;
      line-height: 0.7rem;
      float: left;
      font-size: 0.3rem;
      border: 1px solid #eeeeee;
      color: rgb(51, 51, 51);
      padding: 0  0.2rem;
      margin-left: 0.2rem;
      margin-bottom: 0.3rem;
      text-align: center;
    }
  }
}
.aside {
  float: left;
  width: 28%;
  height: 15rem;
  // margin-top: 0.2rem;
  background-color: rgb(247, 246, 246);

  .icon {
    span {
      display: block;
      width: 16%;
      margin-top: 0.2rem;
      
      float: left;
    }
  }

  .content1 {
    padding: 0.8rem 0.4rem;
    color: rgb(66, 65, 65);
    text-align: center;
    float: right;
  }

  .active{
    color:skyblue;
    background-color: #ffffff;

  }
}
</style>
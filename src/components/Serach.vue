<template>
  <div :class="bgcolors">
    <div class="serach">
      <img src="../assets/images/icon/search.png" alt />
      <input type="text" v-model="value" :placeholder="placeholder" @focus="focusHandle"/>
      <button v-if="quxiao" @click="quxiaoHandle">{{quxiao}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "serach",
  data() {
    return {
      value: "",
      
    };
  },
  props: ["quxiao", "bgcolor","placeholder"],
  methods: {
    //取消事件
    quxiaoHandle(){
      this.$router.back();
    },
    //获取焦点事件
    focusHandle(){
      this.$emit("shijian")
    }
  },
  computed: {
    bgcolors() {
      return this.bgcolor == "blue" ? "blue" : "white";
    }
  } 
};
</script>

<style lang="less" scoped>
.blue {
  background-color: rgb(62, 179, 253) !important;
    button{
         color:white;
        //  color:rgb(51,51,51)
    }
}
.white {
  background-color: white !important;
  input{
      background:rgb(246,246,246);
      color: #666
  }
  button{
     color: #888 ;
    //  color:rgb(51,51,51)
  }
}
.serach {
  text-align: left;
  width: 100%;
  height: 1.2rem;
  //  background-color: rgb(62,179,253);
  // background-color: rgb(62, 179, 253);
  padding: 0.35rem 0.3rem 0.2rem;
  box-sizing: border-box;
  position: relative;
  img {
    width: 0.38rem;
    position: absolute;
    top: 0.4rem;
    left: 0.4rem;
  }
  input {
    width: 90%;
    height: 0.5rem;
    border-radius: 0.08rem;
    padding: 0 0.7rem;
    box-sizing: border-box;
    font-size: 0.28rem;
  }
  button {
    background-color: transparent;
    // color: white;
    margin-left: 0.05rem;
    margin-bottom: 0.1rem;
  }
  
  }
</style>
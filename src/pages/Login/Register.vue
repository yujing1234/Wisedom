<template>
  <div>
    <!-- 头部 -->
    <Head title="用户注册" bgcolor="blue" />

    <!-- 注册表单 -->
    <ul>
      <li>
        用户名
        <input type="text" placeholder="请输入用户名" v-model="from.user" />
      </li>
      <li>
        密码
        <input type="text" placeholder="请输入6-16密码" v-model="from.password" />
      </li>
      <li>
        确认密码
        <input type="text" placeholder="请确认输入的密码" class="mima" v-model="from.Doublepassword" />
      </li>
      <li class="btn" @click="register">
        <input type="submit" value="注册并登陆" />
      </li>
      <p>
        用户注册即代表同意
        <span>《服务条款》</span>
      </p>
    </ul>
  </div>
</template>

<script>
import Head from "../../components/Head";
export default {
  name: "Register",
  components: {
    Head
  },
  data() {
    return {
      from: {
        user: "",
        password: "",
        Doublepassword: ""
      },
    };
  },
  mounted() {
    var user = JSON.parse(localStorage.getItem("user"));
    if(!user){
      localStorage.setItem("user",JSON.stringify([]));
    }
  },
    
  methods: {

    //注册函数
    register() {
      var user = JSON.parse(localStorage.getItem("user"));
      console.log(typeof user);//object[]
      
      if(user){
        user.push(this.from.user);
        localStorage.setItem("user", JSON.stringify(user));
        this.$router.push("/login");
      }
    }
  }
};
</script>

<style lang="less" scoped>
ul {
  padding: 0.2rem 0.3rem;
  font-size: 0.32rem;
  color: #333;
  li {
    height: 1rem;
    line-height: 1rem;
    border-bottom: 1px solid #ccc;
    input {
      margin-left: 0.5rem;
      padding: 0 0.3rem;
    }
    .mima {
      padding: 0 0.1rem;
      margin: 0;
    }
  }
  .btn {
    text-align: center;
    border: 0;
    margin-top: 0.8rem;
    background-color: rgb(62, 179, 253);
    border-radius: 0.1rem;
    input {
      padding: 0;
      margin: 0;
      background-color: rgb(62, 179, 253);
      color: #fff;
      letter-spacing: 0.03rem;
    }
  }
}

p {
  font-size: 0.26rem;
  margin-top: 0.2rem;
  span {
    color: rgb(92, 208, 83);
  }
}
</style>
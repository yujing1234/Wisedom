<template>
  <div class="login">
    <div class="logo">
      <img src="../../assets/images/Home/登录页_1.png" alt />
      <h1>智学课堂</h1>
    </div>

    <!-- 登陆表单 -->
    <form action class="from" @submit="login">
      <p v-show="error" class="error">用户名或密码错误！！！</p>
      <p>
        <input type="text" name="user" placeholder="输入手机号" v-model="from.user" />
      </p>
      <p>
        <input type="password" name="password" placeholder="输入密码" v-model="from.password" />
      </p>
      <button>登陆</button>
      <p>
        <span @click="$router.push('/register')">新用户注册</span>
        <span @click="$router.push('/forget')">忘记密码？</span>
      </p>
    </form>

    <!-- 登陆方式 -->
    <div class="loginType">
      <p>
        ——————
        <Span>其他登陆方式</Span>——————
      </p>
      <p>
        <img src="../../assets/images/Home/登录页_2.png" alt />
        <img src="../../assets/images/Home/登录页_3.png" alt />
        <img src="../../assets/images/Home/登录页_4.png" alt />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      from: {
        user: "",
        password: ""
      },
      error:false
    };
  },
  methods: {
    //登陆事件
    login(e) {
      // console.log(this.from);
      e.preventDefault();

      let user = JSON.parse(localStorage.getItem("user")).filter(item=>{
        return item == this.from.user
      })
      // console.log(user);

      if (user == this.from.user) {
         this.error = false;

        //存储登陆状态值和登陆用户名
        localStorage.setItem("isLogin",true);
        localStorage.setItem("loginUser",this.from.user);

        this.$router.replace("/");

      }else{
        this.error = true;
      } 

      

    }
  }
};
</script>

<style lang="less" scoped>
.login {
  overflow: hidden;
  text-align: center;
  height: 100%;
  background: linear-gradient(
    to right bottom,
    rgb(2, 171, 251),
    rgb(10, 196, 242),
    rgb(15, 216, 235),
    rgb(17, 226, 233)
  );
}

.logo {
  margin: 1.5rem 0;
  img {
    width: 22%;
    margin-bottom: 0.2rem;
  }
  h1 {
    color: white;
    font-weight: normal;
    font-size: 0.8rem;
    letter-spacing: 0.15rem;
  }
}

.from {
  margin-bottom: 1.2rem;
  position: relative;
  input {
    width: 70%;
    height: 0.8rem;
    background-color: transparent;
    border: 2px solid #fff;
    border-radius: 0.4rem;
    margin-bottom: 0.5rem;
    padding: 0 0.5rem;
    box-sizing: border-box;
    text-align: center;
    color: #fff;
  }
  button {
    text-align: center;
    color: #fff;
    width: 70%;
    height: 0.8rem;
    background-color: rgb(12, 186, 232);
    border-radius: 0.4rem;
    margin-bottom: 0.35rem;
  }

  p {
    span {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.28rem;
    }
    span:first-child {
      margin-right: 2.3rem;
    }
  }
}

.loginType {
  p:first-child {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.28rem;
    span {
      letter-spacing: 0.1rem;
    }
  }

  p {
    img {
      width: 10%;
    }
    img:nth-child(2) {
      margin: 0.1rem 1.9rem;
      position: relative;
      top: 0.1rem;
    }
  }
}

.error{
  color: red;
  position: absolute;
  top: -0.6rem;
  left: 2.2rem;
}
</style>
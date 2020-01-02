<template>
  <div>
    <!-- 导航条 -->
    <div class="serach">
      <img src="../../assets/images/Home/1.jpg" alt class="logo" />
      <img src="../../assets/images/icon/search.png" class="icon" />
      <input type="text" v-model="value" placeholder="4AM 特训班" @focus="$router.push('/homesearch')"/>
    </div>

    <!-- banner轮播图 -->
    <swiper :options="swiperOption" ref="mySwiper" class="swiper" @click="$router.push('/coursedetail')">
      <swiper-slide>
        <img src="../../assets/images/Home/banner1.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/images/Home/banner2.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/images/Home/banner3.jpg" alt />
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <!-- 每日推荐 -->
    <div class="tuijian" @click="$router.push('/homerecommend')">
      <div>
        <img src="../../assets/images/Home/2.jpg" alt />
      </div>
      <div>
        <img src="../../assets/images/Home/3.jpg" alt />
      </div>
    </div>

    <!-- tab切换 -->

    <!-- tabbar -->
    <ul class="tabbar">
      <swiper :options="swiperOption" ref="mySwiper">
        <li v-for="(item,index) in tabArr" :key="index" @click="getTabData(index+1)"  >
          <swiper-slide  :class="{'active':cur==index}">{{item}}</swiper-slide>
        </li>
      </swiper>
    </ul>

    <!-- view容器 -->
    <div style="margin-bottom:60px" v-if="tabList.length>0">
      <div v-for="(item,index) in tabList" :key="index" class="TabView">
        <div class="img">
          <img :src="item.img" />
        </div>
        <div class="tabinfo">
          <h3>{{item.title}}</h3>
          <p>{{item.name}}</p>
          <p class="tabtime">时长：{{item.timelength}}分钟</p>
          <span v-if="item.buystatus" class="tabbuystatus">已购买</span>
          <span v-else class="tabbuy">{{item.bugnumber}}人已购买</span>
        </div>
      </div>
    </div>
    <div v-else>数据正在加载中。。。。。。</div>

    <!-- 底部导航 -->
    <Nav />
  </div>
</template>

<script>
import Serach from "../../components/Serach";
import Nav from "../../components/Nav/Nav";
export default {
  name: "Home",
  components: {
    Serach,
    Nav
  },
  data() {
    return {
      value: "",
      //轮播图配置
      swiperOption: {
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          disableOnInteraction: false
        }
      },
      tabArr: ["公考求职", "财会金融", "职业技能", "自然科学", "前沿科技"],
      tabList: [],
      cur:0
    };
  },
  mounted() {
    this.getTabData(1);
  },
  methods: {
    //封装网络请求
    getTabData(index) {
      this.cur=index-1;
      this.axios
        .get(this.$api.baseUrl + this.$api.hometab, {
          params: { id: index }
        })
        .then(data => {
          console.log(data.data.resData[0].tabData);
          this.tabList = data.data.resData[0].tabData;
        });
    }
  }
};
</script>

<style lang="less" scoped>
.serach {
  text-align: center;
  width: 100%;
  height: 1rem;
  //   background-color: rgb(62, 179, 253);
  padding: 0.35rem 0.5rem 0.2rem;
  box-sizing: border-box;
  position: relative;
  .logo {
    width: 20px;
    float: left;
    margin-right: 0.25rem;
  }
  .icon {
    width: 0.38rem;
    position: absolute;
    top: 0.4rem;
    left: 1.2rem;
  }
  input {
    width: 90%;
    height: 0.5rem;
    background-color: rgb(231, 231, 231);
    border-radius: 0.08rem;
    padding: 0 0.8rem;
    box-sizing: border-box;
    font-size: 0.28rem;
    color: #999;
  }
}

//轮播图
.swiper {
  margin: 5px 0;
  img {
    width: 100%;
    height: 150px;
  }
}

//每日推荐
.tuijian {
  text-align: center;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
  overflow: hidden;
  padding: 15px 0;
  box-sizing: border-box;
  div:first-child {
    width: 30%;
    float: left;
    border-right: 1px solid #e0e0e0;
    box-sizing: border-box;
    img {
      width: 60%;
    }
  }
  div:last-child {
    width: 70%;
    float: left;
    img {
      width: 100%;
      height: 80px;
    }
  }
}

//tab切换
.tabbar {
  color: #666;
  font-size: 0.3rem;
  text-align: center;
  width: 100%;
  height: 50px;
  line-height: 50px;
  margin: 10px 0;
  padding: 0 0.2rem;
  box-sizing: border-box;
  li {
    width: 20%;
  }
}

.TabView {
  overflow: hidden;
  margin-bottom: 10px;
  padding: 0 0.2rem;
  box-sizing: border-box;
  .img {
    width: 40%;
    float: left;
    img {
      width: 90%;
      border-radius: 6px;
    }
  }
  .tabinfo {
    width: 60%;
    float: left;
    position: relative;
    h3 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    p{
      margin: 10px 0
    }
    span{
      position: absolute;
      right: 0.2rem;
      bottom: 0.2rem;
    }
  }
}

.tabtime{
  color: #666;
}

.tabbuy{
  color: #666;
  font-size: 0.22rem;
}

.tabbuystatus{
  color: rgb(251,177,116);
}
.active{
  color: #333;
  font-size: 0.35rem;
  font-weight: bold;

}
</style>
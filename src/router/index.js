import Vue from 'vue'
import VueRouter from 'vue-router'

//登陆相关页面
import Login from "../pages/Login/Login"
import Register from "../pages/Login/Register"
import Forget from "../pages/Login/Forget"

//主页相关页面
import Home from '../pages/Home/Home'
import HomeSearch from "../pages/Home/HomeSearch"
import HomeRecommend from "../pages/Home/HomeRecommend"
import HomeDetail from "../pages/Home/HomeDetail"
import CourseDetail from "../pages/Home/CourseDetail"
import DetailCourse from '../pages/Home/CourseDetail/Detail'
import Catalog from '../pages/Home/CourseDetail/Catalog'
import Correlation from '../pages/Home/CourseDetail/Correlation'

// 分类页面
import Classify from "../pages/Classify/Classify"
import Searchinput from '../pages/Classify/Searchinput'
import Detail from "../pages/Classify/Detail"
import Detail2 from '../pages/Classify/Detail2'
// 我的页面
import Mine from "../pages/Mine/Mine"
import Course from "../pages/Mine/course/Course"
import Guanli from "../pages/Mine/guanli/Guanli"
import Collect from "../pages/Mine/collect/Collect"
import Message from "../pages/Mine/message/message"

//社交页面
import HotList from '../pages/Community/HotList'
import HotListDetail from '../pages/Community/HotListDetail'
import SearchInput from '../pages/Community/SearchInput'
import Community from '../pages/Community/Community'




Vue.use(VueRouter)
const routes = [
  //登陆相关页面
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/forget",
    name: "Forget",
    component: Forget
  },


  //首页相关路由
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: "/homesearch",
    name: "HomeSearch",
    component: HomeSearch
  },
  {
    path: "/homerecommend",
    name: "HomeRecommend",
    component: HomeRecommend
  },
  {
    path: "/homedetail/:id?",
    name: "HomeDetail",
    component: HomeDetail
  },
  {
    path: "/coursedetail",
    name: "CourseDetail",
    component: CourseDetail,
    children: [
      {
        path: "detailcourse",
        name: "DetailCourse",
        component: DetailCourse
      },
      {
        path: "catalog",
        name: "Catalog",
        component: Catalog
      },
      {
        path: "correlation",
        name: "Correlation",
        component: Correlation
      }
    ],
    //默认显示子路由
    redirect:'/coursedetail/detailcourse'
  },




  //分类相关路由
  {
    path: '/classify',
    name: 'Classify',
    component: Classify
  },
  {
    path: "/searchinput",
    name: "Searchinput",
    component: Searchinput
  },
  {
    path: "/detail",
    name: "Detail",
    component: Detail

  },
  {
    path: "/detail2",
    name: "Detail2",
    component: Detail2

  },
  {
    path: '/community',
    name: 'Community',
    component: Community,
  },

  // 点击跳转热门榜单
  {
    path: '/hotList',
    name: 'hotList',
    component: HotList,
  },
  // 热门榜单详情
  {
    path: '/hotListDetail',
    name: 'hotListDetail',
    component: HotListDetail,
  },



  // 社交搜索
  {
    path: '/communitySearchInput',
    name: 'communitySearchInput',
    component: SearchInput,
  },

  {
    path: '/mine',
    name: 'Mine',
    component: Mine
  },
  {
    path: '/course',
    name: 'Course',
    component: Course
  },
  {
    path: '/guanli',
    name: 'Guanli',
    component: Guanli
  },
  {
    path: '/collect',
    name: 'Collect',
    component: Collect
  },
  {
    path: '/message',
    name: 'Message',
    component: Message
  },
]

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'history',
  // linkActiveClass:'active',
  linkExactActiveClass: 'active',
  base: process.env.BASE_URL,
  routes
})



//路由守卫，判断是否登陆成功
router.beforeEach((to, from, next) => {
  // next();
  if (to.path == "/login") {
    next();
  }

  //获取登陆状态值
  let isLogin = localStorage.getItem("isLogin");
  console.log(isLogin);

  if (isLogin) {
    next();
  } else {
    if (to.path == "/register") {
      next();
    }else if (to.path == "/forget") {
      next();
    } else {
      next("/login");
    }
  }

})

export default router

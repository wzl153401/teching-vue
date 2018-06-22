<template>
<div class="index">
  <div class="header">
      <div class="back iconfont">
          &#xe600;
      </div>
      <div class="serach"></div>
      <div class="city">北京<em class="iconfont">&#xe601;</em></div>
  </div>

<!-- banner -->

  <banner :swipers="swipers"></banner>
  <!-- icon-swiper -->
  <icon-swiper  :pages="pages"></icon-swiper>
   
   <!-- ul subject -->
     <ul class="map-listitem">
      <li>定位失败</li>
      <li>玩水季</li>
    </ul>
    <ul class="subject">
      <li></li>
    </ul>

</div>
  
</template>

<script>

  import banner from './banner.vue'
  import iconSwiper from './iconSwiper'

export default {
  name: 'Index',
  components:{
    banner,
    iconSwiper
  },
  data() {
      return {
        swipers:[],
        icons:[]
      }
    },
    methods:{
      getbanner(){
        this.$http.get("/static/index.json")
          .then(this.getinfosucc.bind(this))
      },
      getinfosucc(res){
        const body = res.body
        if(body && body.data && body.data.swiper){
            this.swipers = res.body.data.swiper
            this.icons = res.body.data.icons
        }
      }
    },
    computed:{
      pages(){
        const pages =[]
        this.icons.forEach((value,index)=>{
        let page = Math.floor( index / 8 )
            if(!pages[page]){
              //如果pages【0】和pages【1】的时候没有数组，就创建输出，因为循环出来有pages【0】和pages【1】所以会创建两个数组
                pages[page] = []
            }
            //创建完了数组，才能将value放入到数组中
            pages[page].push(value)
        })
       
      return pages
      }
    },
    created (){
      this.getbanner()
    }

}
</script>

<style>
.index{
  background: #f5f5f5;
}
.header {
    display: flex;
    height: 0.86rem;
    background: #05bad5;
    color:#fff;
    line-height: 0.86rem;
}
.back{
  height: 100%;
  text-align: center;
  width:0.64rem;
}
.serach{
  flex:1;
  height:0.6rem;
  margin:0.14rem 0.18rem;
  border:1px solid #ccc;
  border-radius: 0.1rem;
  background: #fff;
}
.city{
  width: 1.14rem;
  height: 100%;
  text-align: center;
}


.subject{
  width: 100%;
  margin-top:1px;
  height: 100px;
  background:pink;
}
.subject li{
 font-size:12px;
}

</style>

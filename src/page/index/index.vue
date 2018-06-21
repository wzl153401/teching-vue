<template>
<div class="index">
  <div class="header">
      <div class="back iconfont">
          &#xe600;
      </div>
      <div class="serach"></div>
      <div class="city">北京<em class="iconfont">&#xe601;</em></div>
  </div>
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item in swipers" :key="item.id">
      <div  class="swiperbox">
        <img class="imgurl" :src="item.imgurl" alt="" >
      </div>
      
   </swiper-slide>
     <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>


  <swiper  :options="swiperOption2">
      <swiper-slide v-for="(iteminfo,index) in pages" :key="index">
        <div class="icon-wrapper">
           <div v-for="item in iteminfo" :key="item.id" class="icon-item">
                <div class="icon-img-con">
                  <img :src="item.imgurl" class="icon-img">
                </div>
                <p class="img-title">{{item.title}}</p>
           </div>
        </div>
        
     </swiper-slide>

  </swiper>
   
</div>
  
</template>

<script>
export default {
  name: 'Index',
  data() {
      return {
        swipers:[],
        icons:[],
        swiperOption: {
         autoplay:3000,
          loop:true,
          pagination:'.swiper-pagination'
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
        },
        swiperOption2:{
           autoplay:false
        }
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
.swiperbox{
  width: 100%;
  height:0;
  padding-bottom:  26.6%;
  overflow:hidden;
}
.imgurl{
  width: 100%;
}
.icon-wrapper{
 
}
.icon-item{
  box-sizing:border-box;
  float:left;
  width:25%;
  padding:0.4rem;
}
.icon-img-con{
  width: 100%;
  height:0;
  padding-bottom: 100%;
}
.icon-img{
  width: 100%;
}
.img-title{
  text-align: center;
  width: 100%;
  overflow:hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>

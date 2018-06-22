<template>
   
  <swiper  :options="swiperOption2" class="fff">
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
       <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
  
    export default {
            props:{
                pages:{
                    type:Array,
                    // default:()=>[]
                }
            },
            data () {
                return {
                     swiperOption2:{
                        autoplay:false,
                        pagination:'.swiper-pagination'
                        }
                }
            }
        }

</script>

<style scoped>
        .fff{
    background:#fff;
    }
    .icon-wrapper{
    height:3.8rem;
    }
    .icon-item{
    float:left;
    width:25%;
    padding: 0.1rem 0.2rem;
    }
    .icon-img-con{
    width: 100%;
    height: 1.1rem;
    position: relative;
    }
    .icon-img{
    width: 1.1rem;
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    margin:0 auto;
    }
    .img-title{
    text-align: center;
    font-size:0.28rem;
    color:#212121;
    width: 100%;
    overflow:hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    }

</style>

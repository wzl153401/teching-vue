<template>
    <swiper :options="swiperOption">
            <!-- slides -->
        <swiper-slide v-for="item in swipers" :key="item.id">
            <div  class="swiperbox">
                <img class="imgurl" :src="item.imgurl" alt="" >
            </div>
        </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>
<script>
    export default {
        props:['swipers'],
        data (){
         return {
            swiperOption: {
                autoplay:3000,
                loop:true,
                pagination:'.swiper-pagination'
            },
         }
        }

    }
</script>

<style scoped>
    .swiperbox{
        width: 100%;
        height:0;
        padding-bottom:  26.6%;
        overflow:hidden;
        }
    .imgurl{
        width: 100%;
    }

</style>


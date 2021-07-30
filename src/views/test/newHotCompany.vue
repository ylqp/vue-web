<template>
    <div class="hot-company">
      <div class="pc-content">
        <div class="container">
          <div class="hot-company-title">热招企业</div>
          <div class="company-content">
            <div class="left-bgc">
              <img src="../../../assets/images/company-bgc-left.png" alt="">
            </div>
            <div class="right-bgc">
              <img src="../../../assets/images/company-bgc-rigth.png" alt="">
            </div>
            <div class="swiper-container swiper-no-swiping" id="swiper-content">
              <div class="swiper-wrapper">
                <div class="swiper-slide company-item" v-for="(item) in getTopList" :key="item.id"><img :src="item.pc_url" ></div>
              </div>
            </div>
            <div class="swiper-container swiper-no-swiping swiper-container2" id="swiper-content2">
              <div class="swiper-wrapper">
                <div class="swiper-slide company-item" v-for="(item) in getBottmList" :key="item.id"><img :src="item.pc_url" ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import 'swiper/css/swiper.min.css'
  import Swiper from 'swiper'
  export default {
    name: 'newHotCompany',
    data () {
      return {
        pcimages: [
          {
            id: 0,
            pc_url: require('../../../assets/images/pc-company/1.jpg'),
            mob_url: require('../../../assets/images/mob-company/1.jpg')
          },
          {
            id: 1,
            pc_url: require('../../../assets/images/pc-company/2.jpg'),
            mob_url: require('../../../assets/images/mob-company/2.jpg')
          },
          {
            id: 2,
            pc_url: require('../../../assets/images/pc-company/3.jpg'),
            mob_url: require('../../../assets/images/mob-company/3.jpg')
          },
          {
            id: 3,
            pc_url: require('../../../assets/images/pc-company/4.jpg'),
            mob_url: require('../../../assets/images/mob-company/4.jpg')
          },
          {
            id: 4,
            pc_url: require('../../../assets/images/pc-company/5.jpg'),
            mob_url: require('../../../assets/images/mob-company/5.jpg')
          },
          {
            id: 5,
            pc_url: require('../../../assets/images/pc-company/6.jpg'),
            mob_url: require('../../../assets/images/mob-company/6.jpg')
          },
          {
            id: 6,
            pc_url: require('../../../assets/images/pc-company/7.jpg'),
            mob_url: require('../../../assets/images/mob-company/7.jpg')
          },
          {
            id: 7,
            pc_url: require('../../../assets/images/pc-company/8.jpg'),
            mob_url: require('../../../assets/images/mob-company/8.jpg')
          },
          {
            id: 8,
            pc_url: require('../../../assets/images/pc-company/9.jpg'),
            mob_url: require('../../../assets/images/mob-company/9.jpg')
          },
          {
            id: 9,
            pc_url: require('../../../assets/images/pc-company/11.jpg'),
            mob_url: require('../../../assets/images/mob-company/10.jpg')
          },
          {
            id: 10,
            pc_url: require('../../../assets/images/pc-company/12.jpg'),
            mob_url: require('../../../assets/images/mob-company/11.jpg')
          },
          {
            id: 11,
            pc_url: require('../../../assets/images/pc-company/13.jpg'),
            mob_url: require('../../../assets/images/mob-company/12.jpg')
          },
          {
            id: 12,
            pc_url: require('../../../assets/images/pc-company/14.jpg'),
            mob_url: require('../../../assets/images/mob-company/13.jpg')
          },
          {
            id: 13,
            pc_url: require('../../../assets/images/pc-company/15.jpg'),
            mob_url: require('../../../assets/images/mob-company/14.jpg')
          },
          {
            id: 14,
            pc_url: require('../../../assets/images/pc-company/17.jpg'),
            mob_url: require('../../../assets/images/mob-company/15.jpg')
          },
          {
            id: 15,
            pc_url: require('../../../assets/images/pc-company/18.jpg'),
            mob_url: require('../../../assets/images/mob-company/16.jpg')
          },
          {
            id: 16,
            pc_url: require('../../../assets/images/pc-company/19.jpg'),
            mob_url: require('../../../assets/images/mob-company/17.jpg')
          },
          {
            id: 17,
            pc_url: require('../../../assets/images/pc-company/20.jpg'),
            mob_url: require('../../../assets/images/mob-company/18.jpg')
          },
          {
            id: 18,
            pc_url: require('../../../assets/images/pc-company/21.jpg'),
            mob_url: require('../../../assets/images/mob-company/19.jpg')
          },
          {
            id: 19,
            pc_url: require('../../../assets/images/pc-company/22.jpg'),
            mob_url: require('../../../assets/images/mob-company/20.jpg')
          },
          {
            id: 20,
            pc_url: require('../../../assets/images/pc-company/23.jpg'),
            mob_url: require('../../../assets/images/mob-company/21.jpg')
          },
          {
            id: 21,
            pc_url: require('../../../assets/images/pc-company/24.jpg'),
            mob_url: require('../../../assets/images/mob-company/22.jpg')
          },
          {
            id: 22,
            pc_url: require('../../../assets/images/pc-company/25.jpg'),
            mob_url: require('../../../assets/images/mob-company/23.jpg')
          },
          {
            id: 23,
            pc_url: require('../../../assets/images/pc-company/26.jpg'),
            mob_url: require('../../../assets/images/mob-company/24.jpg')
          },
          {
            id: 24,
            pc_url: require('../../../assets/images/pc-company/27.jpg'),
            mob_url: require('../../../assets/images/mob-company/25.jpg')
          },
          {
            id: 25,
            pc_url: require('../../../assets/images/pc-company/28.jpg'),
            mob_url: require('../../../assets/images/mob-company/26.jpg')
          }
        ]
      }
    },
    computed : {
      getTopList () {
        return this.pcimages.filter((t,i) => i < 12)
      },
      getBottmList () {
        return this.pcimages.filter((t,i) => i > 13)
      }
    },
    mounted () {
      this.initSwiper('#swiper-content')
      this.initSwiper('#swiper-content2')
    },
    methods : {
      initSwiper (id) {
        let showNum = 6
        let clientW = document.documentElement.clientWidth
        if (clientW <768) {
          showNum = 2
        } else if (clientW >= 768 && clientW < 992) {
          showNum = 4
        }
        new Swiper (id, {
          loop : true,
          slidesPerView :showNum,
          freeMode:true,
          slidesPerGroup :1 ,
          autoplay: true,
          speed:6000,
          grabCursor: true,
          autoplay : {
            delay:1,
            disableOnInteraction: false,
          },
          pagination: false,
          scrollbar: {
            el: '.swiper-scrollbar',
            hide:true,
          },
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  /*@import "../../../static/css/swiper.css";*/
  .swiper-container-free-mode>.swiper-wrapper {
    transition-timing-function: linear!important;
  }
  .container {
    box-sizing: border-box;
    padding: 20px;
  }
  .pc-content {
    padding-bottom: 100px;
    .company-content {
      position: relative;
      overflow-x: hidden;
      margin-top: 40px;
    }
    .hot-company-title {
      color: #333;
      font-size: 36px;
      font-weight: bold;
    }
    .left-bgc {
      position: absolute;
      z-index: 100;
      left: -50px;
      img {
        height: 150px;
      }
    }
    .right-bgc {
      position: absolute;
      z-index: 100;
      right: -50px;
      img {
        height: 150px;
      }
    }
    .swiper-container2 {
      margin-top: 30px;
    }
    .company-list-top,.company-list-bottom {
      display: flex;
    }
    .company-list-top {
      margin-bottom: 30px;
    }
    .company-item {
      img {
        width: 170px;
        height: 60px;
      }
    }
  }
  @media screen and (max-height: 991px){
    .left-bgc {
      position: absolute;
      z-index: 100;
      left: -50px;
      img {
        width: 150px;
        height: 150px;
      }
    }
    .right-bgc {
      position: absolute;
      z-index: 100;
      right: -50px;
      img {
        width: 150px;
        height: 150px;
      }
    }
  }
</style>

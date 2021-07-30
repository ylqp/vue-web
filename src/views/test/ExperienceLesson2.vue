<template>
  <div class="experience-container">
    <div class="pc__">
      <div class="pc-content container">
        <div class="pc-exoerience-header">
          <div class="title">体验课</div>
          <ul class="course-nav-list">
            <li class="course-nav-item" v-for="(navItem,navIndex) in navList" :key="navIndex">
              <span class="nav-name" :class="[activeIndex === navIndex ? 'active' : '']">{{navItem.name}}</span>
              <span class="nav-h">|</span>
            </li>
          </ul>
        </div>
        <div style="display: flex;margin-top: 30px">
          <el-row>
            <el-col :span="12" :lg="12">
              <div class="pc-left">
                <div class="pc-banner">
                  <img src="../../../assets/images/exper_banner.png" alt="">
                </div>
              </div>
            </el-col>
            <el-col :span="12" :md="24" :lg="12">
              <div class="pc-right">
                <div class="course-des">
                  <el-row :gutter="20">
                    <el-col :span="8" :lg="8" class="course-content"  v-for="(c,cI) in courseList" :key="cI">
                      <div class="course-item"
                           :key="cI"
                           :style="{backgroundImage: 'url('+require('../../../assets/images/' + c.bgc)+')'}"
                      >
                        <div class="course-item-title">
                          <span class="big-title">450+</span>
                          <span class="small-title">课时</span>
                        </div>
                        <div class="course-des-content">{{c.des}}</div>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="mobile__">
      <div class="mobile-title">体验课</div>
      <ul class="m-course-list">
        <li class="m-course-item">
          <div class="m-c-banner">
            <img src="../../../assets/images/mob_ex01.png" alt="">
          </div>
          <div class="m-c-right">
            <div class="c-title">Web前端精品入门课Web前端精品入门课</div>
            <div class="c-tag">
              <div class="c-t-item">
                <span class="green-text">450+</span>
                <span class="c-t-i-text">课时</span>
              </div>
              <div class="c-t-item">
                <span class="green-text">450+</span>
                <span class="c-t-i-text">课时</span>
              </div>
              <div class="c-t-item">
                <span class="green-text">新技术</span>
              </div>
            </div>
          </div>
        </li>
        <li class="m-course-item">
          <div class="m-c-banner">
            <img src="../../../assets/images/mob_ex01.png" alt="">
          </div>
          <div class="m-c-right">
            <div class="c-title">Web前端精品入门课Web前端精品入门课</div>
            <div class="c-tag">
              <div class="c-t-item">
                <span class="green-text">450+</span>
                <span class="c-t-i-text">课时</span>
              </div>
            </div>
          </div>
        </li>
        <li class="m-course-item">
          <div class="m-c-banner">
            <img src="../../../assets/images/mob_ex01.png" alt="">
          </div>
          <div class="m-c-right">
            <div class="c-title">Web前端精品入门课Web前端精品入门课</div>
            <div class="c-tag">
              <div class="c-t-item">
                <span class="green-text">450+</span>
                <span class="c-t-i-text">课时</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ExperienceLesson2',
    data () {
      return {
        activeIndex : 0,
        navList : [
          {
            name : '影视栏包剪辑'
          },
          {
            name : '影视后期合成'
          },
          {
            name : '短视频制作&运营'
          },
          {
            name : '全链路UI设计'
          },
          {
            name : 'JAVA企业级开发'
          }
        ],
        courseList : [
          {
            bTitle : '450+',
            sTitle : '课时',
            des : '从初级到中级，涵盖JAVA全技术',
            bgc : 'tybg01.png'
          },
          {
            bTitle : '70+',
            sTitle : '套',
            des : '行业技术解决方案，拒绝 只是点堆砌',
            bgc : 'tybg02.png'
          },
          {
            bTitle : '技术新',
            des : '每3个月课程大纲会完成 超过15%的更新',
            bgc : 'tybg03.png'
          },
          {
            bTitle : '大厂级',
            des : '思维体系，每个项目都 具备“大厂级”标准',
            bgc : 'tybg04.png'
          },
          {
            bTitle : '无限次',
            des : '体系化视频返修，全方位 帮助学员提升',
            bgc : 'tybg05.png'
          },
          {
            bTitle : '4大就业服务',
            des : '就业推荐，就业辅导，试用期 辅助，工作期',
            bgc : 'tybg05.png'
          }
        ],
      }
    }
  }
</script>

<style scoped lang="scss">

  @function torem($px) {
    @return ($px / 8) * 1rem;
  }

  .mobile__ {
    box-sizing: border-box;
    padding: torem(15) torem(15);
    height: torem(400);
    background-image: url("../../../assets/images/tiyan-bgc.png");
    background-size: 100% 100%;
    .mobile-title {
      font-weight: bold;
      color: #333;
      font-size: torem(20);
    }
    .m-course-list {
      .m-course-item {
        display: flex;
        margin-top: torem(15);
        padding-bottom: torem(15);
        border-bottom: 1px solid #F5F5F5;
        .m-c-banner {
          img {
            width: torem(130);
            height: torem(73);
          }
        }
        .m-c-right {
          flex: 1;
          box-sizing: border-box;
          padding-left: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .c-title {
            color: #444;
            font-size: torem(15);
            font-weight: 500;
          }
          .c-tag {
            display: flex;
            margin-right: torem(15);
            .c-t-item:last-child {
              margin-right: 0;
            }
            .c-t-item {
              margin-right: torem(15);
              .green-text {
                color: #08BD6B;
                font-size: torem(12);
                font-weight: 600;
              }
              .c-t-i-text {
                color: #666;
                font-size: torem(9);
              }
            }
          }
        }
      }

    }
  }
  .pc__ {
    box-sizing: border-box;
    padding: 60px 0 80px;
    display: flex;
    justify-content: center;
  }
  .pc-content {
    /*width: 1420px;*/
    padding: 20px;
    box-sizing: border-box;
    .pc-exoerience-header {
      display: flex;
      justify-content: space-between;
      .course-nav-list {
        display: flex;
        .course-nav-item:first-child {
          margin-left: 0;
        }
        .course-nav-item:last-child {
          .nav-h {
            display: none;
          }
        }
        .course-nav-item {
          cursor: pointer;
          display: flex;
          flex-wrap: nowrap;
          margin-left: 13px;
          .nav-name.active {
            color: #FF5E13;
            font-weight: 500;
          }
          .nav-name {
            color: #333;
            font-size: 16px;
            font-weight: 400;
          }
          .nav-h {
            color: #CCCCCC;
            margin-left: 13px;
          }
        }
      }
      .title {
        font-size: 36px;
        color: #333;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
      }
    }
    .pc-left {
      .pc-banner {
        /*margin-top: 65px;*/
        img {
          width: 100%;
          height: 390px;
        }
      }
    }
    .pc-right {
      box-sizing: border-box;
      .course-des {
        display: flex;
        /*margin-top: 44px;*/
        flex-wrap: wrap;
        padding-left: 20px;
        .course-content {
          /*margin-left: 20px;*/
        }
        .course-item {
          box-sizing: border-box;
          padding: 0 48px;
          width: 220px;
          height: 185px;
          background-size: 100% 100%;
          box-shadow: 0 12px 20px 0 rgba(0,0,0,.1);
          display: flex;
          flex-direction: column;
          justify-content: center;

          margin-bottom: 20px;
          .course-des-content {
            text-align: center;
          }
          .course-item-title {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 8px;
            .big-title {
              color: #08BD6B;
              font-size: 30px;
              font-weight: 600;
            }
            .small-title {
              color: #333;
              font-size: 14px;
              font-weight: 400;
              margin-left: 4px;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 991px){
    .pc__ {
      display: none;
    }
    .mobile__ {
      display: block;
    }
  }

  @media screen and (min-width: 992px) and (max-width: 1280px) {
    .pc-left {
      display: none;
    }
    .pc-content .pc-right .course-nav-list {
      justify-content: center;
    }
    .pc-content {
      width: 1220px;
    }
    .mobile__ {
      display: none;
    }
    .course-content {
      display: flex;
      justify-content: center;
    }
  }
  @media screen and (min-width : 1200px) and (max-width: 1440px){
    .pc-content .pc-right .course-des .course-item {
      width: 190px;
      height: 155px;
    }
    .pc-content .pc-left .pc-banner img {
      height: 330px;
    }
  }
  @media screen and (min-width: 1281px){
    .pc__ {
      display: flex;
    }
    .mobile__ {
      display: none;
    }
  }
</style>

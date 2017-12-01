<template>
  <div class="wrap" v-if="myArr != null">
    <div class="collect_top">
      <i class="iconfont icon-heart"></i>
      <span>我的收藏</span>
      <span @click="del" v-show="!isShow">编辑</span>
      <span @click="del" v-show="isShow">完成</span>
    </div>
    <div class="collect_content">
      <div class="con_table">
        <div class="goods">商品</div>
        <div class="prand">品牌</div>
      </div>
    </div>
    <div class="collect">
      <!--收藏商品列表-->
      <div class="goodslist">
        <div class="mygoods" v-for="(a,index) in myArr">
          <!--商品勾选框-->
          <div id="prdcheck" :class="{ checkbox: ischeckbox, 'nocheck': isnocheck}" v-show="isShow"
               @click="aCheck(index)" ref="goodscheck"></div>
          <div class="goodsbox">
            <div class="mygoodsLeft">
              <img :src="a.imgUrl" alt="">
            </div>
            <div class="mygoodsRight">
              <div class="name">{{a.name}}</div>
              <div class="price">￥{{a.price}}</div>
            </div>
          </div>
        </div>
      </div>
      <!--收藏品牌列表-->
      <div class="pranglist"></div>
    </div>

    <div class="footer" v-show="isShow">
      <div class="allcheck" @click="allCheck">
        <!--全选按钮-->
        <div class="check">
          <div :class="{ allchecked: isall, 'noall': isnoall}"></div>
        </div>
        <span>全选</span>
      </div>
      <div class="rightFooter">
        <button id="quxiao" @click="quxiao">取消收藏</button>
      </div>
    </div>

    <!--取消收藏-->
    <div class="successLike" v-show="likeShow">
      <div class="likecontent">
        <div class="div1"><span>温馨提示</span></div>
        <div class="div2">
          <span v-show="likeor">确定要删除这个收藏项吗</span>
          <span v-show="likeor1">请至少选中一件商品</span>
        </div>
        <div class="div3" @click="sure">
          <span>确定</span>
          <span class="www">取消</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  //  import axios from 'axios'

  export default {
    name: 'UserCollect',
    data: function () {
      return {
        myArr: null,
        isShow: false,
        ischeckbox: false,
        isnocheck: true,
        isall: false,
        isnoall: true,
        likeShow: false,
        likeor: false,
        likeor1: false
      }
    },
    mounted: function () {
//      axios.post('verification/token').then(function (res) {
//        console.log(res)
//      })
      this.$request({
        type: 'get',
        url: 'api?userId=D11TQyXIrOHYEnjbyvGGS%2BBydLcgfIaq7Ellu%2FRbwcTTuxcMSrPT9YB5yjlW%2BBj4MdtV79xsVIVGMQTRRPK%2BDQ%3D%3D&method=customer.getfavlist&pagesize=15&pageindex=1&ver=1.0&r=1511524490695',
        header: {},
        params: {},
        success: function (res) {
          this.myArr = res.data.data.productlist.product
        },
        failed: function (err) {
          console.log(err)
        }
      })
      this.$request({
        type: 'get',
        url: 'api?userId=D11TQyXIrOHYEnjbyvGGS%2BBydLcgfIaq7Ellu%2FRbwcTTuxcMSrPT9YB5yjlW%2BBj4MdtV79xsVIVGMQTRRPK%2BDQ%3D%3D&method=customer.getfavlist&pagesize=15&pageindex=1&ver=1.0&r=1511524490695',
        header: {},
        params: {},
        success: function (res) {
          this.myArr = res.data.data.productlist.product
        },
        failed: function (err) {
          console.log(err)
        }
      })
//      this.$request({
//        type: 'post',
//        url: '/verification/token',
//        header: {},
//        params: {},
//        data: {
//          grant_type: 'client_credentials',
//          client_id: '560b5da9-a046-4f4c-ba1d-2be2cae250ba',
//          client_secret: 'yhLVp7Nbfp3D'
//        },
//        success: function (res) {
//          console.log(res.data)
//        },
//        failed: function (err) {
//          console.log(err)
//        }
//      })
    },
    methods: {
      quxiao: function () {
        this.likeShow = true
        let j = 0
        for (let i = 0; i < this.$refs.goodscheck.length; i++) {
          //  如果没被选中
          if (this.$refs.goodscheck[i].className === 'checkbox') {
            j += 1
          }
        }
        if (j > 0) {
          this.likeor = true
          this.likeor1 = false
        } else {
          this.likeor = false
          this.likeor1 = true
        }
      },
      sure: function () {
        this.likeShow = false
      },
      del: function () {
        this.isShow = !this.isShow
      },
      clear: function (index) {

      },
//      全选按钮
      allCheck: function () {
        // 如果全选按钮被选中
        if (this.isall) {
          // 全选按钮不被选中
          this.isall = false
          this.isnoall = true
          // 遍历
          for (let i = 0; i < this.$refs.goodscheck.length; i++) {
            //  如果被选中
            if (this.$refs.goodscheck[i].className === 'checkbox') {
              this.$refs.goodscheck[i].className = 'nocheck'
            }
          }
        } else {
          // 全选按钮被选中
          this.isall = true
          this.isnoall = false
          // 遍历
          for (let i = 0; i < this.$refs.goodscheck.length; i++) {
            //  如果没被选中
            if (this.$refs.goodscheck[i].className !== 'checkbox') {
              this.$refs.goodscheck[i].className = 'checkbox'
            }
          }
        }
      },
//     勾选单件商品
      aCheck: function (index) {
        let j = 0
        //  如果按钮是未选中的状态
        if (this.$refs.goodscheck[index].className === 'nocheck') {
          // 点击的按钮选中
          this.$refs.goodscheck[index].className = 'checkbox'
          // 判断是否所有的按钮都被选中
          for (let i = 0; i < this.$refs.goodscheck.length; i++) {
            //  如果没被选中
            if (this.$refs.goodscheck[i].className !== 'checkbox') {
              j += 1
            }
          }
          if (j === 0) {
            this.isall = true
            this.isnoall = false
          } else {
            this.isall = false
            this.isnoall = true
          }
        } else {
          //  点击的按钮更改为未选中
          this.$refs.goodscheck[index].className = 'nocheck'
          //  改变全选按钮的样式
          this.isall = false
          this.isnoall = true
        }
      }
    }
  }
</script>

<style scoped lang="less">
  html {
    width: 100%;
    height: 100%;
    background-color: #f1f1f1;
  }

  .likecontent {
    width: 80%;
    max-width: 360px;
    border-radius: 6px;
    background-color: rgb(255, 255, 255);
    .div1 {
      text-align: center;
      padding: 15px 15px 0;
      font-size: 20px;
      color: rgb(51, 51, 51);
    }
    .div2 {
      text-align: center;
      padding: 30px 15px;
      font-size: 15px;
      color: rgb(102, 102, 102);
      word-wrap: break-word;
      word-break: break-all;
    }
    .div3 {
      width: 100%;
      overflow: hidden;
      border-top: 1px solid rgb(230, 230, 230);
      font-size: 17px;
      text-align: center;
      line-height: 38px;
      float: left;
      box-sizing: border-box;
      background-color: transparent;
      padding: 0 15px;
      color: rgb(255, 59, 127);
      border-bottom-left-radius: 6px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span{
        width: 50%;
      }
      .www{
        color: #999999;
      }
    }
  }
  .successLike {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
  }

  #prdcheck {
    margin-right: 10px;
  }

  /*全选*/
  .allchecked {
    padding: 3px;
    width: 18px;
    height: 18px;
    border: 1px solid #d2d2d2;
    border-radius: 100%;
    background-clip: content-box;
    box-sizing: border-box;
    margin-bottom: 5px;
    background-color: pink;
  }

  .noall {
    padding: 3px;
    width: 18px;
    height: 18px;
    border: 1px solid #d2d2d2;
    border-radius: 100%;
    background-clip: content-box;
    box-sizing: border-box;
    margin-bottom: 5px;
    background-color: #fff;
  }

  /*未选中*/
  .nocheck {
    padding: 3px;
    width: 18px;
    height: 18px;
    border: 1px solid #d2d2d2;
    border-radius: 100%;
    background-clip: content-box;
    box-sizing: border-box;
    margin-bottom: 5px;
    background-color: #fff;
  }

  /*选中*/
  .checkbox {
    padding: 3px;
    width: 18px;
    height: 18px;
    border: 1px solid #d2d2d2;
    border-radius: 100%;
    background-clip: content-box;
    box-sizing: border-box;
    margin-bottom: 5px;
    background-color: pink;
  }

  #quxiao {
    width: 80px;
    font-size: 14px;
    position: absolute;
    right: 10px;
    bottom: 10px;
    top: 10px;
    border: 1px solid #ff3b7f;
    color: #ff3b7f;
    border-radius: 4px;
    background: 0 0;
    outline: 0;
  }

  .footer {
    font-size: 14px;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    border-top: 1px solid #d5d5d5;
    position: fixed;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    .allcheck {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      padding-right: 20px;
      border-right: 1px solid #d5d5d5;
    }
  }

  .collect_top {
    z-index: 999999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 2px solid #d2d2d2;
  }

  .collect_content {
    width: 100%;
    .con_table {
      overflow: hidden;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      .goods {
        width: 50%;
        line-height: 40px;
        border-right: 1px solid #d5d5d5;
        border-bottom: 1px solid #d5d5d5;
      }
      .prand {
        width: 50%;
        line-height: 40px;
        border-bottom: 1px solid #d5d5d5;
      }
    }
  }

  .collect {
    width: 100%;
    .goodslist {
      width: 100%;
      padding: 5px 10px;
      background-color: #fff;
      color: #666;
      box-sizing: border-box;
      div:nth-last-child(1) {
        border: none;
      }
      .mygoods {
        padding: 10px 0;;
        width: 100%;
        flex-wrap: nowrap;
        align-items: center;
        border-bottom: 1px solid #d2d2d2;
        display: flex;
        .goodsbox {
          display: flex;
          width: 100%;
          .mygoodsLeft {
            margin-right: 8px;
            width: 60px;
            height: 80px;
            background-color: #eee;
            border: 1px solid #d2d2d2;
            img {
              width: 100%;
              height: 100%;
              vertical-align: top;
            }
          }
          .mygoodsRight {
            width: 80%;
            color: #333;
            overflow: hidden;
            font-size: 14px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
          }
        }

      }
    }
  }

  .price {
    color: #ff3b7f;
  }
</style>

<template>
  <div class="tab-bar-item" @click="itemClick">
      <div v-if="!istrue"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="activeStyle"><slot  name="item-text"></slot></div>
       <!-- <img src="../../assets/img/tabbar/home.png" alt="">
       <div>首页</div> -->
  </div>
</template>

<script>
export default {
    name:'TabBarItem',
    props:{
     path:String,
     activeColor:{
         type:String,
         default:'red'
     }
    },
    data() {
        return {
            // istrue:false
        }
    },
    methods: {
        itemClick(){
          this.$router.replace(this.path).catch(err => console.log(err));
        },
    },
    computed:{
        istrue(){
            return this.$route.path.indexOf(this.path) != -1;
        },
        activeStyle(){
            return this.istrue ? {color: this.activeColor} :{}
        },
    },
}
</script>

<style>
.tab-bar-item{
  flex: 1; /*平均站位置*/
  text-align: center;
  height: 49px;
  line-height: 49xp;
}

.tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
}
.active{
    /* color: rgb(224, 105, 185); */
    color: aliceblue;
    background-color: red;
}
</style>
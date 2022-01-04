<template>
  <div>
      <TabBar>
   <TabBarItem path="/home" >
     <!-- <img slot="item-icon" src="" alt="">
     <img slot="item-icon-active" src="" alt=""> -->
     <div slot="item-text">首页</div>
   </TabBarItem>
   <TabBarItem path="/organization" >
     <!-- <img slot="item-icon" src="" alt="">
     <img slot="item-icon-active" src="" alt=""> -->
     <div slot="item-text">志愿组织</div>
   </TabBarItem>
   <TabBarItem path="/project">
     <!-- <img slot="item-icon" src="" alt="">
     <img slot="item-icon-active" src="" alt=""> -->
     <div slot="item-text">志愿项目</div>
   </TabBarItem>
   <TabBarItem path="/style">
     <!-- <img slot="item-icon" src="" alt="">
     <img slot="item-icon-active" src="" alt=""> -->
     <div slot="item-text">志愿风采</div>
   </TabBarItem>
   <TabBarItem path="/join">
     <!-- <img slot="item-icon" src="" alt="">
     <img slot="item-icon-active" src="" alt=""> -->
     <div slot="item-text">加入我们</div>
   </TabBarItem>
  </TabBar>
  </div>
</template>

<script>

import TabBar from "components/common/tabbar/TabBar.vue"
import TabBarItem from "components/common/tabbar/TabBarItem.vue"

export default {
   name:'MainTabBar',
   components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>
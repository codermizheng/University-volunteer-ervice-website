<template>
      <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name:'TabBar'
}
</script>

<style>
#tab-bar {
   display: flex;    /*弹性布局*/

   background-color: #f6f6f6;

   position: fixed;
   left: 0;

   top: 100px;
   right: 0;
   /*让整体在最下面*/
   /*bottom: 0;
   right: 0;*/

   box-shadow: 0 -3px 1px rgba(100, 100, 100, .1);
}
.tab-bar-item{
  flex: 1; /*平均站位置*/
  text-align: center;
  height: 49px;
  font-size: 25px;
}

/* .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
} */
</style>
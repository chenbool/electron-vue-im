<template>
  <div id="app">
    <el-row>
      <left-menu></left-menu>

      <el-col :span="22" :offset="2">

        <!-- 顶部关闭 最大化 -->
        <win-bar></win-bar>
        
        <el-row class="main">
          <router-view></router-view>
        </el-row>

      </el-col> 
       
    </el-row>
  </div>
</template>

<script>
  import LeftMenu from '@/components/LeftMenu'
  import ToolBar from '@/components/ToolBar'

  export default {
    name: 'IM-pc',
    data () {
      return {
      }
    },
    created () { 
    },
    components: {  
      'left-menu':LeftMenu,
      'win-bar':ToolBar
    },
    methods: {
    }
  }
</script>

<style>
  /* CSS */

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    /* -webkit-app-region: drag; */
  }

  html,
  body,
  #app{
    font-family: 'Source Sans Pro', sans-serif; 
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    /* 拖动 */
    /* -webkit-app-region: no-drag; */
  }
  a{
    color: #8C8C8C;
    text-decoration: none;
    padding: 5px;
    color: 14px;
  }
  a.router-link-exact-active{
    color: #09BB07;
    font-weight: bold;
  }
  /* 文本选择 */
  .titlebar {
    -webkit-user-select: none;
    -webkit-app-region: drag;
  }
  #main{
    padding: 10px;
  }
  .el-row{
    text-align: center;
  }
</style>

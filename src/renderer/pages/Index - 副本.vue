<template>
  <div id="index">

    <!-- <main> -->
        <el-row>
            <el-col :span="2" class="menu-left">
                <el-row>
                    <!-- <img id="logo" src="~@/assets/logo.png" alt=""> -->
                </el-row>
                <el-row>
                    <router-link to="/land" >
                        <i class="el-icon el-icon-message"></i>
                    </router-link>
                </el-row>
            </el-col>

            <el-col :span="22" :offset="2">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
        </el-row>
    <!-- </main> -->
  </div>
</template>

<script>

  export default {
    name: 'index',
    components: {  },
    methods: {

    }
  }
</script>

<style>

  main{
       height: 100%;
       width: 100%;
       margin: 0;
       padding: 0;
  }
  #logo{
      margin-top: 10%;
      width: 40px;
      height: 40px;
      border: 1px solid #222222;
      border-radius: 5px;
      cursor: pointer;
  }
  .menu-left{
    background: #2E2A29;
    min-height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    padding: 10px 5px;
    text-align: center;
  }
  /* 09BB07 */

  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    min-height: 30px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

</style>

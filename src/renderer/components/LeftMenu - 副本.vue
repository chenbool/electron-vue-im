<template>
  <div id="left-menu" >
  
    <el-col :span="2" class="menu-left">
        <el-row>
            <img id="logo" src="~@/assets/logo.png" alt="" style="width:100%;">
        </el-row>
        <el-row>
            <router-link to="/chat">
                <!-- <i class="el-icon el-icon-message"></i> -->
                <i class="fa fa-comment-o"></i>
            </router-link>
        </el-row>
        <el-row>
            <router-link to="/land" >
                <!-- <i class="el-icon el-icon-phone-outline"></i> -->
                <i class="fa fa-user-o"></i>
            </router-link>
        </el-row>
        <el-row>
            <router-link to="/" >
                <!-- <i class="el-icon el-icon-star-off"></i> -->
                <i class="fa fa-cube"></i>
            </router-link>
        </el-row>

        <el-row>
            <router-link to="/" >
                <i class="el-icon el-icon-menu"></i>
                <!-- <i class="fa fa-th-large"></i> -->
            </router-link>
        </el-row>
    </el-col>  

  </div>
</template>

<script>

  export default {
    name: 'left-menu',
    components: {},
    methods: {
    }
  }
</script>

<style>

  #left-menu .menu-left{
    background: #2E2A29;
    min-height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    padding: 5px;
    text-align: center;
  }

  #left-menu #logo{
      margin-top: 10%;
      width: 40px;
      height: 40px;
      border: 2px solid #37373D;
      border-radius: 3px;
      cursor: pointer;
  }

  #left-menu .fa,
  #left-menu .el-icon
  {
      font-size: 20px;
  }
  #left-menu .el-row{
      padding: 15px 5px;
  }
</style>

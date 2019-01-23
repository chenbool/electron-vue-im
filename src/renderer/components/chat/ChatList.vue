<template>
  <div id="chat-list">
    <el-col :span="7" class="left-box">

      <!-- search -->
      <el-row class="search-box">
        <el-input
          placeholder="请输入关键字"
          size="mini" >
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-button icon="el-icon-plus" size="mini" circle></el-button>
      </el-row>

      <!-- chat -->
      <el-row class="chat">

        <!-- 1 -->
        <el-row class="chat-box">
          <el-row >
            <el-col :span="6" class="head">
              <img src="~@/assets/logo.png" alt="">
            </el-col>
            <el-col class="name" :span="13">
              <el-col class="name-title">文件传输助手</el-col>
              <el-col class="desc">暂无内容</el-col>
            </el-col>
            <el-col :span="5" class="time">14:18</el-col>
          </el-row>
        </el-row>

        <!-- 2 -->
        <el-row class="chat-box ">
          <el-row class="">
            <el-col :span="6" class="head">
              <el-badge is-dot class="item">
                <img src="~@/assets/logo.png" alt="">
              </el-badge>
            </el-col>
            <el-col class="name" :span="13">
              <el-col class="name-title">文件传输助手</el-col>
              <el-col class="desc">暂无内容</el-col>
            </el-col>
            <el-col :span="5" class="time">14:18</el-col>
          </el-row>
        </el-row>

        <!-- 3 -->
        <el-row class="chat-box active">
          <el-row>
            <el-col :span="6" class="head">
              <el-badge :value="100" :max="9" class="item">
                <img src="~@/assets/logo.png" alt="">
              </el-badge>  
            </el-col>
            <el-col class="name" :span="13">
              <el-col class="name-title">文件传输助手</el-col>
              <el-col class="desc">暂无内容</el-col>
            </el-col>
            <el-col :span="5" class="time">14:18</el-col>
          </el-row>
        </el-row>

        <!-- 4 -->
        <el-row class="chat-box">
          <el-row >
            <el-col :span="6" class="head">
              <img src="~@/assets/logo.png" alt="">
            </el-col>
            <el-col class="name" :span="13">
              <el-col class="name-title">文件传输助手</el-col>
              <el-col class="desc">暂无内容</el-col>
            </el-col>
            <el-col :span="5" class="time">14:18</el-col>
          </el-row>
        </el-row>

      </el-row>
      <!-- chat-box -->

    </el-col>
  </div>
</template>

<script>

  export default {
    name: 'chat',
    components: { },
    methods: {
    }
  }
</script>

<style>
#chat-list{
  height: 100%;
  width: 100%;
  text-align: center；
}
.left-box{
  background: #ECE9E8;
  height: 100%;
  position: fixed;
  top:0;
  left: 8.4%;
}
.search-box{
  padding: 15px 10px;
  /* border-bottom: 1px solid #E7E7E7; */
  border-bottom: 1px solid #E1E1E1;
}
.search-box .el-input{
  float: left;
  width: 80%;
  background: #DBD9D8;
}
.search-box .el-button{
  float: right;
  background: #DBD9D8;
}

.chat{
  background: #ECE9E8;
}
/* C7C6C6 */
.chat-box{
  width: 100%;
}
.chat-box >.el-row{
  height: 25px;
  line-height: 25px;
  padding: 5px 3px;
  padding-bottom: 0;
}
/* D8D8D9 */
.chat-box:hover{
  background: #D8D8D9;
  cursor: pointer;
}
.active,
.active:hover{
  background: #C3C4C5;
}

.chat-box .el-row .head{
  text-align: center;
}
.chat-box .el-row .head img{
  width: 40px;
  height: 40px;
  background: #fff;
}

.chat-box .el-row .name{
  font-size:12px;
  text-align:left;
}
.chat-box .el-row .name .name-title{
  height:20px;
  line-height: 20px;
  font-weight: bold;
}
.chat-box .el-row .name .desc{
  color: #999999;
  font-size:10px;
  height:20px;
  line-height: 20px;
}
.chat-box .el-row .time{
  font-size:12px;
  color:#999999;
  text-align:left;
  height:20px;
  line-height: 20px;
}
.active .el-row .time{
  color:#999999;
}
</style>

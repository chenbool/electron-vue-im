<template>
  <div id="tool-bar">
    <el-row >
        <el-col :span="20" style="-webkit-app-region: drag;" class="drag">
            &nbsp;
        </el-col>
        <el-col :span="4" class="tool-bar">
            <i class="el-icon el-icon-close" @click="ipc_send('close')"></i>
            <i class="el-icon el-icon-news" @click="_max"></i>
            <i class="el-icon el-icon-minus" @click="ipc_send('min')"></i>
        </el-col>
    </el-row>
  </div>
</template>

<script>
  const {ipcRenderer: ipc} = require('electron')
  export default {
    name: 'tool-bar',
    data () {
      return {
        max: false
      }
    },
    created () { 
    },
    components: {  },
    methods: {
      _max:function(){
        this.max ? ipc.send('unmax') : ipc.send('max')
        this.max = !this.max;
      },
      ipc_send:function(action){
        ipc.send(action)
      }
    }
  }
</script>

<style>
  /* CSS */
  #tool-bar{
    height: 30px;
    background-color: #f9fafc;
  }
  .tool-bar{
    height: 30px;
    background-color: #f9fafc;
  }
  .tool-bar .el-icon,
  .tool-bar .fa{
    float: right;
    padding: 5px;
    color: #5E5E5E;
  }

  .tool-bar .el-icon-minus:hover,
  .tool-bar .el-icon:hover,
  .tool-bar .fa:hover{
    background: #E3E3E3;
    color: #5E5E5E;
  }

  .tool-bar .el-icon-close:hover{
    background: #F45454;
    color: #ffffff;
  }
  .drag{
    /* background: #F45454; */
  } 
</style>

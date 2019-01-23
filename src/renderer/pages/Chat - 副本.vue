<template>
  <div id="chat">

    <!-- left -->
    <chat-list></chat-list>



    <!-- right -->
    <el-col :span="17" :offset="7" class="right-box">

      <!-- top -->
      <el-row class="top-nav-tool">
        <el-col :span="20" class="name">
          测试123
        </el-col>
        <el-col :span="4" class="more">
          <i class="el-icon el-icon-more-outline"></i>
        </el-col>
      </el-row>

      <!-- main -->
      <el-row class="chat-main">
        
      </el-row>

      <!-- 发送框 -->
      <!-- <el-row class="chat-send-tool">
        <el-col class="tool-box">
          <el-col :span="2">
            <i class="fa fa-tag"></i>
          </el-col>
          <el-col :span="2">
            <i class="fa fa-folder-open-o"></i>
          </el-col>
          <el-col :span="2">
            <i class="el-icon el-icon-picture-outline"></i>
          </el-col>
          <el-col :span="2">
            <i class="el-icon el-icon-star-off"></i>
          </el-col>
          <el-col :span="2">
            <i class="el-icon el-icon-service"></i>
          </el-col>
        </el-col>
      </el-row> -->

      <el-row>
        <quill-editor class="quill-editor" 
          v-model="content"
          :options="editorOption"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @ready="onEditorReady($event)"
          >

          <div id="toolbar" slot="toolbar">
            <!-- Add a bold button -->
            <button class="ql-bold">Bold</button>
            <button class="ql-italic">Italic</button>
            <!-- Add font size dropdown -->
            <select class="ql-size">
              <option value="small">小</option>
              <option selected>默认</option>
              <option value="large">大</option>
              <!-- <option value="huge"></option> -->
            </select>
            <select class="ql-font">
              <option selected="selected"></option>
              <option value="serif"></option>
              <option value="monospace"></option>
            </select>

            <button class="ql-link"></button>

            <!-- Add subscript and superscript buttons -->
            <!-- 
              <button class="ql-script" value="sub"></button>
            <button class="ql-script" value="super"></button> 
            -->
            <!-- You can also add your own -->
            <!-- <button id="custom-button" @click="customButtonClick">[ Click me ]</button> -->
          </div>


        </quill-editor>
      </el-row>

    </el-col>


  </div>
</template>

<script>
  import ChatList from '@/components/chat/ChatList'
  // quillEditor require styles 
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import { quillEditor } from 'vue-quill-editor'

  export default {
    name: 'chat',
    data () {
      return {
        content: '<p>测试内容</p>',
        editorOption: {
          modules: {
            // toolbar: '#toolbar',
            toolbar: [
              [{ 'size': ['small', false, 'large'] }],
              ['bold', 'italic'],
              // [{ 'list': 'ordered'}, { 'list': 'bullet' }],
              ['link', 'image']
            ],
            history: {
              delay: 1000,
              maxStack: 50,
              userOnly: false
            },
            imageDrop: true,
            imageResize: {
              displayStyles: {
                backgroundColor: 'black',
                border: 'none',
                color: 'white'
              },
              modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
            }
          }
        }
      }
    },
    components: {
      ChatList,
      quillEditor
    },
    methods: {
      ready:function(){
      },
      onEditorBlur(editor) {
        // console.log('editor blur!', editor)
      },
      onEditorFocus(editor) {
        // console.log('editor focus!', editor)
      },
      onEditorReady(editor) {
        // console.log('editor ready!', editor)
      },
      customButtonClick() {
        alert(`You can custom the button and listen click event to do something...\n你可以定义一些自定义按钮做你想做的事，如上传图片至第三方存储再插入内容区...等等`)
      }
    }
  }
</script>

<style>
#chat{
  width: 100%;
  height: 100%;
  text-align: center;
  background: #fff;
  padding-left: 4%;
}

.top-nav-tool{
  border-bottom: 1px solid #E1E1E1;
  height: 30px;
}
.top-nav-tool .more{
  text-align: right;
  padding: 3px 10px;
  cursor: pointer;
}

.chat-main{
  height: 65vh;
  background: #fff;
  overflow-y:scroll; 
  /* overflow-x:scroll; */
}

.chat-send-tool{
  height: 25vh;
  /* background: #ccc; */
}
.chat-send-tool .tool-box{
  height: 30px;
  padding: 5px;
  color: #5E5E5E;
  background: #fff;
  border-top: 1px solid #E1E1E1;
  border-bottom: 1px solid #E1E1E1;
}
</style>

<template>
  <v-container fluid ma-0 pa-0>

    <div id="body">

        <div>
          <textarea v-model="title" id="Header_edit_textarea" @input="save_title()"></textarea>
        </div>


        <hr class="divider">

        <div class="contents">
          <table class = "content_table">
              <th class="content_table_title">이름</th>
              <th class="content_table_title">링크</th>
              <th class="content_table_title">완료</th>

              <tr>
                <td class="content_table_name"> <textarea v-model="input_name" id="name_textarea"></textarea> </td>
                <td class="content_table_link"> <textarea v-model="input_link" id="link_textarea"></textarea> </td>
                
                <td class="content_table_button" @click="add_content()">
                  <v-icon>mdi-check</v-icon>
                </td>
              </tr>
          </table>
        </div>

        <br>

        <hr class="divider">

        <div class="contents">
            <table class = "content_table">
                <th class="content_table_title">이름</th>
                <th class="content_table_title">링크</th>
                <th class="content_table_title">삭제</th>

                <tr v-for="(content, content_index) in user_data" :key="content_index" class="content_table_line">
                    <td class="content_table_name">{{content.name}}</td>
                    <td class="content_table_link">
                        <a v-bind:href="content.link"> {{content.link}} </a>
                    </td>
                    <td class="content_table_button" @click="del_content(content_index)">
                      <v-icon>mdi-trash-can-outline</v-icon>
                    </td>
                </tr>
            </table>
        </div>

    </div>
  </v-container>
</template>

<style>
@import '../assets/styles/style.css';
</style>

<script>
  //import users from '../assets/data/users.json'
  //import system from '../assets/data/system.json'
  //import {eventBus} from "../main"

  export default {
    name: 'HelloWorld',

    data: () => ({
      user_data: [],
      title: "",
      input_name : "",
      input_link : "",
    }),
    methods: {
      save_title(){
        localStorage.setItem("title", this.title);
      },
      save_contents(){
        localStorage.setItem("user_data", JSON.stringify(this.user_data));
      },
      order_contents(){
        this.user_data.sort((a, b) => (a.name > b.name) ? 1 : -1);
        this.save_contents();
      },
      add_content(){
        this.user_data.push({"name": this.input_name, "link": this.input_link});
        this.order_contents();
      },
      del_content(content_index){
        this.user_data.splice(content_index, 1);
        this.order_contents();
      }
    },
    mounted() {
      if (localStorage.title) {
        this.title = localStorage.title;
      }
      if (localStorage.user_data) {
        this.user_data = JSON.parse(localStorage.user_data);
      }
    }
  }
</script>

<template>
  <v-container fluid ma-0 pa-0>

    <div id="body">

        <div id="header_text">{{title}}</div>

        <hr class="divider">

        <div class="contents">
            <table class = "content_table">
                <th class="content_table_title">이름</th>
                <th class="content_table_title">링크</th>

                <tr v-for="(content, content_index) in user_data" :key="content_index" class="content_table_line">
                    <td class="content_table_name">{{content.name}}</td>
                    <td class="content_table_link">
                        <a v-bind:href="content.link"> {{content.link}} </a>
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

    data () {
      return {
        user_data: [],
        title: "",
      }
     
    },

    mounted() {
      if (localStorage.title) {
        this.title = localStorage.title;
      }
      if (localStorage.user_data) {
        this.user_data = JSON.parse(localStorage.user_data);
      }
    },
    watch: {
      title(newtitle) {
        localStorage.title = newtitle;
      },
      user_data(new_user_data) {
        localStorage.user_data = JSON.stringify(new_user_data);
      }
    }
  }
</script>

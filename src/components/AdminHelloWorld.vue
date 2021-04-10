<template>
  <v-container fluid ma-0 pa-0>

    <div id="body">

        <div>
          <textarea v-model="title" id="Header_edit_textarea" @input="save_title(v-model)"></textarea>
        </div>


        <hr class="divider">

        <div class="contents">
          <table class = "content_table">
              <th class="content_table_title">이름</th>
              <th class="content_table_title">링크</th>
              <th class="content_table_title">완료</th>

              <tr>
                <td class="content_table_name"> <textarea label="Label Text" id="name_textarea"></textarea> </td>
                <td class="content_table_link"> <textarea label="Label Text" id="link_textarea"></textarea> </td>
                
                <td class="content_table_button">
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
                    <td class="content_table_button">
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
  import users from '../assets/data/users.json'
  import system from '../assets/data/system.json'

  export default {
    name: 'HelloWorld',

    data: () => ({
      user_data: users.users,
      title: system.title,
    }),
  }
</script>

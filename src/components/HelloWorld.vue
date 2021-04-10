<template>
  <v-container fluid ma-0 pa-0>
      <div app id="header">
        <img src="../assets/data/header_background.jpg" alt="Header Logo" id="header_img">
      </div>

    <br>

    <div id="body">

        <div id="header_text">글로 드리는 기도</div>

        <hr class="divider">

        <div id="contents">
            <table id = "content_table">
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
  import users from '../assets/data/users.json'
  export default {
    name: 'HelloWorld',

    data: () => ({
      user_data: users.users,
    }),
  }
</script>

<template>
  <v-container fluid ma-0 pa-0>

    <div id="body">

        <div id="header_text">{{title}}</div>
        <div id="header_text">{{title}}</div>
        <div id="header_text">{{title}}</div>
        <div id="header_text">{{title}}</div>

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
  import system from '../assets/data/system.json'

  export default {
    name: 'HelloWorld',

    data: () => ({
      user_data: users.users,
      title: system.title,
    }),
  }
</script>

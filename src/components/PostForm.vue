<template>
   <form @submit.prevent>
      <h4>Создание поста</h4>
      <my-input v-model="post.body" type="text" placeholder="Описание" v-focus />
      <my-input v-model="post.title" type="text" placeholder="Название" />
      <my-button style="align-self: flex-end; margin-top: 15px;" @click="createPost">Создать
      </my-button>
   </form>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue"
export default {
   components: {
      MyButton
   },
   data() {
      return {
         post: {
            title: '',
            body: ''
         }
      }
   },
   methods: {
      createPost() {
         this.post.id = Date.now()
         this.$emit('create', this.post);
         console.log(this.post)
         this.post = {
            title: '',
            body: ''
         }
         this.title = '';
         this.body = '';
      },
   }
}
</script>

<style scoped>
form {
   display: flex;
   flex-direction: column;
}

.post {
   padding: 15px;
   border: 2px solid teal;
   margin-top: 15px;
}
</style>
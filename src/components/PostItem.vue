<template>
   <div class="post">
      <div>
         <div><strong>Название:</strong>{{ post.title }}</div>
         <div><strong>Описание:</strong>{{ post.body }}</div>
         <div><strong>Id элемента:</strong>{{ post.id }}</div>
         
      </div>
      <div class="post__btns">
         <my-button  style="cursor: pointer;" @click ="$router.push(`/posts/${post.id}`)">Открыть</my-button>
         <my-button style="cursor: pointer;" @click ="$emit('remove', post)">Удалить</my-button>
      </div>
   </div>
</template> 

<script scoped>
 export default {
   props: {
      post: {
         type: Object,
         required: true,
      }
   }
}

</script>

<style scoped>
.post {
   padding: 15px;
   border: 2px solid teal;
   margin-top: 15px;
   display: flex;
   align-items: center;
   justify-content: space-between;
}
.post__btns{
   display: flex;

}
</style>
<template>
   <div class="navbar">
      <div style="cursor: pointer;" @click="$router.push('/')">Vue 3</div>
      <div class="navbar__btns">
         <my-button @click = "$router.push('/posts')">Посты</my-button>
         <my-button style="margin-left: 20px;" @click = "$router.push('/about')">О сайте</my-button>
         <my-button style="margin-left: 20px;" @click = "$router.push('/store')">Store</my-button>
         <my-button style="margin-left: 20px;" @click = "$router.push('/composition')">Composition</my-button>
      </div>
   </div>
</template>
<script>
export default {

}

</script>


<style scoped>
.navbar {
   display: flex;
   align-items: center;
   height: 50px;
   background-color: lightgray;
   box-shadow: 2px 2px 4px gray;
   padding: 0px 15px;
}
.navbar__btns{
   margin-left: auto;
   border: none;
   border-radius: 10px;
}
</style>
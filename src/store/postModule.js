

export const postModule = {
   state: () =>({
      posts: [],
         isPostsLoading: false,
         selectedSort: '',
         searchQuery: '',
         page: 1,
         limit: 10,

         totalPages: 0,
         sortOptions: [
            { value: 'title', name: 'По называнию' },
            { value: 'body', name: 'По описанию' },
         ]
   }),
   getters:{

   },
   mutations:{
      setPosts(state, posts){
         state.posts = posts
      }
   },
   actions:{

   }
}
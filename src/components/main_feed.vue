<template>
    <div class="container h-[calc(100vh-80px)] w-[780px] overflow-y-auto no-scrollbar overscroll-none">
      <div class="flex flex-col w-[740px]">
          <!-- Stories/Reels -->
        <stories></stories>

          <!-- What's on your mind? -->
        <new_post></new_post>

          <!-- Post no.1 -->
        <feed></feed>
      </div>
    </div>
</template>

<script setup>
import stories from "./MainFeed/stories.vue";
import new_post from "./MainFeed/new_post.vue";
import feed from "./MainFeed/feed.vue";
</script>

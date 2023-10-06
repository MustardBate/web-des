<template>
  <div class="flex bg-background h-full">
    <left_bar></left_bar>

    <div class="flex flex-col h-full w-5/6">
      <top_bar></top_bar>

      <div class="flex flex-row w-[1058px] h-full ml-[332px] mt-[90px]">
        <main_feed></main_feed>
        <right_menu></right_menu>
      </div>

    </div>

  </div>
</template>

<script setup>
import left_bar from "./components/left_bar.vue";
import main_feed from "./components/main_feed.vue";
import top_bar from "./components/top_bar.vue";
import right_menu from "./components/right_menu.vue";
</script>

<style lang="scss" scoped>

</style>
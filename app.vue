<template>
  <div>
    <div :class="{'box-active': $isActiveBox1}" class="box">Box 1</div>
    <div :class="{'box-active': $isActiveBox2}" class="box">Box 2</div>
  </div>
</template>

<script lang="ts">
// import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  // ...
})
</script>

<style>
.box {
  width: 200px;
  height: 200px;
  background-color: lightgray;
  margin-bottom: 20px;
}

.box-active {
  background-color: cyan;
}
</style>
<template>
  <div>
    <p>{{message}}</p>
    <ul>
      <li
        v-for="item in items"
        v-bind:key="item.id">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script src="./About.js">
</script>

<style>
</style>

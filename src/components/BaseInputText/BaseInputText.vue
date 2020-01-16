<template>
  <input
    type="text"
    class="input"
    :value="value"
    v-on="listeners"
  >
</template>

<script src="./BaseInputText.js"></script>

<!-- <style lang="scss" scoped>
@import '../variables.scss';

.input {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid $vue-blue;
}
</style>
 -->
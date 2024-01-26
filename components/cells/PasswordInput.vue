<template>
  <textarea class="input-area" placeholder="digite sua senha"></textarea>
</template>

<script lang="ts">
</script>

<style scoped lang="scss">
textarea.input-area {
  background-color: rgb(233, 233, 233);
  color: rgb(44, 44, 44);
  width: 14rem;
  height: 1rem;
  resize: none;
  line-break: none;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  padding: 10px 1rem;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;

  &::placeholder {
    font-family: Arial, Helvetica, sans-serif;
  }
}
</style>
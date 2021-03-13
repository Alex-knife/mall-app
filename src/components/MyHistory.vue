<template>
  <div class="history">
      <h3>History Record:</h3>
      <div
        class="history-item"
        v-for="item in searchList"
        :key="item.time"
        @click="search(item.value)"
      >
      {{ item.value }}
      </div>
  </div>
</template>

<script>
export default {
  props: {
    searchList: {
      default() {
        return [];
      },
    },
  },
  methods: {
    search(value) {
      this.$emit('search', value);
    },
  },
};
</script>

<style scoped>
.history-item {
    padding: 15px;
    border-radius: 10px;
    background-color: #eee;
    margin-left: 10px;
    margin-bottom: 10px;
    display: inline-block;
}

</style>

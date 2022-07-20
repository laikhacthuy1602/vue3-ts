<template>
  Hello {{ name }} welcome to my app.
  <hr />
  <counter />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Counter from "./Counter.vue";
export default defineComponent({
  components: {
    Counter,
  },
  setup() {
    const name = ref<string>("Thuy");
    return {
      name,
    };
  },
});
</script>
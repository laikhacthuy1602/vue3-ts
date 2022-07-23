<template>
  Hello {{ name }} welcome to my app.
  <hr />
  <counter />
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import Counter from "./Counter.vue";
import { userStore } from "../store/user";

export default defineComponent({
  components: {
    Counter,
  },
  setup() {
    const name = ref<string>("Thuy");
    const test = userStore();
    onMounted(() => {
      test.setInfo(true);
      console.log(test.info);
    });
    return {
      name,
      test,
    };
  },
});
</script>
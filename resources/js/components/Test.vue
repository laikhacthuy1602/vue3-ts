<template></template>
<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { userStore } from "../store/user";

export default defineComponent({
  name: "Test",
  components: {},
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
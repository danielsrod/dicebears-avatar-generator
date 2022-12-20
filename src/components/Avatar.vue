<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/big-ears-neutral'
// more styles at https://avatars.dicebear.com/styles

const svgAvatar = ref('')
const nickname = ref('')

const generateAvatar = (nickname: string) => {
  const avatar = createAvatar(style, {
    seed: nickname,
  });
  svgAvatar.value = avatar
}

onMounted(() => {

  const avatar = createAvatar(style);
  svgAvatar.value = avatar
})

</script>

<template>
  <div class="avatar" v-html="svgAvatar"></div>
  <span class="nickname_label">your nickname</span><input type="text" v-model="nickname"><br>
  <button @click="generateAvatar(nickname)">generate avatar</button>
</template>

<style scoped>
.avatar {
  width: 500px;
  height: 500px;
}

.nickname_label {
  margin-right: 20px;
}
</style>

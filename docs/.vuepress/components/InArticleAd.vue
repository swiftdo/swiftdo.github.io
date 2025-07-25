<template>
  <div class="in-article-ad">
    <ins
      class="adsbygoogle"
      style="display:block; text-align:center;"
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client="ca-pub-4465026491979447"
      data-ad-slot="6489274691"></ins>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  try {
    ;(window as any).adsbygoogle = (window as any).adsbygoogle || []
    ;(window as any).adsbygoogle.push({})
  } catch (e) {
    console.error(e)
  }
})
</script>

<style scoped>
.in-article-ad {
  margin: 2rem 0;
}
</style>
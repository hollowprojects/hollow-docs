<script setup lang="ts">
import { useData } from 'vitepress'

const { theme } = useData()
const hollow = theme.value.hollow as { version: string; prerelease: boolean; publicDownloads: boolean }
</script>

<template>
  <div v-if="!hollow.publicDownloads" class="hollow-availability">
    <strong>Hollow is in beta.</strong>
    It isn't publicly available yet and will be released once it's ready. These pages describe
    beta {{ hollow.version }}.
  </div>
  <div v-else-if="hollow.prerelease" class="hollow-availability">
    <strong>Beta.</strong> These pages describe Hollow {{ hollow.version }}.
  </div>
</template>

<style scoped>
.hollow-availability {
  margin: 0 0 24px;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-brand-soft);
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-text-1);
  font-size: 14px;
  line-height: 1.6;
}
</style>

<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <q-btn
      color="primary"
      icon="language"
      :to="$i18n.locale !== 'en'? switchLocalePath('en'):switchLocalePath('fa') "
      :label="lang == 'fa' ? 'English' : 'فارسی'"
    />
  </div>
  <h1>{{ $t('hello') }}</h1>
  <NuxtLink :to="localePath('page1', lang)">Homepage in {{$t('hello')}}</NuxtLink>
</template>

<script setup>
const lang = ref('')
const route = useRoute()
lang.value = route.fullPath == '/fa' ? 'fa' : 'en'
console.log(lang.value)
</script>

<style scoped></style>

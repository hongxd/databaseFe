<template>
  <PageWrapper :title="title" content="请输入公告标题和公告内容">
    <router-link to="/feat/breadcrumb/flatDetail"> 进入平级详情页 </router-link>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { useRoute } from 'vue-router';
  import { PageWrapper } from '/@/components/Page';

  const route = useRoute();

  const title = route.meta.title;
</script>

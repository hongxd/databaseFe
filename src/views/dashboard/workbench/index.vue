<template>
  <PageWrapper>
    <template #headerContent> <WorkbenchHeader :announcement="announcement" /> </template>
    <div class="lg:flex">
      <div class="lg:w-7/10 w-full !mr-4 enter-y">
        <!-- <ProjectCard :loading="loading" class="enter-y" /> -->
        <!-- <DynamicInfo :loading="loading" class="!my-4 enter-y" /> -->
        <DynamicInfo :loading="loading" class="enter-y" :announcement="announcement" />
      </div>
      <div class="lg:w-3/10 w-full enter-y">
        <QuickNav :loading="loading" class="enter-y" />

        <Card class="!my-4 enter-y" :loading="loading">
          <img class="xl:h-50 h-30 mx-auto" src="../../../assets/svg/illustration.svg" />
        </Card>
      </div>
    </div>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { Card } from 'ant-design-vue';
  import { PageWrapper } from '/@/components/Page';
  import WorkbenchHeader from './components/WorkbenchHeader.vue';
  import QuickNav from './components/QuickNav.vue';
  import DynamicInfo from './components/DynamicInfo.vue';
  import { getAnnouncementList } from '/@/api/sys/announcement';
  import { BasicFetchResult } from '/@/api/model/baseModel';
  import { AnnounceMent } from '/@/api/sys/model/announcementModel';

  const loading = ref(true);

  const announcement = ref<BasicFetchResult<AnnounceMent>>({ list: [], total: 0 });
  getAnnouncementList().then((res) => {
    announcement.value = res;
    loading.value = false;
  });
</script>

<template>
  <div class="lg:flex">
    <Avatar :src="userinfo.avatar || headerImg" :size="72" class="!mx-auto !block" />
    <div class="md:ml-6 flex flex-col justify-center md:mt-0 mt-2">
      <h1 class="md:text-lg text-md">{{ judgeTime }}, {{ userinfo.username }}, 开始您的工作吧！</h1>
      <span class="text-secondary"> 你的每一个好想法，都让人惊喜 </span>
    </div>
    <div class="flex flex-1 justify-end md:mt-0 mt-4">
      <div class="flex flex-col justify-center text-right">
        <span class="text-secondary"> 公告 </span>
        <span class="text-2xl"> {{ announcement.total }} </span>
      </div>
    </div>
    <Repair v-if="!isAdmin" />
  </div>
</template>
<script lang="ts" setup>
  import { computed, toRefs } from 'vue';
  import { Avatar } from 'ant-design-vue';
  import { useUserStore } from '/@/store/modules/user';
  import headerImg from '/@/assets/images/header.jpg';
  import judgeTime from '/@/utils/judgeTime';
  import { RoleEnum } from '/@/enums/roleEnum';
  import { BasicFetchResult } from '/@/api/model/baseModel';
  import { AnnounceMent } from '/@/api/sys/model/announcementModel';
  import Repair from './Repair.vue';

  const props = defineProps<{
    announcement: BasicFetchResult<AnnounceMent>;
  }>();
  const userStore = useUserStore();
  const userinfo = computed(() => userStore.getUserInfo);
  const isAdmin = computed(() =>
    userinfo.value.roles.some((item) => item.value === RoleEnum.ADMIN),
  );
  const { announcement } = toRefs(props);
</script>

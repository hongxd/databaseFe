<template>
  <Card title="快捷导航">
    <CardGrid v-for="item in list" :key="item.title" @click="routeJump(item.route)">
      <span class="flex flex-col items-center">
        <Icon :icon="item.icon" :color="item.color" size="20" />
        <span class="text-md mt-2 truncate">{{ item.title }}</span>
      </span>
    </CardGrid>
  </Card>
</template>
<script lang="ts" setup>
  import { Card, CardGrid } from 'ant-design-vue';
  import { computed, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { navItems, navItemsManager, NavItem } from './data';
  import { Icon } from '/@/components/Icon';
  import { RoleEnum } from '/@/enums/roleEnum';
  import { useUserStore } from '/@/store/modules/user';
  const router = useRouter();
  const routeJump = (name: string) => {
    router.push({ name });
  };
  const userStore = useUserStore();
  const userinfo = computed(() => userStore.getUserInfo);
  const isAdmin = computed(() =>
    userinfo.value.roles.some((item) => item.value === RoleEnum.ADMIN),
  );
  const list = ref<NavItem[]>([]);
  if (isAdmin.value) {
    list.value = navItems;
  } else {
    list.value = navItemsManager;
  }
</script>

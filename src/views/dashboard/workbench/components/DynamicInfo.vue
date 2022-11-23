<template>
  <Card title="最新公告" v-bind="$attrs">
    <template #extra>
      <a-button type="link" size="small" @click="manage">管理</a-button>
    </template>
    <List item-layout="horizontal" :data-source="noticeList">
      <template #renderItem="{ item }">
        <ListItem @click="readAnnouncement(item.id)" class="ant-card-hoverable !pl-5">
          <ListItemMeta>
            <template #description>
              {{ item.date }}
            </template>
            <!-- eslint-disable-next-line -->
            <template #title> {{ item.username }} <span v-html="item.desc"> </span> </template>
          </ListItemMeta>
        </ListItem>
      </template>
    </List>
  </Card>
</template>
<script lang="ts" setup>
  import { Card, List } from 'ant-design-vue';
  import { computed } from 'vue';
  import { useRouter } from 'vue-router';
  import { DynamicInfoItem } from './data';
  import { BasicFetchResult } from '/@/api/model/baseModel';
  import { AnnounceMent } from '/@/api/sys/model/announcementModel';
  import { formatTime } from '/@/utils/formatTime';

  const props = defineProps<{
    announcement: BasicFetchResult<AnnounceMent>;
  }>();
  const ListItem = List.Item;
  const ListItemMeta = List.Item.Meta;
  const router = useRouter();

  const manage = () => {
    router.push({ name: 'Announcement' });
  };
  const noticeList = computed<DynamicInfoItem[]>(() => {
    return props.announcement.list.map((item) => ({
      id: item.id,
      date: formatTime(item.date),
      desc: item.title,
      name: item.noticePerson,
    }));
  });
  const readAnnouncement = (id: string) => {
    console.log(id);
  };
</script>

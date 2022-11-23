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
            <template #title> {{ item.name }}: &nbsp; <strong v-html="item.desc"> </strong> </template>
          </ListItemMeta>
        </ListItem>
      </template>
    </List>
  </Card>
  <BasicModal @register="register" v-bind="$attrs" :title="title" @ok="close">
    <article v-html="content"></article>
  </BasicModal>
</template>
<script lang="ts" setup>
  import { Card, List } from 'ant-design-vue';
  import { computed, onMounted, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { DynamicInfoItem } from './data';
  import { BasicFetchResult } from '/@/api/model/baseModel';
  import { AnnounceMent } from '/@/api/sys/model/announcementModel';
  import { formatTime } from '/@/utils/formatTime';
  import { BasicModal, useModal } from '/@/components/Modal';
  import { getAnnouncementContent } from '/@/api/sys/announcement';
  const [register, { openModal, setModalProps }] = useModal();

  const props = defineProps<{
    announcement: BasicFetchResult<AnnounceMent>;
  }>();
  const close = () => {
    setModalProps({ visible: false });
  };
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
  onMounted(() => {
    setModalProps({
      showCancelBtn: false,
    });
  });
  const content = ref('');
  const title = ref('');
  const readAnnouncement = async (id: string) => {
    const res = await getAnnouncementContent(id);
    content.value = res.content;
    title.value = res.title;
    openModal();
  };
</script>

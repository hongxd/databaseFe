<template>
  <PageWrapper :title="title" content="请输入公告标题和公告内容">
    <CollapseContainer title="请按要求填写下列表单">
      <BasicForm @register="registerForm" @submit="handleSubmit" />
    </CollapseContainer>
    <BasicModal @register="register" v-bind="$attrs" title="提示" :minHeight="0" @ok="exist">
      你的操作将不会被保存，是否确认退出？
    </BasicModal>
    <BasicModal @register="register" v-bind="$attrs" title="提示" :minHeight="0" @ok="submit">
      公告一旦发出就无法删除，请确保公告内容无误
    </BasicModal>
  </PageWrapper>
</template>
<script lang="ts" setup>
  // 公告无法修改
  import { useRoute, useRouter } from 'vue-router';
  import { PageWrapper } from '/@/components/Page';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema } from './role.data';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { CollapseContainer } from '/@/components/Container';
  import { BasicModal, useModal } from '/@/components/Modal';
  import { AddAnnouncement } from '/@/api/sys/announcement';
  import { AnnounceMentForm } from '/@/api/sys/model/announcementModel';

  const route = useRoute();
  const title = route.meta.title;
  let formValue: AnnounceMentForm;
  const router = useRouter();
  const { createMessage } = useMessage();
  const [register, { openModal, setModalProps }] = useModal();

  const [registerForm] = useForm({
    labelWidth: 90,
    baseColProps: { span: 24 },
    actionColOptions: { span: 24 },
    schemas: formSchema,
    showActionButtonGroup: true,
    submitButtonOptions: {
      text: '提交',
    },
    resetButtonOptions: {
      text: '返回',
      color: 'error',
      onClick(_) {
        openModal();
        return;
      },
    },
  });

  const exist = () => {
    router.push({ name: 'Announcement' });
  };

  const handleSubmit = (value: AnnounceMentForm) => {
    openModal();
    formValue = value;
  };
  const submit = async () => {
    const res = await AddAnnouncement(formValue);
    setModalProps({ visible: false });
    createMessage.success(res);
    exist();
  };
</script>

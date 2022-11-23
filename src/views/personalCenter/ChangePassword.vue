<template>
  <CollapseContainer title="修改密码" :canExpan="false">
    <BasicForm @register="registerForm" @submit="submit" />
  </CollapseContainer>
</template>
<script lang="ts" setup>
  import { CollapseContainer } from '/@/components/Container/index';

  import { formList } from './data';
  import { BasicForm, useForm } from '/@/components/Form';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { changePassword } from '/@/api/sys/account';
  import { PasswordFromModel } from '/@/api/sys/model/accountModel';
  import { useUserStore } from '/@/store/modules/user';

  const { createMessage } = useMessage();
  const userStore = useUserStore();
  const submit = async (form: PasswordFromModel) => {
    const res = await changePassword(form);
    createMessage.success(res);
    userStore.logout(true);
  };
  const [registerForm] = useForm({
    labelWidth: 90,
    baseColProps: { span: 24 },
    actionColOptions: { span: 24 },
    schemas: formList,
    showActionButtonGroup: true,
    submitButtonOptions: {
      text: '确定',
    },
    showResetButton: false,
  });
</script>
<style lang="less" scoped>
  .extra {
    float: right;
    margin-top: 10px;
    margin-right: 30px;
    font-weight: normal;
    color: #1890ff;
    cursor: pointer;
  }
</style>

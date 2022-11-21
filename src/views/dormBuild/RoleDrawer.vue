<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    showFooter
    :title="getTitle"
    width="500px"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm" />
  </BasicDrawer>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema } from './role.data';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { AddDorm } from '/@/api/sys/dorm';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { getManagerList } from '/@/api/sys/manager';
  import { ManagerModel } from '/@/api/sys/model/managerModel';

  export default defineComponent({
    name: 'DormBDrawer',
    components: { BasicDrawer, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);

      const { createMessage } = useMessage();
      const [registerForm, { resetFields, setFieldsValue, validate, updateSchema }] = useForm({
        labelWidth: 90,
        baseColProps: { span: 24 },
        schemas: formSchema,
        showActionButtonGroup: false,
      });
      let id: string | null = null;
      let managerList: ManagerModel[];

      const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
        resetFields();
        setDrawerProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;
        if (!managerList) {
          managerList = (await getManagerList()).list;
          const options = managerList.map((item) => ({ label: item.userName, value: item.id }));
          updateSchema({
            field: 'dormmanager',
            componentProps: {
              options,
            },
          });
        }

        id = null;
        if (unref(isUpdate)) {
          id = data.record.id;
          setFieldsValue({
            ...data.record,
          });
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增宿舍楼' : '编辑宿舍楼'));

      async function handleSubmit() {
        try {
          const values = await validate();
          setDrawerProps({ confirmLoading: true });
          const success = await AddDorm({ ...values, id });
          createMessage.success(success);
          closeDrawer();
          emit('success');
        } finally {
          setDrawerProps({ confirmLoading: false });
        }
      }

      return {
        registerDrawer,
        registerForm,
        getTitle,
        handleSubmit,
      };
    },
  });
</script>

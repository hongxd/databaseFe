<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    showFooter
    :title="getTitle"
    width="500px"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm" @field-value-change="valueChange" />
  </BasicDrawer>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { formSchema } from './role.data';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { getDormList } from '/@/api/sys/dorm';
  import { AddStudent } from '/@/api/sys/student';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { getDormitoryList } from '/@/api/sys/dormitory';

  export default defineComponent({
    name: 'StudentDrawer',
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
        autoSubmitOnEnter: true,
      });
      let id: string | null = null;

      const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
        resetFields();
        setDrawerProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        id = null;
        if (unref(isUpdate)) {
          id = data.record.id;
          valueChange('sex', data.record.sex, true);
          valueChange('dormBuildId', data.record.dormBuildId, true);
          setFieldsValue({
            ...data.record,
          });
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增学生' : '编辑学生'));

      async function handleSubmit() {
        try {
          const values = await validate();
          setDrawerProps({ confirmLoading: true });
          const success = await AddStudent({ ...values, id });
          createMessage.success(success);
          closeDrawer();
          emit('success');
        } finally {
          setDrawerProps({ confirmLoading: false });
        }
      }
      const valueChange = async (key: string, value: string, first: boolean) => {
        switch (key) {
          case 'sex': {
            const { list } = await getDormList({ sex: value });
            updateSchema({
              field: 'dormBuildId',
              componentProps: {
                options: list.map((item) => ({ label: item.name ?? '', value: item.id })),
              },
            });
            if (!first) {
              // 不是第一次进入就清空下面表单
              setFieldsValue({ dormBuildId: '', dormitoryId: '' });
            }
            break;
          }
          case 'dormBuildId': {
            const { list } = await getDormitoryList({ dormBuildId: value });
            updateSchema({
              field: 'dormitoryId',
              componentProps: {
                options: list.map((item) => ({ label: item.name ?? '', value: item.id })),
              },
            });
            if (!first) {
              // 不是第一次进入就清空下面表单
              setFieldsValue({ dormitoryId: '' });
            }
            break;
          }
          default:
            break;
        }
      };

      return {
        registerDrawer,
        registerForm,
        getTitle,
        valueChange,
        handleSubmit,
      };
    },
  });
</script>

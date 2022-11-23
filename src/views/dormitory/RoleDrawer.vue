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
  import { useMessage } from '/@/hooks/web/useMessage';
  import { getDormList } from '/@/api/sys/dorm';
  import { AddDormitory } from '/@/api/sys/dormitory';
  import { DormBuild } from '/@/api/sys/model/dormModel';

  export default defineComponent({
    name: 'DormitoryDrawer',
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
      let list: DormBuild[];

      const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
        resetFields();
        setDrawerProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        id = null;
        if (unref(isUpdate)) {
          id = data.record.id;
          setFieldsValue({
            ...data.record,
          });
        }
        if (!list) {
          list = (await getDormList()).list;
          const options = list.map((item) => ({ label: item.name, value: item.id }));
          updateSchema({
            field: 'dormBuildId',
            componentProps: {
              options,
            },
          });
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增寝室' : '编辑寝室'));

      async function handleSubmit() {
        try {
          const values = await validate();
          setDrawerProps({ confirmLoading: true });
          const success = await AddDormitory({ ...values, id });
          createMessage.success(success);
          closeDrawer();
          emit('success', success);
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

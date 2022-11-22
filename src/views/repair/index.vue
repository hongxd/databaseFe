<template>
  <div>
    <BasicTable @register="registerTable" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable } from '/@/components/Table';
  import { useDrawer } from '/@/components/Drawer';

  import { columns, searchFormSchema } from './role.data';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { deleteRepairList, getRepairList } from '/@/api/sys/repair';

  export default defineComponent({
    name: 'Repair',
    components: { BasicTable },
    setup() {
      const { createMessage } = useMessage();
      const [registerDrawer, { openDrawer }] = useDrawer();
      const [registerTable, { reload, getSelectRowKeys }] = useTable({
        title: '报修列表',
        api: getRepairList,

        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: true,
        rowKey: 'id',
        rowSelection: { type: 'checkbox' },
      });

      function handleCreate() {
        openDrawer(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        openDrawer(true, {
          record,
          isUpdate: true,
        });
      }

      async function handleDelete(ids: string[]) {
        if (ids.length > 0) {
          const successInfo = await deleteRepairList({ ids });
          createMessage.success(successInfo);
          reload();
        }
      }

      function handleSuccess() {
        reload();
      }

      return {
        registerTable,
        registerDrawer,
        handleCreate,
        handleEdit,
        getSelectRowKeys,
        handleDelete,
        handleSuccess,
      };
    },
  });
</script>

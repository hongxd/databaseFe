<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <router-link to="/announcement/add">
          <a-button type="primary">新增 </a-button>
        </router-link>
        <a-button type="danger" @click="() => handleDelete(getSelectRowKeys())">
          删除所选内容
        </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                onClick: handleEdit.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, [record.id]),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';

  import { columns, searchFormSchema } from './role.data';
  import { getAnnouncementList, deleteAnnouncement } from '/@/api/sys/announcement';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { PageWrapper } from '/@/components/Page';

  export default defineComponent({
    name: 'Announcement',
    components: { BasicTable, TableAction },
    setup() {
      const { createMessage } = useMessage();
      const [registerTable, { reload, getSelectRowKeys }] = useTable({
        title: '公告列表',
        api: getAnnouncementList,

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
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
          // slots: { customRender: 'action' },
          fixed: undefined,
        },
      });

      function handleEdit(record: Recordable) {
        record;
      }

      async function handleDelete(ids: string[]) {
        if (ids.length > 0) {
          const successInfo = await deleteAnnouncement({ ids });
          createMessage.success(successInfo);
          reload();
        }
      }

      function handleSuccess() {
        reload();
      }

      return {
        registerTable,
        handleEdit,
        getSelectRowKeys,
        handleDelete,
        handleSuccess,
        PageWrapper,
      };
    },
  });
</script>

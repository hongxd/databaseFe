import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { mapGender } from '/@/utils/mapGender';
import { sexOptions } from '/@/utils/sexOptions';

export const columns: BasicColumn[] = [
  {
    title: '学号',
    dataIndex: 'stuNum',
    width: 200,
  },
  {
    title: '姓名',
    dataIndex: 'name',
    width: 180,
  },
  // {
  //   title: '状态',
  //   dataIndex: 'status',
  //   width: 120,
  //   customRender: ({ record }) => {
  //     if (!Reflect.has(record, 'pendingStatus')) {
  //       record.pendingStatus = false;
  //     }
  //     return h(Switch, {
  //       checked: record.status === '1',
  //       checkedChildren: '已启用',
  //       unCheckedChildren: '已禁用',
  //       loading: record.pendingStatus,
  //       onChange(checked: boolean) {
  //         record.pendingStatus = true;
  //         const newStatus = checked ? '1' : '0';
  //         const { createMessage } = useMessage();
  //         setRoleStatus(record.id, newStatus)
  //           .then(() => {
  //             record.status = newStatus;
  //             createMessage.success(`已成功修改角色状态`);
  //           })
  //           .catch(() => {
  //             createMessage.error('修改角色状态失败');
  //           })
  //           .finally(() => {
  //             record.pendingStatus = false;
  //           });
  //       },
  //     });
  //   },
  // },
  {
    title: '电话',
    dataIndex: 'tel',
    width: 180,
  },
  {
    title: '性别',
    dataIndex: 'sex',
    customRender(opt) {
      return mapGender(opt.value);
    },
    width: 80,
  },
  {
    title: '所属楼宇',
    dataIndex: 'dormName',
    width: 180,
  },
  {
    title: '所属寝室',
    dataIndex: 'dormitoryName',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'stuNum',
    label: '学号',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'name',
    label: '姓名',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'sex',
    label: '性别',
    component: 'Select',
    colProps: { span: 8 },
    componentProps: sexOptions,
  },
  {
    field: 'dormName',
    label: '所属楼宇',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'dormitoryName',
    label: '所属寝室',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'tel',
    label: '电话',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    label: '学号',
    field: 'stuNum',
    required: true,
    component: 'Input',
  },
  {
    field: 'name',
    label: '姓名',
    required: true,
    component: 'Input',
  },
  {
    field: 'sex',
    label: '性别',
    required: true,
    component: 'Select',
    componentProps: sexOptions,
  },
  {
    field: 'tel',
    label: '电话',
    required: true,
    component: 'Input',
  },
  {
    field: 'dormBuildId',
    label: '所属楼宇',
    required: true,
    component: 'Select',
  },
  {
    field: 'dormitoryId',
    label: '所属寝室',
    required: true,
    component: 'Select',
  },
];

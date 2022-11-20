import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '名称',
    dataIndex: 'name',
    width: 180,
  },
  {
    title: '详细信息',
    dataIndex: 'detail',
    width: 250,
  },
  {
    title: '管理员',
    dataIndex: 'managerName',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'detail',
    label: '详细信息',
    component: 'Input',
    colProps: { span: 10 },
  },
  // {
  //   field: 'managerName',
  //   label: '管理员',
  //   component: 'Input',
  //   colProps: { span: 8 },
  // },
];

export const formSchema: FormSchema[] = [
  {
    label: '名称',
    field: 'name',
    required: true,
    component: 'Input',
  },
  {
    field: 'managerName',
    label: '管理员',
    component: 'Select',
  },
  {
    field: 'detail',
    label: '详细信息',
    component: 'InputTextArea',
    componentProps: {
      rows: 10,
    },
  },
];

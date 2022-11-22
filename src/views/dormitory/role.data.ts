import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '名称',
    dataIndex: 'name',
    width: 180,
  },
  {
    title: '所属楼宇',
    dataIndex: 'dormBuildName',
    width: 250,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'dormBuildId',
    label: '所属楼宇',
    component: 'Select',
    colProps: { span: 8 },
  },
  {
    field: 'name',
    label: '名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    label: '名称',
    field: 'name',
    required: true,
    component: 'Input',
  },
  {
    label: '所属楼宇',
    field: 'dormBuildId',
    required: true,
    component: 'Select',
  },
];

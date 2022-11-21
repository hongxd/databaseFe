import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '日期',
    dataIndex: 'date',
    width: 180,
  },
  {
    title: '公告标题',
    dataIndex: 'title',
    width: 230,
  },
  {
    title: '发布人',
    dataIndex: 'noticePerson',
    width: 120,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'date',
    label: '日期',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'noticePerson',
    label: '发布人',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    label: '日期',
    field: 'date',
    required: true,
    component: 'Input',
  },
  {
    field: 'noticePerson',
    label: '发布人',
    required: true,
    component: 'Input',
  },
  {
    field: 'content',
    label: '公告内容',
    required: true,
    component: 'Input',
  },
];

import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { mapGender } from '/@/utils/mapGender';
import { sexOptions } from '/@/utils/sexOptions';

export const columns: BasicColumn[] = [
  {
    title: '用户名',
    dataIndex: 'userName',
    width: 200,
  },
  {
    title: '姓名',
    dataIndex: 'name',
    width: 180,
  },
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
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'userName',
    label: '用户名',
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
    field: 'tel',
    label: '电话',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    label: '用户名',
    field: 'userName',
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
];

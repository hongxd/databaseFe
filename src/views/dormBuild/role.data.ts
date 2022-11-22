import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { mapGender } from '/@/utils/mapGender';
import { sexOptions } from '/@/utils/sexOptions';

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
  {
    title: '性质',
    dataIndex: 'sex',
    width: 160,
    customRender(opt) {
      return mapGender(opt.value) + '生宿舍';
    },
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
    field: 'managerName',
    label: '管理员',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'sex',
    label: '性质',
    component: 'Select',
    colProps: { span: 8 },
    componentProps: {
      options: sexOptions.options.map((item) => ({
        label: item.label + '生宿舍楼',
        value: item.value,
      })),
    },
  },
  {
    field: 'detail',
    label: '详细信息',
    component: 'Input',
    colProps: { span: 10 },
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
    field: 'dormmanager',
    label: '管理员',
    component: 'Select',
  },
  {
    field: 'sex',
    label: '性质',
    required: true,
    component: 'Select',
    componentProps: {
      options: sexOptions.options.map((item) => ({
        label: item.label + '生宿舍楼',
        value: item.value,
      })),
    },
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

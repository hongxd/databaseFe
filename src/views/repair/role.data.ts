import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { mapStatus } from '/@/utils/mapStatus';
import { statusOptions } from '/@/utils/statusOptions';

export const columns: BasicColumn[] = [
  {
    title: '维修物品',
    dataIndex: 'thing',
    width: 180,
  },
  {
    title: '详细情况',
    dataIndex: 'detail',
    width: 180,
  },
  {
    title: '维修状态',
    dataIndex: 'status',
    customRender(opt) {
      return mapStatus(opt.value);
    },
    width: 180,
  },
  {
    title: '维修寝室',
    dataIndex: 'dormitoryName',
    width: 180,
  },
  {
    title: '上报时间',
    dataIndex: 'reportTime',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'thing',
    label: '维修物品',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'detail',
    label: '详细情况',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'status',
    label: '维修状态',
    component: 'Select',
    colProps: { span: 8 },
    componentProps: statusOptions,
  },
  {
    field: 'dormitoryName',
    label: '维修寝室',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'reportTime',
    label: '上报时间',
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
    label: '维修状态',
    field: 'status',
    required: true,
    component: 'Select',
  },
  {
    label: '维修物品',
    field: 'thing',
    required: true,
    component: 'Input',
  },
];

import { h } from 'vue';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { Tinymce } from '/@/components/Tinymce/index';
import { formatTime } from '/@/utils/formatTime';

export const columns: BasicColumn[] = [
  {
    title: '公告标题',
    dataIndex: 'title',
    width: 230,
  },
  {
    title: '日期',
    dataIndex: 'date',
    width: 180,
    sorter: true,
    customRender(opt) {
      return formatTime(opt.value);
    },
  },
  {
    title: '发布人',
    dataIndex: 'noticePerson',
    width: 120,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'title',
    label: '公告标题',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'noticePerson',
    label: '发布人',
    component: 'Input',
    colProps: { span: 8 },
  },
  // {
  //   field: 'date',
  //   label: '日期',
  //   component: 'RangePicker',
  //   colProps: { span: 8 },
  // },
];

export const formSchema: FormSchema[] = [
  {
    label: '公告标题',
    field: 'title',
    required: true,
    component: 'Input',
  },
  {
    field: 'content',
    label: '公告内容',
    required: true,
    component: 'Input',
    defaultValue: '',
    rules: [{ required: true }],
    render: ({ model, field }) => {
      return h(Tinymce, {
        value: model[field],
        onChange: (value: string) => {
          model[field] = value;
        },
        showImageUpload: false,
      });
    },
  },
];

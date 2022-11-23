import { FormSchema } from '/@/components/Form/index';
import { roleOptions } from '/@/utils/roleOptions';
import { sexOptions } from '/@/utils/sexOptions';

export interface ListItem {
  key: string;
  title: string;
  description: string;
  extra?: string;
  avatar?: string;
  color?: string;
}

// tab的list
export const settingList = [
  {
    key: '1',
    name: '基本设置',
    component: 'BaseSetting',
  },
  {
    key: '2',
    name: '修改密码',
    component: 'ChangePassword',
  },
];

// 基础设置 form
export const baseSetschemas: FormSchema[] = [
  {
    field: 'role',
    component: 'Select',
    componentProps: roleOptions,
    label: '身份信息',
    dynamicDisabled: true,
    colProps: { span: 18 },
  },
  {
    field: 'username',
    component: 'Input',
    label: '用户名',
    required: true,
    dynamicDisabled(renderCallbackParams) {
      return renderCallbackParams.values.username === 'student';
    },
    colProps: { span: 18 },
  },
  {
    field: 'name',
    component: 'Input',
    label: '真实姓名',
    required: true,
    colProps: { span: 18 },
  },
  {
    field: 'sex',
    component: 'Select',
    required: true,
    componentProps: sexOptions,
    label: '性别',
    colProps: { span: 18 },
  },
  {
    field: 'tel',
    component: 'Input',
    required: true,
    label: '联系电话',
    colProps: { span: 18 },
  },
  {
    field: 'dormBuildName',
    component: 'Input',
    // component: 'InputTextArea',
    label: '所在宿舍楼名称',
    show(renderCallbackParams) {
      return renderCallbackParams.values.dormBuildName;
    },
    dynamicDisabled: true,
    colProps: { span: 18 },
  },
];

// 安全设置 list
export const formList: FormSchema[] = [
  {
    label: '曾用密码',
    field: 'oldPassword',
    required: true,
    component: 'InputPassword',
  },
  {
    label: '新密码',
    field: 'newPassword',
    required: true,
    component: 'InputPassword',
  },
  {
    label: '确认密码',
    field: 'password',
    required: true,
    component: 'InputPassword',
  },
];

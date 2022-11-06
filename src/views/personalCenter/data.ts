import { Gender } from '/@/api/demo/model/gender';
import { FormSchema } from '/@/components/Form/index';
import { RoleEnum } from '/@/enums/roleEnum';

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
    name: '安全设置',
    component: 'SecureSetting',
  },
  {
    key: '3',
    name: '新消息通知',
    component: 'MsgNotify',
  },
];

// 基础设置 form
export const baseSetschemas: FormSchema[] = [
  {
    field: 'role',
    component: 'Select',
    componentProps: {
      options: [
        { label: '超级管理员', value: RoleEnum.ADMIN },
        { label: '宿舍管理员', value: RoleEnum.MANAGER },
        { label: '学生', value: RoleEnum.STUDENT },
      ],
    },
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
    componentProps: {
      options: [
        { label: '男', value: Gender.male },
        { label: '女', value: Gender.female },
      ],
    },
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
export const secureSettingList: ListItem[] = [
  {
    key: '1',
    title: '账户密码',
    description: '当前密码强度：：强',
    extra: '修改',
  },
  {
    key: '2',
    title: '密保手机',
    description: '已绑定手机：：138****8293',
    extra: '修改',
  },
  {
    key: '3',
    title: '密保问题',
    description: '未设置密保问题，密保问题可有效保护账户安全',
    extra: '修改',
  },
  {
    key: '4',
    title: '备用邮箱',
    description: '已绑定邮箱：：ant***sign.com',
    extra: '修改',
  },
  {
    key: '5',
    title: 'MFA 设备',
    description: '未绑定 MFA 设备，绑定后，可以进行二次确认',
    extra: '修改',
  },
];

// 新消息通知 list
export const msgNotifyList: ListItem[] = [
  {
    key: '1',
    title: '账户密码',
    description: '其他用户的消息将以站内信的形式通知',
  },
  {
    key: '2',
    title: '系统消息',
    description: '系统消息将以站内信的形式通知',
  },
  {
    key: '3',
    title: '待办任务',
    description: '待办任务将以站内信的形式通知',
  },
];

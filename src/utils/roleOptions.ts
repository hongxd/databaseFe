import { RoleEnum } from '../enums/roleEnum';

export const roleOptions = {
  options: [
    { label: '超级管理员', value: RoleEnum.ADMIN },
    { label: '宿舍管理员', value: RoleEnum.MANAGER },
    { label: '学生', value: RoleEnum.STUDENT },
  ],
};

import { RoleEnum } from '../enums/roleEnum';

export const mapRoles = (role: RoleEnum) => {
  switch (role) {
    case RoleEnum.ADMIN:
      return '超级管理员';
    case RoleEnum.MANAGER:
      return '宿舍管理员';
    case RoleEnum.STUDENT:
      return '学生';
    default:
      throw new Error('不存在此角色');
  }
};

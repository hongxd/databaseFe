import { RoleEnum } from '/@/enums/roleEnum';

/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  username: string;
  password: string;
}

export interface RoleInfo {
  roleName: string;
  value: RoleEnum;
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  id: string | number;
  token: string;
  role: RoleInfo;
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  roles: RoleInfo[];
  // 用户id
  id: string | number;
  // 用户名
  username: string;
  // 真实名字
  name: string;
  // 头像
  avatar: string;
  // 介绍
  desc?: string;
}

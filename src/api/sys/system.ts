import {
  AccountParams,
  DeptListItem,
  MenuParams,
  RoleParams,
  RolePageParams,
  MenuListGetResultModel,
  DeptListGetResultModel,
  AccountListGetResultModel,
  StudentPageListGetResultModel,
  RoleListGetResultModel,
} from './model/systemModel';
import { idsModel } from '../model/idsModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  StudentPageList = '/api/student',
  AccountList = '/system/getAccountList',
  IsAccountExist = '/system/accountExist',
  DeptList = '/system/getDeptList',
  setRoleStatus = '/system/setRoleStatus',
  MenuList = '/system/getMenuList',
  GetAllRoleList = '/system/getAllRoleList',
}

export const getStudentList = (params?: RolePageParams) =>
  defHttp.get<StudentPageListGetResultModel>({ url: Api.StudentPageList, params });

export const deleteStudentList = (params: idsModel) =>
  defHttp.delete<string>({ url: Api.StudentPageList, data: params });

export const getAccountList = (params: AccountParams) =>
  defHttp.get<AccountListGetResultModel>({ url: Api.AccountList, params });

export const getDeptList = (params?: DeptListItem) =>
  defHttp.get<DeptListGetResultModel>({ url: Api.DeptList, params });

export const getMenuList = (params?: MenuParams) =>
  defHttp.get<MenuListGetResultModel>({ url: Api.MenuList, params });

export const getAllRoleList = (params?: RoleParams) =>
  defHttp.get<RoleListGetResultModel>({ url: Api.GetAllRoleList, params });

export const setRoleStatus = (id: number, status: string) =>
  defHttp.post({ url: Api.setRoleStatus, params: { id, status } });

export const isAccountExist = (account: string) =>
  defHttp.post({ url: Api.IsAccountExist, params: { account } }, { errorMessageMode: 'none' });

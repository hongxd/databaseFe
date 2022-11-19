import { BasicFetchResult } from '../model/baseModel';
import { idsModel } from '../model/idsModel';
import { ManagerModel } from './model/managerModel';
import { defHttp } from '/@/utils/http/axios';

const enum Api {
  manager = '/api/manager',
}
export const getManagerList = (params?: ManagerModel) =>
  defHttp.get<BasicFetchResult<ManagerModel>>({ url: Api.manager, params });
export const AddManager = (info: ManagerModel) => {
  return defHttp.put({ url: Api.manager, data: info });
};
export const deleteManagerList = (params: idsModel) =>
  defHttp.delete<string>({ url: Api.manager, data: params });

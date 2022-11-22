import { BasicFetchResult } from '../model/baseModel';
import { idsModel } from '../model/idsModel';
import { Dormitory } from './model/dormitoryModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  Dormitory = '/api/dormitory',
}

export const getDormitoryList = (params?: Dormitory) =>
  defHttp.get<BasicFetchResult<Dormitory>>({ url: Api.Dormitory, params });
export const AddDormitory = (info: Dormitory) => {
  return defHttp.put({ url: Api.Dormitory, data: info });
};
export const deleteDormitoryList = (params: idsModel) =>
  defHttp.delete<string>({ url: Api.Dormitory, data: params });

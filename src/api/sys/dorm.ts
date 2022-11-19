import { BasicFetchResult } from '../model/baseModel';
import { idsModel } from '../model/idsModel';
import { DormBuild } from './model/dormModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  DormBuild = '/api/dormbuild',
}

export const getDormList = (params?: DormBuild) =>
  defHttp.get<BasicFetchResult<DormBuild>>({ url: Api.DormBuild, params });
export const AddDorm = (info: DormBuild) => {
  return defHttp.put({ url: Api.DormBuild, data: info });
};
export const deleteDormList = (params: idsModel) =>
  defHttp.delete<string>({ url: Api.DormBuild, data: params });

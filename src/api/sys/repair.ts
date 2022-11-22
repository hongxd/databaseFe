import { BasicFetchResult } from '../model/baseModel';
import { idsModel } from '../model/idsModel';
import { Repair } from './model/repairModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  Repair = '/api/repair',
}

export const getRepairList = (params?: Repair) =>
  defHttp.get<BasicFetchResult<Repair>>({ url: Api.Repair, params });
export const AddRepair = (info: Repair) => {
  return defHttp.put({ url: Api.Repair, data: info });
};
export const deleteRepairList = (params: idsModel) =>
  defHttp.delete<string>({ url: Api.Repair, data: params });

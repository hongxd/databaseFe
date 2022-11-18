import { DormBuild } from '../model/dormModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  DormBuild = '/api/dormbuild',
  SESSION_TIMEOUT = '/user/sessionTimeout',
  TOKEN_EXPIRED = '/user/tokenExpired',
}

export const dormInfoApi = () => defHttp.get<DormBuild[]>({ url: Api.DormBuild });

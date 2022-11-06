import { defHttp } from '/@/utils/http/axios';
import { GetAccountInfoModel } from '../demo/model/accountModel';

enum Api {
  ACCOUNT_INFO = '/api/personalCenter',
  SESSION_TIMEOUT = '/user/sessionTimeout',
  TOKEN_EXPIRED = '/user/tokenExpired',
}

// Get personal center-basic settings

export const accountInfoApi = () => defHttp.get<GetAccountInfoModel>({ url: Api.ACCOUNT_INFO });

export const updateAccountInfoApi = (userInfo: GetAccountInfoModel) =>
  defHttp.post<void>({ url: Api.ACCOUNT_INFO, data: userInfo });

export const sessionTimeoutApi = () => defHttp.post<void>({ url: Api.SESSION_TIMEOUT });

export const tokenExpiredApi = () => defHttp.post<void>({ url: Api.TOKEN_EXPIRED });

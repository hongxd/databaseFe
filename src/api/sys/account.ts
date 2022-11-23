import { defHttp } from '/@/utils/http/axios';
import { GetAccountInfoModel, PasswordFromModel } from './model/accountModel';

enum Api {
  ACCOUNT_INFO = '/api/personalCenter',
  CHANGE_PASSWORD = '/api/password',
}

// Get personal center-basic settings

export const accountInfoApi = () => defHttp.get<GetAccountInfoModel>({ url: Api.ACCOUNT_INFO });

export const updateAccountInfoApi = (userInfo: GetAccountInfoModel) =>
  defHttp.post<void>({ url: Api.ACCOUNT_INFO, data: userInfo });

export const changePassword = (passwordForm: PasswordFromModel) =>
  defHttp.post<string>({ url: Api.CHANGE_PASSWORD, data: passwordForm });

// export const tokenExpiredApi = () => defHttp.post<void>({ url: Api.TOKEN_EXPIRED });

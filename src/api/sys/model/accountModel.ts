import { Gender } from '../../model/gender';
import { RoleEnum } from '/@/enums/roleEnum';

export interface GetAccountInfoModel {
  username: string;
  name: string;
  sex: Gender;
  tel: string;
  role: keyof RoleEnum;
  dormBuildName?: string;
  dormBuildDetail?: string;
}
export interface PasswordFromModel {
  oldPassword: string;
  newPassword: string;
  password: string;
}

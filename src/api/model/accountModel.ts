import { Gender } from './gender';
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

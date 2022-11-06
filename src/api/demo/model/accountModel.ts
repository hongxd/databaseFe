import { Gender } from './gender';

export interface GetAccountInfoModel {
  username: string;
  name: string;
  sex: Gender;
  tel: string;
  role: 'admin' | 'student' | 'dormmanager';
  dormBuildName?: string;
  dormBuildDetail?: string;
}

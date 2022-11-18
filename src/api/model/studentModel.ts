import { Gender } from './gender';

export interface StudentListItem {
  id: string;
  stuNum: string;
  name: string;
  dormName?: string;
  DormBuildId: string;
  sex: Gender;
  tel: string;
}

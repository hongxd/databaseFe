import { Gender } from '../../model/gender';

export interface ManagerModel {
  id?: string;
  userName: string;
  sex: Gender;
  tel: string;
  name: string;
}

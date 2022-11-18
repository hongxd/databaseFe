import { StudentListItem } from '../model/studentModel';
import { defHttp } from '/@/utils/http/axios';

const enum Api {
  AddStudent = '/api/student',
}

/**
 * @description: Get user menu based on id
 */

export const AddStudent = (info: StudentListItem) => {
  return defHttp.put({ url: Api.AddStudent, data: info });
};

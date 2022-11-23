import { idsModel } from '../model/idsModel';
import { StudentListItem } from './model/studentModel';
import { RolePageParams, StudentPageListGetResultModel } from './model/systemModel';
import { defHttp } from '/@/utils/http/axios';

const enum Api {
  student = '/api/student',
}

/**
 * @description: Get user menu based on id
 */

export const AddStudent = (info: StudentListItem) => {
  return defHttp.put({ url: Api.student, data: info });
};
export const getStudentList = (params?: RolePageParams) =>
  defHttp.get<StudentPageListGetResultModel>({ url: Api.student, params });

export const deleteStudentList = (params: idsModel) =>
  defHttp.delete<string>({ url: Api.student, data: params });

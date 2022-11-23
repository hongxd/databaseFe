import { BasicFetchResult } from '../model/baseModel';
import { idsModel } from '../model/idsModel';
import { AnnounceMent, AnnounceMentForm } from './model/announcementModel';
import { defHttp } from '/@/utils/http/axios';

const enum Api {
  notice = '/api/notice',
}
export const getAnnouncementList = (params?: AnnounceMent) =>
  defHttp.get<BasicFetchResult<AnnounceMent>>({ url: Api.notice, params });
export const AddAnnouncement = (info: AnnounceMentForm) => {
  return defHttp.put<string>({ url: Api.notice, data: info });
};
export const getAnnouncementContent = (id: string) =>
  defHttp.get<AnnounceMent>({ url: Api.notice + `/${id}` });
export const deleteAnnouncement = (params: idsModel) =>
  defHttp.delete<string>({ url: Api.notice, data: params });

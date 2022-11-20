import { BasicFetchResult } from '../model/baseModel';
import { idsModel } from '../model/idsModel';
import { AnnounceMent } from './model/announcementModel';
import { defHttp } from '/@/utils/http/axios';

const enum Api {
  notice = '/api/notice',
}
export const getAnnouncementList = (params?: AnnounceMent) =>
  defHttp.get<BasicFetchResult<AnnounceMent>>({ url: Api.notice, params });
export const AddAnnouncement = (info: AnnounceMent) => {
  return defHttp.put({ url: Api.notice, data: info });
};
export const deleteAnnouncement = (params: idsModel) =>
  defHttp.delete<string>({ url: Api.notice, data: params });

export interface AnnounceMent extends AnnounceMentForm {
  date: string;
  id: string;
  pId: string;
  noticePerson: string;
}
export interface AnnounceMentForm {
  content: string;
  title: string;
}

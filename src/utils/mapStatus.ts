import { Status } from '../enums/statusEnum';

export const mapStatus = (status: Status) => {
  switch (status) {
    case Status.waiting:
      return '等待维修';
    case Status.repairing:
      return '维修中';
    case Status.repaired:
      return '已维修';
    default:
      throw new Error('错误的状态');
  }
};

import { Status } from '../enums/statusEnum';

export const statusOptions = {
  options: [
    { label: '等待维修', value: Status.waiting },
    { label: '维修中', value: Status.repairing },
    { label: '已维修', value: Status.repaired },
  ],
};

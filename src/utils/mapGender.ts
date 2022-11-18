import { Gender } from '../api/model/gender';

export const mapGender = (gender: Gender) => {
  switch (gender) {
    case Gender.male:
      return '男';
    case Gender.female:
      return '女';
    default:
      throw new Error('错误的性别');
  }
};

let hoursTip = '';
const date = new Date();

if (date.getHours() >= 0 && date.getHours() < 12) {
  hoursTip = '上午好';
} else if (date.getHours() >= 12 && date.getHours() < 18) {
  hoursTip = '下午好';
} else {
  hoursTip = '晚上好';
}
export default hoursTip;

import dayjs from 'dayjs';
import 'dayjs/locale/vi';
import utc from 'dayjs/plugin/utc';

const dayjsExt = dayjs;

dayjs.extend(utc);
dayjs.locale('vi');

export { dayjsExt };

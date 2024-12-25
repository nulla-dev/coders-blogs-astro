import dayjs from "dayjs";
import advancedFormat from 'dayjs/plugin/advancedFormat'
import relativeTime from 'dayjs/plugin/relativeTime'
import utc from "dayjs/plugin/utc";
import { config } from '../utils/constants';

dayjs.locale(config.lang);
dayjs.extend(advancedFormat)
dayjs.extend(relativeTime)
dayjs.extend(utc);

export function formatDate(date, dateType = 'DD MMMM, YYYY, hh:mm A') {
  if (date) {
    const dateFormat = dateType || "YYYY-MM-DD";
    // return dayjs(date).utc().format(dateFormat);
    return dayjs(date).fromNow();
  } else {
    return ''
  }
}

import moment from "jalali-moment";

export function secondsToTime(seconds: number | string) {
  return moment.utc(+seconds * 1000).format("HH:mm:ss");
}

export function diffTimesHMS(start_time: string, end_time: string) {
  const start = moment(start_time);
  const end = moment(end_time);

  const duration = moment.duration(end.diff(start));

  const hours = Math.floor(duration.asHours());
  const minutes = duration.minutes();
  const seconds = duration.seconds();

  return `${hours}:${minutes}:${seconds}`;
}

export function convertLocaleTime(isoDate: string) {
  const date = moment(isoDate);
  return date.locale("fa").format("YYYY/MM/DD");
}

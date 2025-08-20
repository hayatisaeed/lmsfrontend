import moment from "jalali-moment";

export function secondsToTime(seconds: number | string) {
  return moment.utc(+seconds * 1000).format("HH:mm:ss");
}

export function convertLocaleTime(isoDate: string) {
  const date = moment(isoDate);
  return date.format("YYYY/MM/DD");
}

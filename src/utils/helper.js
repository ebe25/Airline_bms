export const compareTime = (dateTime1, dateTime2) => {
  let timeStamp1 = new Date(dateTime1).getTime();
  let timeStamp2 = new Date(dateTime2).getTime();

  return timeStamp1 > timeStamp2;
};
//todo => add compareDays, compareMonth

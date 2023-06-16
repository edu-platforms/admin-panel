import dayjs from 'dayjs';

const DATE_FORMAT = 'YYYY-MM-DD';
const FULL_DATE_FORMAT = `${DATE_FORMAT} HH:MM`;

export const dateFormatter = (date) => {
  const formattedDate = new Date(date);

  const month = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];

  const year = formattedDate.getFullYear();
  const time = String(formattedDate).split(" ")[4];

  return `${formattedDate.getDate()}.${
    month[formattedDate.getMonth()]
  }.${year} ${time}`;
};

export const getDateFormat = (date) => dayjs(date).format();

export const dateFormat = (date) => dayjs(date).format(DATE_FORMAT);

export const getFullDateFormat = (date) => dayjs(date).format(FULL_DATE_FORMAT);

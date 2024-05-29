function parseDate(date: string) {
  return new Date(date).toUTCString();
}

export default parseDate;
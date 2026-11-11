function convertToMilliseconds(val) {
  const num = parseInt(val);
  const unit = val.slice(-1);

  switch (unit) {
    case 's':
      return num * 1000;
    case 'm':
      return num * 60 * 1000;
    case 'h':
      return num * 60 * 60 * 1000;
    default:
      throw new Error('Неподдерживаемая единица измерения времени');
  }
}

export default convertToMilliseconds;

const percentage = (actualValue: number, total: number) =>
  ((actualValue * 100) / total).toFixed(0);

const bookName = (matheus: string) => {
  return matheus
    .split('_')
    .map((value: string) => value.charAt(0).toUpperCase() + value.slice(1))
    .join(' ');
};

export default { bookName, percentage };

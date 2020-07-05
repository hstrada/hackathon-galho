const percentage = (actualValue: number, total: number) =>
  ((actualValue * 100) / total).toFixed(0);

export default { percentage };

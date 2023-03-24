const getTime = (date: string | undefined) => {
  return 2023 - Number(date?.slice(-4));
};

export { getTime };

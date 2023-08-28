export const convert = (value: string | number) => {
  if (!value) {
    return "R$ 0,00";
  }

  return Number(value).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};

export const formatCurrency = (value: number | string) => {
  if (value === "") {
    return "R$ 0,00";
  }

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  return formatter.format(Number(value) / 100);
};

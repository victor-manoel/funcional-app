import { orderBy } from "lodash";

export const sortHistoricoVencimentos = (vencimentos) => {
  const vencimentosWithNoDate = [];
  const vencimentosWithDate = [];

  vencimentos.forEach((vencimento) => {
    vencimento.date
      ? vencimentosWithDate.push(vencimento)
      : vencimentosWithNoDate.push(vencimento);
  });

  const sortedVencimentos = orderBy(
    vencimentosWithDate,
    ["datev", "nome"],
    ["desc", "asc"]
  );

  const sortedVencimentosWithNoDate = orderBy(
    vencimentosWithNoDate,
    ["nome"],
    ["asc"]
  );

  sortedVencimentos.push(...sortedVencimentosWithNoDate);

  return sortedVencimentos;
};

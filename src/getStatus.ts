type IStatus = "A" | "I" | "S" | "P" | "default" | string;

interface ITypeStatus {
  [key: string]: string;
}

export const getStatus = (status: IStatus) => {
  const statusType: ITypeStatus = {
    A: "Ativo",
    I: "Inativo",
    S: "Suspenso",
    P: "pendente",
    default: "-",
  };

  return statusType[status] || statusType['default'] 
};

export default function createData(
    id: number,
    date: string,
    name: string,
    paymentMethod: string,
    amount: number,
  ) {
    return { id, date, name, paymentMethod, amount };
  }
import Item from "./DataType";

export default interface Order {
  bagItems: Item[];
  total: number;
  date: string;
}

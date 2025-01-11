import Order from "./Order";
export interface IAddress {
  address: string; // Represents the physical address
  contact: string; // Contact phone number
  email: string; // Email address
  name: string; // Name associated with the address
  vat: string; // VAT (Value-Added Tax) number
  zipcode: string; // Zip code for the address
}

export interface IWholeData {
  address?: IAddress;
  orders?: Order[];
}

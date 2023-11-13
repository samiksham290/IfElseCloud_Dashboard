
export interface Dashboard {
    new_users: User[];
    recent_orders: Orders[];
    top_cards: Card[];
}

export interface User {
  country: string;
  id: string;
  isActive: boolean;
  name: string;
  picture: string;
  progress: string;
}

export interface Orders {
  delivery_date: string;
  id: string;
  name: string;
  product: string;
  shipping: string;
  status: string;
  tracking_no: string;
}

export interface Card {
    header: string;
    sub_header: string;
    value: number;
}

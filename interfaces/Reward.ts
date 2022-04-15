export interface RewardI {
  name: string;
  type: string;
  coupon?: {
    discount: string;
  };
  voucher?: {
    price?: string;
    currency?: string;
  };
  promo?: {
    buy?: string;
    get?: string;
  };
  date: string;
}

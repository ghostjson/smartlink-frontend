export type newReward = {
  name: string;
  type: string;
  content: any;
  validity: string;
  style: Record<string, string>;
};

export interface RewardI {
  name: string;
  type: 'voucher' | 'promo' | 'coupon';
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
  style: {
    fgColor: string;
    bgColor: string;
  };
}

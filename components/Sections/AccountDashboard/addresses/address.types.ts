export interface Address {
  id: number;
  title: string;
  name: string;
  address: string;
  address2?: string;
  phone: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  isDefault?: boolean;
}
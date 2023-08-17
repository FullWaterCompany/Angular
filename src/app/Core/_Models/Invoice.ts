export interface Invoice {
  id: string;
  year: string;
  realStateType: number;
  subscriptionNo: string;
  subscriberNo:string;
  date: Date;
  from: Date;
  to: Date;
  previousConsumption: number;
  currentConsumption: number;
  amountConsumption: number;
  serviceFee: number;
  taxRate: number;
  consumptionValue: number;
  wastewaterConsumption: number;
  totalInvoice: number;
  taxValue: number;
  totalBill: number;
  isThereSanitation: boolean;
  notes: string;
}

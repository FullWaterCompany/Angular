export interface Subscription {
  id: string;
  subscriberCode: string;
  realStateType: number;
  unitNo: number;
  isThereSanitation: boolean;
  lastReading:string;
  notes: string;
}


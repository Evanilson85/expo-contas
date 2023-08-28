export interface ICARDS {
  name: string;
  typeCard: string;
  maturity: string;
  icon?: {
    iconName: string;
    name: string;
  };
  value: number;
  expense: string;
  currentValue: string;
  id: string;
  color: string | "#5b259f";
}

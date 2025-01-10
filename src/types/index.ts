export interface User {
  id: string;
  fullName: string;
  userName: string;
  email: string;
  password: string;
  headline: string;
  birthDate: string;
  currentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
  profilePictureUrl?: string;
}
export interface CreditCard {
  userId: string;
  balance: number;
  cardNumber: string;
  expirationDate: string;
}

export interface RecentTransaction {
  title: string;
  source: string;
  amount: number;
  date: string;
}

export interface WeeklyActivity {
  day: string;
  deposit: number;
  withdraw: number;
}

export interface ExpenseStatistic {
  category: string;
  percentage: number;
}

export interface Friend {
  userId: string;
  name: string;
  headline: string;
}

export interface BalanceHistory {
  date: string;
  balance: number;
}

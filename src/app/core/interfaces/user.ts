export interface IUserDataLogin {
  user: string;
  password: string;
}

export type AccountType = {
  id: string;
  title: string;
  value: string;
  description: string;
};

export type CardType = {
  id: string;
  title: string;
  value: string;
  value2: string;
  description: string;
};

export interface IUserData {
  name: string;
  accounts: Array<AccountType>;
  cards: Array<CardType>;
}

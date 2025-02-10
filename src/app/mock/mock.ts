import { IUserData } from 'app/core/interfaces/user';

export const userData: IUserData = {
  name: 'Juan Perez',
  accounts: [
    {
      id: 'account1',
      title: 'Cuenta de ahorros 1 - 0001',
      value: '1,000,000.00',
      description: 'Balance disponible',
    },
    {
      id: 'account2',
      title: 'Cuenta de ahorros 2 - 0002',
      value: '2,000,000.00',
      description: 'Balance disponible',
    },
  ],
  cards: [
    {
      id: 'card1',
      title: 'Tarjeta de crédito 1 - 0001',
      value: '100,000.00',
      value2: '1,000.00',
      description: 'Balance disponible',
    },
    {
      id: 'card2',
      title: 'Tarjeta de crédito 2 - 0002',
      value: '200,000.00',
      value2: '1,000.00',
      description: 'Balance disponible',
    },
  ],
};

type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: 'male' | 'female';
  contactName: string;
  adress: {
    division: string;
    city: string;
  };
};

const user1: User = {
  id: 123,
  name: {
    firstName: 'Mr.',
    lastName: 'X',
  },
  gender: 'male',
  contactName: '02002020',
  adress: {
    division: 'Barishal',
    city: 'sadar',
  },
};

const user2: User = {
  id: 123,
  name: {
    firstName: 'Ms.',
    lastName: 'Y',
  },
  gender: 'female',
  contactName: '02222020',
  adress: {
    division: 'Barishal saddar',
    city: 'sadar Jhalakathi',
  },
};

type IsAddmin = true;
const isAddmin: IsAddmin = true;

// functtion
type Addfunction = (num1: number, num2: number) => number;

const add: Addfunction = (n1, n2) => n1 + n2;

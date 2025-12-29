// key off :type operator
type RichPeopleVehicle = {
  car: string; //key:value
  bike: string;
  bus: string;
};

// type MyVeicle = 'car' | 'bike' | 'bus';
type Myvehicle2 = keyof RichPeopleVehicle;
const myVehicle:Myvehicle2="car";

// keyof constant
type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};
const user: User = {
  id: 222,
  name: 'Mahfuj',
  address: {
    city: 'Ct',
  },
};

const getPropertyFromObjt = <X>(obj: X, key: keyof X) => {
  return obj[key];
};
const res = getPropertyFromObjt(user, 'id');
console.log(res);

// reference type:Object

const user: {
  organization: "PH Hero"
//  Literal Type
  firstName: string;
  middleName?: string; //Optional Type
  lastName: string;
  isMarried?: boolean;
} = {
  organization: 'PH Hero',
  firstName: 'Jhanker',
  lastName: 'Mahbub',
  isMarried: true,
};
// user.organization="Louka";
console.log(user);

// spread operator
const friends = ['Rahim', 'Karim'];
const schoolFriends = ['Meaw', 'Biral', 'Kutta'];
const collegeFriends = ['Mr.Smith', 'Mr.X'];

friends.push(...collegeFriends);
friends.push(...schoolFriends);
console.log(friends);
const user = {
  name: 'Mahfuj',
  phnNo: '01742439052',
};
const otherInfo = {
  colour: 'Black',
  age: 56,
};
const UserInfo = { ...user, ...otherInfo };
console.log(UserInfo);
// rest operator
const sendInvite = (...friends: string[]) => {
  friends.forEach((friend: String) => console.log(`Send Invite to ${friend}`));
};
sendInvite('X', 'xx', 'errr',"eeeeee");

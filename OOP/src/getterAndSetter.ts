// Getter and Setter
class BankAccount {
  public readonly userId: number;
  public userName: string;
  private userBlance: number;
  constructor(userId: number, userName: string, userBlance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBlance = userBlance;
  }
// //  setter Balance
//   addBlance(balance: number) {
//    return this.userBlance += balance;
//   }
set addBalnce(balance: number) {
  this.userBlance += balance;
}
//   getter Balance
  get getBlance() {
    return this.userBlance;
  }
}


const myAccount = new BankAccount(1, 'Mahfuj', 1000);
// myAccount.userId = 333;
myAccount.addBalnce=500;
myAccount.addBalnce=500;
console.log(myAccount.getBlance);

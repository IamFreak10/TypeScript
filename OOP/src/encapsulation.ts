//access>>modify
class BankAccount {
  public readonly userId: number;
  public userName: string;
  protected userBlance: number;
  constructor(userId: number, userName: string, userBlance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBlance = userBlance;
  }
  private addBlance(balance: number) {
    this.userBlance += balance;
  }
  callHidden(balance:number){
    this.addBlance(balance)
  }
}
class studentBankAccount extends BankAccount {
  test() {
    this.userBlance = this.userBlance;
  }
}

const myAccount = new BankAccount(1, 'Mahfuj', 1000);
// myAccount.userId = 333;
// myAccount.addBlance(500);
// myAccount.addBlance(500);
myAccount.callHidden(500)
myAccount.callHidden(500)
console.log(myAccount);

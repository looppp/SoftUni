public class BankAccount {
    private static int id = 1;
    private double balance;
    private static double interestRate = 0.02;

    public static void setInterestRate(double interest) {
        interestRate = interest;
    }

    public double getInterest(int years){
        return  this.interestRate;
    }

    public void deposit(double amount){

    }
}

package BankAccount;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[]args){
        Scanner scan = new Scanner(System.in);
        ArrayList<BankAccount> bankRegister = new ArrayList<>();

        String[] input = scan.nextLine().split(" ");

        while(!input[0].equals("End")){
            String command = input[0];
            String idOrInterest = input[1];
            String interestOrAmount = input[2];

            switch (command){
                case "Create":
                    BankAccount account = new BankAccount();
                    bankRegister.add(account);
                    System.out.println("Account"+ account.);
                    break;
            }
        }
    }
}

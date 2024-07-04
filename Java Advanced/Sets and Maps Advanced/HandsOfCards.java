import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Collections;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;

public class HandsOfCards {
    public static void main(String[] args) {
        LinkedHashMap<String, HashSet<String>> handsOfCards = new LinkedHashMap<>();

        try(BufferedReader reader = new BufferedReader(new InputStreamReader(System.in))){
            String[] input = reader.readLine().split(": ");

            while (!input[0].equals("JOKER")){
                String[] cards = input[1].split(", ");

                if(!handsOfCards.containsKey(input[0])){
                    handsOfCards.put(input[0], new HashSet<>());
                    Collections.addAll(handsOfCards.get(input[0]), cards);
                } else {
                    handsOfCards.get(input[0]).addAll(List.of(cards));
                }
                    input = reader.readLine().split(": ");
            }

            calculateSumOfTheCards(handsOfCards);

        } catch (IOException e){
            throw new RuntimeException(e.getMessage());
        }
    }
    public static void calculateSumOfTheCardsForEachPlayer(LinkedHashMap<String, HashSet<String>> mapOfItems){
        for (String name : mapOfItems.keySet()){
            HashSet<String> inputCards = mapOfItems.get(name);
            int result = 0;
            int cardPowerInteger = 0;
            int cardTypeInteger = 0;

            for(String card : inputCards){
                if(card.length() > 2){
                    char typeOfCard = card.charAt(2);
                    switch (typeOfCard) {
                        case 'S' -> cardTypeInteger = 4;
                        case 'H' -> cardTypeInteger = 3;
                        case 'D' -> cardTypeInteger = 2;
                        case 'C' -> cardTypeInteger = 1;
                    }
                    result += 10 * cardTypeInteger;

                } else {
                    char powerOfCard = card.charAt(0) ;
                    char typeOfCard = card.charAt(1);

                    cardPowerInteger = switch (powerOfCard) {
                        case 'J' -> 11;
                        case 'Q' -> 12;
                        case 'K' -> 13;
                        case 'A' -> 14;
                        default -> Integer.parseInt(Character.toString(powerOfCard));
                    };
                    switch (typeOfCard) {
                        case 'S' -> cardTypeInteger = 4;
                        case 'H' -> cardTypeInteger = 3;
                        case 'D' -> cardTypeInteger = 2;
                        case 'C' -> cardTypeInteger = 1;
                    }

                    result += (cardPowerInteger * cardTypeInteger);
                }


            }

            System.out.println(name + ": " + result);
        }
    }
}

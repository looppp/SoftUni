import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.Scanner;

public class CitiesByContinentAndCountry{
    public static void main(String[]args){
        Scanner scan = new Scanner(System.in);
        LinkedHashMap<String, LinkedHashMap<String, ArrayList<String>>> mapedCountries = new LinkedHashMap<>();
        int n = Integer.parseInt(scan.nextLine());

        for (int i = 0; i < n; i++) {
            String[] input = scan.nextLine().split(" ");
            String continent = input[0];
            String country = input[1];
            String city = input[2];

            if(mapedCountries.containsKey(continent)){
                LinkedHashMap<String, ArrayList<String>> continentData = mapedCountries.get(continent);

                if(continentData.containsKey(country)){
                    ArrayList<String> cities = continentData.get(country);
                    cities.add(city);
                    continentData.put(country, cities);
                } 
                else {
                    ArrayList<String> cities = new ArrayList<>();
                    cities.add(city);
                    continentData.put(country, cities);
                }
                mapedCountries.put(continent, continentData);
            }  else {
                LinkedHashMap<String, ArrayList<String>> countriesData = new LinkedHashMap<>();
                ArrayList<String> cities = new ArrayList<>();
                cities.add(city);
                countriesData.put(country, cities);
                mapedCountries.put(continent, countriesData);
            }
         

            //simple way
            /*
            if(!mapedCountries.containsKey(continent)){
                mapedCountries.put(continent, new LinkedHashMap<>(){{put(country, new ArrayList<>(){{add(city);}});}});
            } else {
                if(!mapedCountries.get(continent).containsKey(country)){
                    mapedCountries.get(continent).put(country, new ArrayList<>(){{add(city);}});
                } else {
                    mapedCountries.get(continent).get(country).add(city);
                }
            }  */
        }

        for (String continent : mapedCountries.keySet()) {
            System.out.println(continent + ":");
            LinkedHashMap<String, ArrayList<String>> countryCity = mapedCountries.get(continent);

            for (String country : countryCity.keySet()) {
                System.out.print("  " + country + " -> ");
                System.out.println(String.join(", ", countryCity.get(country)));
            }
        }
    }
}
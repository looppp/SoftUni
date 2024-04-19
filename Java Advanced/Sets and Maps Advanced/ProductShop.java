import java.util.LinkedHashMap;
import java.util.Scanner;
import java.util.TreeMap;

public class ProductShop {
    public static void main(String[]args){
        Scanner scan = new Scanner(System.in);
        String input ;
        TreeMap<String, LinkedHashMap<String, Double>> shopsAndProducts = new TreeMap<>();

        while (!"Revision".equals(input = scan.nextLine())) {
            String[] tokens = input.split(", ");
            String store = tokens[0];
            String product = tokens[1];
            double price = Double.parseDouble(tokens[2]);

            if(shopsAndProducts.containsKey(store)){
                shopsAndProducts.get(store).put(product, price);
            } else{
                LinkedHashMap<String, Double> products = new LinkedHashMap<>();
                products.put(product, price);
                shopsAndProducts.put(store, products);
            }
        }   

        for (String store : shopsAndProducts.keySet()) {
            System.out.println(store+"->");

            LinkedHashMap<String, Double> products = shopsAndProducts.get(store);
            for (String x : products.keySet()) {
                System.out.println("Product: "+x+", Price: "+products.get(x));
            }
        }
    }
}
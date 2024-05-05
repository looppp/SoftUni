package Generics.GenericScale;

public class Main {
    public static void main(String[] args) {
        Scale<String> stringScale = new Scale<>("a", "c");
        System.out.println(stringScale.getHevier());

        Scale<Integer> integerScale = new Scale<>(1, 2);
        System.out.println(integerScale.getHevier());
    }
}

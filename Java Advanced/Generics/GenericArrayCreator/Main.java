package Generics.GenericArrayCreator;

public class Main {
    public static void main(String[] args) {
        String[] strings = ArrayCreator.create(10, "None");
        Integer[] integers = ArrayCreator.create(Integer.class, 10, 0);
    }
}

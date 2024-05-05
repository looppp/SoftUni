package Generics.GenericCountMethodStrings;

import java.util.ArrayList;
import java.util.List;

public class Box <T>{
    private List<T> collection;

    public Box(){
        this.collection = new ArrayList<>();
    }

    public List<T> getCollection(){
        return this.collection;
    }

    public static <T extends Comparable> int compare(List<T> collection, T element) {
        int countOfElements = 0;
        for (int i = 0; i < collection.size(); i++) {
            T currentElement = collection.get(i);
            if(currentElement.compareTo(element) > 0){
                countOfElements++;
            }
        }
        return countOfElements;
    }

}

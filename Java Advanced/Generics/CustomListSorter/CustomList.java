package Generics.CustomListSorter;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class CustomList <T extends Comparable<T>> {
    private List<T> collection;

    public CustomList(){
        this.collection = new ArrayList<>();
    }

    public List<T> getCollection(){
        return this.collection;
    }

    public void add(T element){
        collection.add(element);
    }

    public void forEach(){
         this.collection.forEach(x -> System.out.println(x));
    }

    public T remove(int index){
        if(index < 0 || index >= collection.size()){
            throw new IndexOutOfBoundsException();
        } 
        return collection.remove(index);
    }

    public boolean contains(T element){
        return collection.contains(element);
    }

    public void swap(int index, int index2){
        if(index < 0 || index >= collection.size() || index2 < 0 || index2 >= collection.size()){
            throw new IndexOutOfBoundsException();
        }
        Collections.swap(collection, index, index2);
    }

    public long countGreaterThan(T element){
        return this.collection.stream().filter(e -> e.compareTo(element) > 0).count();
    }

    public T getMax(){
        if(collection.isEmpty()){
            return null;
        }
         return Collections.max(collection);
    }

    public T getMin(){
        if(collection.isEmpty()){
            return null;
        }
         return Collections.min(collection);
    }
}

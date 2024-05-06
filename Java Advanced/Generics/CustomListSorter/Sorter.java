package Generics.CustomListSorter;

public class Sorter  {
    //Bubble Sort
    // public static <T extends Comparable<T>> void sort(CustomList<T> list){
    //     int n = list.getCollection().size();
    //     for (int i = 0; i < n - 1; i++) {
    //         for (int j = 0; j < n - i - 1; j++) {
    //             if(list.getCollection().get(j).compareTo(list.getCollection().get(j + 1)) > 0){
    //                 T temp = list.getCollection().get(j);
    //                 T temp2 = list.getCollection().get(j + 1);

    //                 list.getCollection().set(j, temp2);
    //                 list.getCollection().set(j + 1, temp);
    //             }
    //         }
    //     }
    // }

    //Simple way
    public static <T extends Comparable<T>> void sort(CustomList<T> list){
        list.getCollection().sort(null);
    }
}

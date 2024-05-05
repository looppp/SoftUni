package Generics.GenericScale;

public class Scale <T extends Comparable<T>>{
    
    private T left;
    private T rigth;

    public Scale(T left, T rigth){
        this.left = left;
        this.rigth = rigth;
    }

    public T getHevier(){
        if(this.left.compareTo(this.rigth) > 0) {
            return this.left;
        }
        else if(this.rigth.compareTo(this.left) > 0) {
            return this.rigth;
        }
        return null;
    }
}

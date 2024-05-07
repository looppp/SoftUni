package IteratorsAndComparators.ComparableBook;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Book implements Comparable<Book>{
    private String title;
    private int year;
    private List<String> authors;

    public Book(String title, int year, String... authors){
        this.setTitle(title);
        this.setYear(year);
        this.setAuthors(authors);
    }

    private void setAuthors(String... authors){
        if(authors.length == 0){
            this.authors = new ArrayList<String>();
        } else {
            this.authors = new ArrayList<>(Arrays.asList(authors));
        }
    }

    private void setTitle(String title){
        this.title = title;
    }

    private void setYear(int year){
        this.year = year;
    }

    public String getTitle(){
        return this.title;
    }
    public int getYear(){
        return year;
    }

    public List<String> getAuthors(){
        return authors;
    }

    @Override
    public String toString(){
        return String.format("%s (%s)", this.getTitle(), this.getYear());
    }

    @Override
    public int compareTo(Book o) {
        int result = 0;
        if(o.title.equals(this.title)){
            result = Integer.compare(o.year, this.year);
        } else {
            result = o.title.compareTo(this.title);
        }

        return result;
    }
}

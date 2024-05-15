package IteratorsAndComparators.Library;

public class Main {
    public static void main(String[] args) {
        Book bookOne = new Book("Animal Farm", 2003, "George Orwell");
        Book bookTwo = new Book("The Documents in the case", 1930, "Dorothy Sayers", "Robert Eustace");
        Book bookThree = new Book("The Documents in the case", 2002);

        Library<Book> library = new Library<>(bookOne, bookTwo, bookThree);

        for(Book book: library){
            System.out.println(book.getTitle());
        }
    }
}

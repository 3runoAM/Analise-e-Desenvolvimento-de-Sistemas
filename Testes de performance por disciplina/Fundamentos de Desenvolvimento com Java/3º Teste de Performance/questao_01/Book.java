package com.bam.sandcastlejava.edu.infnet.tp3.questao_01;

public class Book {
    private String title;
    private String author;
    private String genre;
    private int releaseYear;

    public Book() {}

    public Book(String title, String author, String genre, int releaseYear) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.releaseYear = releaseYear;
    }

    @Override
    public String toString() {
        return "Livro:\n\t%s\n\tAutor: %s\n\tGênero: %s\n\tAno de lançamento: %d\n".formatted(title, author, genre, releaseYear);
    }
}
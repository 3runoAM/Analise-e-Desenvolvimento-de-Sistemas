namespace TesteDePerformance3.questao_1;

public class Book{
    private string _name;
    private string _author;
    private string _genre;
    private int _releaseYear;

    public Book(string name, string author, string genre, int releaseYear){
        _name = name;
        _author = author;
        _genre = genre;
        _releaseYear = releaseYear;
    }

    public string GetBookInfo(){
        return $"Nome: {_name}\n\tAutor: {_author}\n\tGênero: {_genre}\n\tRelease Year: {_releaseYear}\n";
    }
}
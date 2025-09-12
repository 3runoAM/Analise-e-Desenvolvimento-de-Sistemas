import {useState} from "react";
import OwnerInfo from "./OwnerInfo";
import BookFilters from "./BookFilters";
import BookList from "./BookList";
import BookDetails from "./BookDetails";


export default function PersonalLibrary({data}) {
    const [filters, setFilters] = useState({
        genre: '',
        minRate: 0,
        minPages: 0
    });
    const [selectedBook, setSelectedBook] = useState(null);
    const pageAverage = data.livros.reduce((totalPages, book) => totalPages + book.paginas, 0) / data.livros.length;


    const filteredBooks = data.livros.filter((book) => {
        return ((filters.genre ? book.genero.includes(filters.genre) : true) &&
            (filters.minRate ? book.avaliacao >= filters.minRate : true) &&
            (filters.minPages ? book.paginas >= filters.minPages : true)
        );
    });


    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", gap: "2em", padding: "1rem"}}>
            <OwnerInfo data={data} pageAverage={pageAverage}></OwnerInfo>
            <BookFilters filters={filters} onFilter={setFilters}></BookFilters>
            {
                selectedBook ?
                    <BookDetails book={selectedBook} unselectBook={() => setSelectedBook(null)}></BookDetails> :
                    <BookList data={filteredBooks} selectBook={setSelectedBook} pageAverage={pageAverage}></BookList>
            }
        </div>
    )
}
import { useEffect, useState } from 'react';
import BookList from '../../components/bookList/BookList';

export default function BookListPage({ termFilter }) {
    const uri = 'https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com/books.json';
    const [books, setBooks] = useState([]);
    const [filterWord, setFilterWord] = useState('');
    const [msg, setMsg] = useState(null);


    const fetchData = async () => {
        try {
            const response = await fetch(uri);
            const booksResponse = await response.json();
            const arrayBooks = Object.keys(booksResponse).map(key => ({
                id: key,
                ...booksResponse[key]
            }));
            let filteredList = arrayBooks;
            if (filterWord.trim() !== '') {
                filteredList = arrayBooks.filter(book =>
                    book.author.toLowerCase().includes(filterWord.toLowerCase()) ||
                    book.title.toLowerCase().includes(filterWord.toLowerCase()) ||
                    book.genre.toLowerCase().includes(filterWord.toLowerCase())
                );
            }
            setBooks(filteredList);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    };

    useEffect(() => {
        if (termFilter) {
            setFilterWord(termFilter);
        } else {
            setFilterWord('');
        }
    }, [termFilter]);

    useEffect(() => {
        fetchData();
    }, [filterWord]);

    return (
        <>
            <BookList books={books}/>
            {books.length === 0 && <p>A pesquisa não retornou nenhum resultado</p>}

        </>
    );
}

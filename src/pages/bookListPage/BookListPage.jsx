import { useEffect, useState } from 'react';
import BookList from '../../components/bookList/BookList';

export default function BookListPage() {
    const uri = 'https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com/books.json';
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(uri);
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <BookList books={data}/>
    );
}
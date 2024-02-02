import CardBook from '../cardBook/CardBook';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styles from './BookList.module.css'

// const theme = createTheme()
export default function BookList({books}) {
    const arrayBooks = Object.keys(books).map(key => {
        return {
            id: key,
            ...books[key]
        };
    });

    return (
      <ImageList cols={6} rowHeight={800}>
        {arrayBooks.map((item) => (
          <ImageListItem key={item.id}>
            <CardBook book={item}/>
          </ImageListItem>
        ))}
      </ImageList>
    );
}


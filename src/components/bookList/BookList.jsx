import CardBook from '../cardBook/CardBook';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styles from './BookList.module.css'

// const theme = createTheme()
export default function BookList({books}) {
    return (
      <ImageList cols={6} rowHeight={800} data-cy="lista">
        {books.map((item) => (
          <ImageListItem key={item.id}>
            <CardBook book={item}/>
          </ImageListItem>
        ))}
      </ImageList>
    );
}


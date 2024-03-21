/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardBook({book}) {
    return (
        <div>
            <Card sx={{ maxWidth: 200 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                image={book.cover}
                />
                <CardContent data-cy="book-info">
                    <Typography gutterBottom variant="h5">
                        Nome: {book.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Autor: {book.author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Gênero: {book.genre}
                    </Typography>   
                    <Typography variant="body2" color="text.secondary">
                        Idioma: {book.language}
                    </Typography>   
                    <Typography variant="body2" color="text.secondary">
                        Páginas: {book.pages}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Ano de Publicação: {book.publication_year}
                    </Typography>   
                    <Typography variant="body2" color="text.secondary">
                        Editora: {book.publisher}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Sinopse: {book.synopsis}
                    </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
        </div>
      );
}
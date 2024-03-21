import styles from './Menu.module.css'
import SearchIcon from '@mui/icons-material/Search';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';

export default function Menu({actionFilterBook}) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (evt) => {
    setSearchTerm(evt.target.value);
    actionFilterBook(evt.target.value);
  };

  return (
    <div className={styles.navbar}>
      <nav className={styles.container}>
        <div className={styles.logo}>
            <AutoStoriesIcon className={styles.logo_icon}/>
            <h1>Bookers</h1>
        </div>
        <div className={styles.container_input}>
            <input placeholder='Busque um livro' value={searchTerm} onChange={handleInputChange} data-cy="search"/>
            <SearchIcon className={styles.icon_search}/>
        </div>
        <div className={styles.logo}>
            <AccountCircleIcon className={styles.icon_login}/>
            <span>Logar</span>
        </div>
      </nav>
    </div>
  );
}
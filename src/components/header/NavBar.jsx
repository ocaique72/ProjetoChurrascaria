import React from 'react';
import styles from './navBar.module.css'
import {GiChargingBull} from 'react-icons/gi'

function NavBar() {
  return (
    <nav>
      <div className={styles.tituloMenu}>
        <h2><GiChargingBull/></h2>
      </div>
      <div className={styles.listNavBar}>
        <a href="#">Sobre</a>
        <a href="#">Menu</a>
        <a href="#">Contato</a>
        
      </div>
    </nav>
  );
}



export default NavBar;

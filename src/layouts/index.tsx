import { Link } from 'umi'
import { useState } from 'react';
import styles from './index.less';

export default function Layout() {
  const url = 'http://image.tmdb.org/t/p/w1280/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg'
  const mainStyle = {
    backgroundImage: `url(${url})`,
  }
  
  return (
    <>
      <header className={styles.header}>
        <Link to='/' >
          <img className={styles.logo1} src='https://phobic-heat.surge.sh/images/reactMovie_logo.png' />
        </Link>
        <img className={styles.logo2} src='https://phobic-heat.surge.sh/images/tmdb_logo.png' />
      </header>

      <main style={mainStyle} className={styles.main}>
        <article className={styles.article}>
          <h1 className={styles.h1}>Inside Out 2</h1>
          <p className={styles.p}>Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.</p>
        </article>
      </main>
    </>
  );
}

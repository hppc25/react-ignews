import Head from'next/head';
import styles from'./styles.module.scss';

export default function Posts(){
 return(
<>
      <Head>
        <title>Posts|Ignews</title>
                         
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href='#'>
            <time>12 de março de 2021</time>
            <strong>CreatingaMonorepo with Lerna Yarn Workspaces</strong>
            <p>Fusce a quam. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Pellentesque commodo eros a enim. Vivamus quis mi. Vestibulum fringilla pede sit amet augue.</p>
          </a>

          <a href='#'>
            <time>12 de março de 2021</time>
            <strong>CreatingaMonorepo with Lerna Yarn Workspaces</strong>
            <p>Fusce a quam. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Pellentesque commodo eros a enim. Vivamus quis mi. Vestibulum fringilla pede sit amet augue.</p>
          </a>

          <a href='#'>
            <time>12 de março de 2021</time>
            <strong>CreatingaMonorepo with Lerna Yarn Workspaces</strong>
            <p>Fusce a quam. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Pellentesque commodo eros a enim. Vivamus quis mi. Vestibulum fringilla pede sit amet augue.</p>
          </a>
        </div>
       </main>
       </>
 )
}                            
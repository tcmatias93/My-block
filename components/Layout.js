import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import Link from "next/link";
import utilStyle from "../styles/utils.module.css";

const nombre = "Matias Torres";
export const siteTitle = "next.js Sample website";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="ES UNA PRUEBA" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              property
              src="/images/matias.jpg"
              className={utilStyle.borderCircle}
              height={144}
              width={144}
              alt={nombre}
            />
            <h1 className={utilStyle.heading2x1}> {nombre} </h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  src="/images/matias.jpg"
                  className={utilStyle.borderCircle}
                  height={108}
                  width={108}
                  alt={nombre}
                />
              </a>
            </Link>

            <h2 className={utilStyle.headingLg}>
              <Link href="/">
                <a className={utilStyle.colorInherit}> {nombre} </a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main> {children} </main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>Back to Home</a>
          </Link>
        </div>
      )}
    </div>
  );
}

import Layout, { siteTitle, nombre } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Head from "next/head";
import Link from "next/link";
import Date from "../components/Date";

export default function Home({ allPostsData }) {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>
            Mi nombre es {nombre} soy una profesional comprometida con los objetivos que establecen las empresas, con el fin de aplicar competencias profesionales que impacten en el desarrollo del negocio. Tengo 20 años de experiencia en el área contable, administrativa y financiera.
          </p>
        </section>
        <section className={`${utilStyles.headingMg} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}> Blog </h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a> {title} </a>
                </Link>{" "}
                <br />
                <small className={utilStyles.lightText}>
                  {" "}
                  <Date dateString={date} />{" "}
                </small>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

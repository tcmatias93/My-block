import Head from "next/head";
import Link from "next/link";
import {useRouter} from 'next/router'
import getConfig from "next/config";


export default function Home({pseudoLocale}) {
  const {locale} = useRouter()
  const {publicRuntimeConfig: {sites, pseudoLocales}} = getConfig()
  
  const nextlocale = pseudoLocales.find(otherLocale => otherLocale !== pseudoLocale)
  const nextSiteNr = locale === 'matias' ? 'i7qup88f8' : '7hi2zva2h'

  /* console.log(nextSiteNr);
  console.log(nextlocale);
  console.log(sites[locale]);
  console.log(sites[locale].locales[pseudoLocale]) */
  
  const siteAndLocale = sites[locale] && sites[locale].locales[pseudoLocale]

  console.log(locale);


  return (
    <>
      <Head>
        <title>Paginas Multiples</title>
      </Head> 

      <main>
        <h1>{siteAndLocale ? siteAndLocale.title : `el sitio ${locale} no funciona`} </h1>
        {
          siteAndLocale && 
          <p>{siteAndLocale.description} </p>
        }

        <a href={`https://my-block-${nextSiteNr}-tcmatias93.vercel.app/`}>
          Matias
        </a>

        <Link href={`/${nextlocale}`}>
          <p>Lenguaje {pseudoLocale}</p>
        </Link>
      </main>
    </>
  );
}


export async function getStaticProps({params: {pseudoLocale= 'es'}, locale= 'matias'}){
  return {
    props: {
      pseudoLocale
    },
    revalidate: 60
  }
}

export async function getStaticPaths({locales}) {
  return{
    paths: [
      {params: {pseudoLocale: 'es'}, locale: 'matias'}
    ],
    fallback: true
  }
}

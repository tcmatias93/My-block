/**
 * @type {import('next').NextConfig}
 */

// conesto configuro mis sitios descripcion de lo que quiero que aparezca y dominios
const sites ={
    matias: {
      locales: {
        es: {title: 'Matias Torres', description: `Mi nombre es Matias Torres, soy un programador dando mis primeros pasos y aprendiendo nuevas tecnologias para poder insertarme en el mundo de la programacion`},
        en: {title: 'Matias Torres', description: `My name is Claudia Torres, I am a programmer taking my first steps and learning new technologies to be able to enter the world of programming.`}
      },
      domain: 'my-block-i7qup88f8-tcmatias93.vercel.app'
    },
    claudia: {
      locales: {
        es:{title: 'Claudia Torres', description:'Profesional comprometida con los objetivos que establecen las empresas, con el fin de aplicar competencias profesionales que impacten en el desarrollo del negocio. Tengo 20 años de experiencia en el área contable, administrativa y financiera. '},
        en:{title: 'Claudia Torres', description: 'Professional committed to the objectives established by companies, in order to apply professional skills that impact business development. I have 20 years of experience in the accounting, administrative and financial areas.'}
      },
      domain: 'my-block-7hi2zva2h-tcmatias93.vercel.app'
    }
}
const siteKeys = Object.keys(sites)

const pseudoLocales = ['es', 'en']


module.exports = {
  publicRuntimeConfig: {
    sites,
    pseudoLocales
  },


  i18n: {
    locales: siteKeys,
    defaultLocale: siteKeys[0],
    domains: siteKeys.map(siteKey => (
      {
        domain: sites[siteKey].domain,
        defaultLocale: siteKey
      }
    ))
  },


  redirects: () => (
    [
      {
        source: '/',
        destination: `/${pseudoLocales[0]}`,
        permanent: true
      }
    ]
  ),

  future: {
    webpack5: true
  }
}
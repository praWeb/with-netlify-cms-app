import Layout from '../components/layout'
import { attributes, html } from '../content/home.md'
import Head from 'next/head'

const Home = () => (
  <>
    <Head>
      <title>{attributes.title}</title>
      <meta property="og:title" content={attributes.title} key="title" />
    </Head>
    <Layout attributes={attributes}>
      <h1>{attributes.title}</h1>
      <img src={attributes.thumbnail} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <style jsx>{`
        h1,
        div {
          text-align: center;
        }
      `}</style>
    </Layout>
  </>
)

export default Home

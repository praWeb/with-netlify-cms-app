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
      <section className="flex-grid">
        <section className="col-1">
          <h1>{attributes.title}</h1>
          <img src={`/static${attributes.thumbnail}`} />
        </section>
      </section>
      <section className="flex-grid">
        <section className="col-1">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </section>
      </section>
    </Layout>
  </>
)

export default Home

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
      <section class="flex-grid">
        <section class="col-1">
          <h1>{attributes.title}</h1>
          <img src={attributes.thumbnail} />
        </section>
      </section>
      <section class="flex-grid">
        <section class="col-1">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </section>
      </section>
    </Layout>
  </>
)

export default Home

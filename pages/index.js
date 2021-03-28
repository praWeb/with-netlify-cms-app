import Layout from '../components/layout'
import Blog from '../components/blog-list'

import { attributes, html } from '../content/home.md'
import Head from 'next/head'

const importBlogPosts = async () => {
  // https://webpack.js.org/guides/dependency-management/#requirecontext
  const markdownFiles = require
    .context('../content/blogPosts', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2))

  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../content/blogPosts/${path}`)
      return { ...markdown, slug: path.substring(0, path.length - 3) }
    })
  )
}

export async function getStaticProps() {
  const postsList = await importBlogPosts()
  console.log(postsList)
  return {
    props: {
      postsList,
    }, // will be passed to the page component as props
  }
}

const Home = (props) => (
  <>
    <Head>
      <title>{attributes.title}</title>
      <meta property="og:title" content={attributes.title} key="title" />
    </Head>
    <Layout>
      <section className="flex-grid">
        <section className="col-1">
          <img src={`/static${attributes.thumbnail}`} />
        </section>
      </section>
      <section className="flex-grid">
        <section className="col-2">
          <Blog postsList={props.postsList}></Blog>
        </section>
        <section className="col-1">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </section>
      </section>
    </Layout>
  </>
)

export default Home

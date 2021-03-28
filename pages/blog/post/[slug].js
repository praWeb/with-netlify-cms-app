import fs from 'fs'
import path from 'path'
import Layout from '../../../components/layout'

const Post = ({ blogpost }) => {
  if (!blogpost) return <div>not found</div>

  const { html, attributes } = blogpost

  return (
    <Layout>
      <section>
        <section>
          <img src={attributes.thumbnail} class="margin-bottom-20 center"/>
        </section>
        <article class="article-container">
          <header>
            <h1 class="article__title text-center">{attributes.title}</h1>
          </header>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </section>
      <style jsx>{`
        article {
          margin: 0 auto;
        }
        h1 {
          text-align: center;
        }
      `}</style>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = fs
    .readdirSync(path.join(process.cwd(), 'content/blogPosts'))
    .map((blogName) => {
      const trimmedName = blogName.substring(0, blogName.length - 3)
      return {
        params: { slug: trimmedName },
      }
    })

  return {
    paths,
    fallback: false, // constrols whether not predefined paths should be processed on demand, check for more info: https://nextjs.org/docs/basic-features/data-fetching#the-fallback-key-required
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params

  const blogpost = await import(`../../../content/blogPosts/${slug}.md`).catch(
    () => null
  )

  return {
    props: {
      blogpost: blogpost.default,
    },
  }
}

export default Post

import Link from 'next/link'

const Blog = ({ postsList }) => (
  <>
		<section className="cards-container">
			{postsList.map((post) => (
				<article class="card" key={post.slug}>
					<Link href="/blog/post/[slug]" as={`/blog/post/${post.slug}`}>
						<a className="card__link">
							<img src={`/static${post.attributes.thumbnail}`} className="card-image" />
							<h2>{post.attributes.title}</h2>
						</a>
					</Link>
				</article>
			))}
		</section>
  </>
)

export default Blog

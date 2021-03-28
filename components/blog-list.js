import Link from 'next/link'

const Blog = ({ postsList }) => (
  <>
		<section className="cards-container">
			{postsList.map((post) => (
				<article className="card" key={post.slug}>
					<Link href="/blog/post/[slug]" as={`/blog/post/${post.slug}`}>
						<a className="card__link">
							<img src={`/static${post.attributes.thumbnail}`} className="card-image" />
							<h2>{post.attributes.title}</h2>
						</a>
					</Link>
					<div className="card-meta">
						<span className="card-meta__date"></span>
						<span className="card-meta__category"></span>
					</div>
					<header>
						<h1 className="card-title"> {post.title} </h1>
					</header>
					<p className="card-description">
						{post.attributes.short_summary}
					</p>
					{/* <div className="card__tag-container">
						<span>
							<b> Tagged </b>
						</span>
						<span className="card__tags"> Decluttering, Positivity </span>
					</div> */}
					<span className="card-readmore-link">
						<a href={`/blog/post/${post.slug}`} className="card__link">
							Read More 
						</a>
					</span>
				</article>
			))}
		</section>
  </>
)

export default Blog

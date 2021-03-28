import Link from 'next/link'
import globalStyles from './../styles/global.js'

const Layout = ({ children }) => (
  <>
    <div className="container">
      <nav>
        <Link href="/">
          <a>home</a>
        </Link>
        <Link href="/blog">
          <a>blog</a>
        </Link>
        <Link href="/about">
          <a>about</a>
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  </>
)

export default Layout

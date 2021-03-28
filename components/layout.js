import Link from 'next/link'
import globalStyles from './../styles/global.js'

const Layout = ({ children }) => (
  <>
    <div className="container">
      <main>{children}</main>
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  </>
)

export default Layout

import Link from "next/link"


const InlineLink = ({ href, children }) => {
  return (
    <Link
      className="text-primary-light
      dark:text-primary-dark
        font-bold
      hover:text-secondary-light
      hover:dark:text-secondary-dark"
      href={href}
      // target="_blank"
      // rel="noopener noreferrer"
    >
      {children}
    </Link>
  )
}

export default InlineLink
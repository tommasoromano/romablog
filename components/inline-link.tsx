import Link from "next/link"


const InlineLink = ({ href, children }) => {
  return (
    <Link
      className="
        font-bold
        underline
        decoration-primary-light
        dark:decoration-primary-dark
        hover:text-seconary-light
        dark:hover:text-seconary-dark
      "
      href={href}
      // target="_blank"
      // rel="noopener noreferrer"
    >
      {children}
    </Link>
  )
}

export default InlineLink
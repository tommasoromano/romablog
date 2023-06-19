type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  // return <div className="container mx-auto px-5">{children}</div>
  return <div className="divide-y divide-gray-200 dark:divide-gray-700">{children}</div>
}

export default Container

type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  // return <div className="container max-w-screen-md px-5">{children}</div>
  return (
    <div className="container mx-auto px-5">
      <div className="">
    {children}
      </div>
    </div>)
}

export default Container

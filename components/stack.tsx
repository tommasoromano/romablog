
type Props = {
  direction?: 'row' | 'col'
  spacing?: number
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  children: React.ReactNode
}

const Stack = ({ direction='col', spacing=2, justify='between', children }: Props) => {
  const s = direction === 'row' ? `space-x-${spacing}` : `space-y-${spacing}`
  return (
    <div className={`flex flex-${direction} justify-${justify} ${s} items-center`}>
      {children}
    </div>
  )
}

export default Stack
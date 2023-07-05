
type Props = {
  direction?: string, // 'row' | 'col'
  spacing?: string,
  justify?: string, // 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  items?: string, // 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  children: React.ReactNode
}

const justifyMap = {
  start: 'justify-start',
  end: 'justify-end',
  center: 'justify-center',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly'
}

const itemsMap = {
  start: 'items-start',
  end: 'items-end',
  center: 'items-center',
  baseline: 'items-baseline',
  stretch: 'items-stretch'
}

const Stack = ({ direction='col', spacing='2', justify='between', items='center', children }: Props) => {
  const s = direction === 'row' ? `space-x-${spacing}` : `space-y-${spacing}`
  // // const className = 'flex flex-' + direction + ' justify-' + justify + ' ' + s + ' items-' + items;
  // // `flex flex-${direction} justify-${justify} ${s} items-${items}`
  // const className = 'flex flex-row ' + justifyMap[justify] + ' ' + s + ' ' + itemsMap[items];
  // switch(direction) {
  //   // case 'row':
  //   //   return <div className={'flex flex-row '+className}>{children}</div>
  //   // case 'col':
  //   //   return <div className={'flex flex-col '+className}>{children}</div>
  //   default:
  //     return <div className={`flex flex-${direction} justify-${justify} ${s} items-${items}`}>{children}</div>
  // }
  return <div className={`flex flex-${direction} justify-${justify} ${s} items-${items}`}>{children}</div>
}

export default Stack
import { text } from "stream/consumers"

type Props = {
  variant?: string,
  component?: string,
  color?: string,
  children: JSX.Element | string
}

const fontSize = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-bold',
  h3: 'text-2xl font-bold',
  h4: 'text-xl font-bold',
  h5: 'text-lg font-bold',
  h6: 'text-base font-bold',
  p: 'text-base',
  span: 'text-base'
}

const textColor = {
  base: 'text-base-light-100 dark:text-base-dark-100',
  'base-content': 'text-base-light-content dark:text-base-dark-content',
  primary: 'text-primary-light dark:text-primary-dark',
  'primary-content': 'text-primary-light-content dark:text-primary-dark-content',
}

const margins = {
  h1: 'mt-16 mb-4',
  h2: 'mt-12 mb-4',
  h3: 'mt-8 mb-4',
  h4: 'mt-6 mb-4',
  h5: 'mt-4 mb-4',
  h6: 'mt-2 mb-4',
  p: 'mt-2 mb-4',
}

const Typography = ({ variant='p', component='p', color='base-content', children }: Props) => {

  const className = fontSize[variant] + ' ' + textColor[color];

  switch(component) {
    case 'h1':
      return <h1 className={className}>{children}</h1>
    case 'h2':
      return <h2 className={className}>{children}</h2>
    case 'h3':
      return <h3 className={className}>{children}</h3>
    case 'h4':
      return <h4 className={className}>{children}</h4>
    case 'h5':
      return <h5 className={className}>{children}</h5>
    case 'h6':
      return <h6 className={className}>{children}</h6>
    case 'p':
      return <p className={className}>{children}</p>
    case 'span':
      return <span className={className}>{children}</span>
    default:
      return <p className={className}>{children}</p>
  }
}

export default Typography
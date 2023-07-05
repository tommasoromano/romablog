import Link from 'next/link'
import Typography from './typography'
import ToggleTheme from './toggle-theme'
import Stack from './stack'
import ReadingSlider from './reading-slider'

const Header = () => {
  return (
    <>
    <div className='w-full h-28 justify-center items-center flex'>
    <Stack direction='row' justify='center' spacing="4">
      <Typography variant="h1" component="h1" color="primary">
        <Link href={'/'}>romablog</Link>
      </Typography>
      <ToggleTheme className='w-6 h-6 text-secondary-light dark:text-secondary-dark' />
    </Stack>
    </div>
    </>
  )
}

export default Header

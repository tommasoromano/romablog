import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import Link from 'next/link';
import InlineLink from './inline-link';
import Typography from './typography';
import Stack from './stack';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full h-28 flex justify-center items-center">
      <Stack>
        <Typography>
          <><strong>Tommaso Romano</strong> © {year.toString()} - All right reserved</>
        </Typography>
        <Typography>
          <>Made with <InlineLink href="https://nextjs.org/">Next.js</InlineLink> and <InlineLink href="https://tailwindcss.com/">Tailwind CSS</InlineLink></>
        </Typography>
      </Stack>
    </footer>
  )
}

export default Footer

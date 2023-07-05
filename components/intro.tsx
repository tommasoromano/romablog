import Container from "./container"
import InlineLink from "./inline-link"
import Stack from "./stack"
import Typography, { Strong } from "./typography"
import Image from 'next/image'


const Intro = () => {
  // italian flag emoji: 🇮🇹
  // hello world emoji: 👋🌎
  return (
    <Container>
      <div 
      className='max-w-xl mx-auto mb-32 mt-16'
      >
        <Stack spacing="16" direction="row">
          <Image
            src={'/assets/me_2023_05_final_rounded.png'}
            alt={`Tommaso Romano`}
            className="hover:animate-spin aspect-square rounded-full w-36 outline outline-4 outline-offset-4 outline-primary-light"
            width={500}
            height={500}
          />
          <Stack spacing="4" direction="col">
            <Typography variant="h5">
              <>Hey, I'm <Strong>Tommaso Romanò</Strong> 👋🇮🇹</>
            </Typography>
            <Typography variant="p">
              <>I'm a Software Engineer at <InlineLink 
              href="https://spectrum.ieee.org/amazon-warehouse-robots-2659064182">Amazon Robotics
              </InlineLink> in Berlin, Germany.
              </>
            </Typography>
          </Stack>
        </Stack>
      </div>
    </Container>
  )
}

export default Intro

import Stack from "./stack"
import Typography from "./typography"


const Intro = () => {
  return (
    <Stack
    direction="row"
    justify="between"
    >
      <Typography>
        <>Hi, I'm <strong>Tommaso</strong> 👋</>
      </Typography>
    </Stack>
  )
}

export default Intro

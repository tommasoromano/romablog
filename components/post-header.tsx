import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import type Author from '../interfaces/author'
import Typography from './typography'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <div className='max-w-2xl mx-auto'>
      {/* <div className="mb-8 md:mb-16 sm:mx-0"> */}
      <div className='mb-8 md:mb-16 sm:mx-0'>
      <CoverImage title={title} src={coverImage} />
      </div>
      {/* </div> */}
      {/* <PostTitle>{title}</PostTitle> */}
      <Typography variant='h1' component='h1'>
        {title}
      </Typography>
      {/* <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div> */}
      <div className="max-w-2xl mx-auto">
        {/* <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div> */}
        <div className="mb-6 italic">
          <Typography>
            <DateFormatter dateString={date} />
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default PostHeader

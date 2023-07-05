import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className="text-sm italic">
        <DateFormatter dateString={date} />
      </div>
      <h3 className="text-xl leading-snug font-bold">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:animate-pulse"
        >
          {title}
        </Link>
      </h3>
      {/* <p className="text-lg leading-relaxed mb-4">{excerpt}</p> */}
      {/* <Avatar name={author.name} picture={author.picture} /> */}
    </div>
  )
}

export default PostPreview

// import { remark } from 'remark'
// import html from 'remark-html'

import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkMath from 'remark-math'
import remarkRehype from 'remark-rehype'
import rehypeKatex from 'rehype-katex'
import rehypeStringify from 'rehype-stringify'

// import matter from 'gray-matter';
// import html from 'remark-html';
// import markdown from 'remark-parse';
// import math from 'remark-math';
// import htmlKatex from 'remark-html-katex';
// import {unified} from 'unified';

export default async function markdownToHtml(content: string) {
  // const result = await remark().use(html).process(content)
  // return result.toString();

  const res = await unified()
  .use(remarkParse)
  .use(remarkMath)
  .use(remarkRehype)
  .use(rehypeKatex)
  .use(rehypeStringify)
  .process(content);
  return res.toString();

  // const res = await unified()
  //   .use(markdown)
  //   .use(math)
  //   .use(htmlKatex)
  //   .use(html)
  //   .process(content);
  // return res.toString();

}

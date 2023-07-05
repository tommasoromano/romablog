import { remark } from 'remark'
import html from 'remark-html'
// import {remark} from 'remark';
// import remarkParse from 'remark-parse'
// import remarkMath from 'remark-math'
// import remarkHtmlKatex from 'remark-html-katex'
// import remarkHtml from 'remark-html'


export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown)

  // const result = await remark()
  //   .use(remarkParse)
  //   .use(remarkMath)
  //   .use(remarkHtmlKatex)
  //   .use(remarkHtml)
  //   .process(markdown);

  return result.toString();

}

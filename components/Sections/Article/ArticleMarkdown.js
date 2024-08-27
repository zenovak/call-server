import { NotFound } from '@components/Application/AccessControl';
import useSWRImmutable from 'swr/immutable';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { remarkAlert } from 'remark-github-blockquote-alert';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

/**
 * Renders a markdown document via a URI. Your markdown document must be within the `public/` directory\
 * Represents a full page component. Often used to render Privacy Policies etc.
 * @param {source} source URI to markdown file
 * @returns 
 */
export const ArticleMarkdown = ({source}) => {

    const fetcher = (...args) => fetch(...args).then(res => res.text());
    const { data, error, isLoading } = useSWRImmutable(source, fetcher);

    if (error) {
        return <NotFound />
    }

    return (
        <Markdown 
            className='prose lg:prose-lg xl:w-constant mx-auto max-w-none py-20 px-10'>
           {data}
        </Markdown>
    );
}
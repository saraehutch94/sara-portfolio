import Head from 'next/head'
import photo from '../public/portfolio_img.png'

function Meta(props) {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={props.keywords} />
            <meta name='description' content={props.description} />
            <meta property="og:title" content="<S3H>" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.s3h.dev/" />
            <meta property="og:image" content={photo} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
            <title>{props.title}</title>
        </Head>
    )
}

export default Meta
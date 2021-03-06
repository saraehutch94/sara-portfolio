import Head from 'next/head'

function Meta(props) {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={props.keywords} />
            <meta name='description' content={props.description} />
            <meta property="og:title" content="Portfolio: Sara Hutchinson" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.s3h.dev/" />
            <meta property="og:image" content='portfolio_img.png' />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
            <title>{props.title}</title>
        </Head>
    )
}

export default Meta
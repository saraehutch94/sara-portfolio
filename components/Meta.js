import Head from 'next/head'

function Meta(props) {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={props.keywords} />
            <meta name='description' content={props.description} />
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://metatags.io/"/>
            <meta property="og:title" content="Portfolio: Sara Hutchinson"/>
            <meta property="og:description" content=""/>
            <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://metatags.io/"/>
            <meta property="twitter:title" content="Portfolio: Sara Hutchinson"/>
            <meta property="twitter:description" content=""/>
            <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
            <title>{props.title}</title>
        </Head>
    )
}

export default Meta
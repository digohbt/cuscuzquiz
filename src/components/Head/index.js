import Head from 'next/head'

function IndexPage() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Head>
      <meta property="og:image" content="https://cuscuzquiz.vercel.app/"/>      </Head>
      <p>Hello world!</p>
    </div>
  )
}

export default IndexPage
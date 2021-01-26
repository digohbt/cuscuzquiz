import Head from 'next/head'

function IndexPage() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="CuscuzQuiz" key="title" />
      </Head>
      <Head>
      <meta property="og:image" content="blob:https://vercel.com/9e49b3b3-3821-4178-89a3-e040157271dd"/>      </Head>
      <p>Hello world!</p>
    </div>
  )
}

export default IndexPage
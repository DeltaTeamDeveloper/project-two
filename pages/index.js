import Head from 'next/head'
// import components
import Homebanner from '../components/Banner'
import Why from '@/components/Why'
import Agency from '@/components/Agency'
import Portfolio from '@/components/Portfolio'
import Unique from '@/components/Unique'
import Next from '@/components/Next'
import Contact from '../components/Contact'


export default function Home() {


  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="google-site-verification" content="90Ey_qYXNPX6Ubn6vTFe-C1Iq-3uPgP69ZNmSfckJZU" />
        <meta name="msvalidate.01" content="B2F5CD44F715E2885953E1B75D19ED7B" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <meta name="ahrefs-site-verification" content="477dd6bba6df5cbe29b3e72784e78d88841329f22877beb016f1dde2e4967124" />
        <title>Amazon Book Submission: Professional Book Publishing Services for Amazon</title>
        <meta name="description" content="Amazon Book Submission is the best book publishing & marketing service to start, grow and succeed in the book publishing industry. Get your books published today." />
        <meta name="keywords" content="Amazon Book Submission, publish book on Amazon" />
        <link rel="canonical" href="" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Amazon Book Submission: Professional Book Publishing Services for Amazon" />
        <meta property="og:description" content="Amazon Book Submission is the best book publishing & marketing service to start, grow and succeed in the book publishing industry. Get your books published today." />
        <link rel="canonical" href="" />
        <meta property="og:site_name" content="Book Writing" />
        <meta property="article:modified_time" content="2023-01-12T00:00:46+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="13 minutes" />
        <link rel="icon" href="/favicon.png" />
      </Head>


      <main>

        <div className='page-wrapper'>

          <Homebanner
            bannershome='banner'
          />

          <Why />

          <Agency />

          <Portfolio />

          <Unique />

          <Next />

          <Contact />

        </div>

      </main>
    </>
  )
}

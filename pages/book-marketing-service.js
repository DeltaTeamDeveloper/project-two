import Head from 'next/head'
// import components
import ServiceBanner from '@/components/ServiceBanner'
import ServiceBody from '@/components/ServiceBody'
import PolicyCTA from '@/components/PolicyCTA'
import Agency from '@/components/Agency'
import Portfolio from '@/components/Portfolio'
import Unique from '@/components/Unique'
import Next from '@/components/Next'
import Contact from '../components/Contact'
//
import img1 from '/public/images/resource/news-7.jpg'
import img2 from '../public/images/resource/featured-image-17.jpg'


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
                <title>Book Marketing Service by Amazon Book Submission</title>
                <meta name="description" content="Book Marketing Service by Amazon Book Submission is an all-in-one marketing service, which helps you in generating traffic, building your authority and brand equity, gaining more sales." />
                <meta name="keywords" content="book marketing service, Amazon Book Submission" />
                <link rel="canonical" href="" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Book Marketing Service by Amazon Book Submission" />
                <meta property="og:description" content="Book Marketing Service by Amazon Book Submission is an all-in-one marketing service, which helps you in generating traffic, building your authority and brand equity, gaining more sales." />
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

                    <ServiceBanner
                        title={<> BEST IN US <br />
                            <span>BOOK MARKETING & PROMOTION SERVICES</span> </>}
                        text={<> We know what all the different components of publishing a book entail and how each one should be handled, from writer's edits to setting up Amazon Sales Channel. </>}
                    />

                    <ServiceBody
                        img1={img1}
                        title1={<> MARKETING EXPERTISE & & STRATEGY DEVELOPMENT </>}
                        text1={<> Amazon Book Submission is a book marketing service that helps authors generate more sales, get more reviews, and get more attention. We have helped thousand of authors to make their books successful. Authors can submit a book, get insights on what their target audience would like to read and then get feedback on their cover, title, and blurb. </>}
                        img2={img2}
                        subtitle1={<> USE OUR LEADING BOOK MARKETING SERVICES TO MAKE YOUR BOOK MORE VISIBLE </>}
                        text2={<> In order to increase visibility of your book, you need to invest in marketing. The best way to do this is by using our leading book marketing services. We have helped many authors make their books more visible and sell more copies by using our book marketing services. Our team of experts has extensive knowledge about the market and use their expertise to help authors reach their target audience. </>}
                        title2={<> SUCCESSFUL CAMPAIGNS! </>}
                        subtext3={<> Many authors are not aware of the marketing campaign that goes into making a book successful. Amazon Book Submission is a book marketing agency that specializes in helping authors publish their books on Amazon. We have a team of experienced professionals who help authors with everything from writing to distribution. We also offer tips and advice on how to market your book and make it more successful. </>}
                        subtitle2={<> CONVINCING YOUR AUDIENCE! </>}
                        text3={<> Make sure that your target audience has the right expectations for your book by marketing it in ways that are consistent with the emotions you want them to experience when reading it. We have what it takes to convince them of your story's value. </>}
                    />

                    <PolicyCTA />

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

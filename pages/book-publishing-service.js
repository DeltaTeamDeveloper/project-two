import Head from 'next/head'
// import components
import ServiceBanner2 from '@/components/ServiceBanner2'
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
                <title>Get your book published with Amazon Book Submission</title>
                <meta name="description" content="We're Amazon Book Submission, a firm that helps authors, self-publishing and traditional publishers publish their work with the best book publishing service available." />
                <meta name="keywords" content="book publishing service, Amazon Book Submission" />
                <link rel="canonical" href="" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Get your book published with Amazon Book Submission" />
                <meta property="og:description" content="We're Amazon Book Submission, a firm that helps authors, self-publishing and traditional publishers publish their work with the best book publishing service available." />
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

                    <ServiceBanner2
                        title={<> PARTNER WITH THE TEAM </>}
                        subtitle={<> That’s On The Same Page As You </>}
                        text={<> If you are looking for a partner that is on the same page as you and can help you with your book publishing journey, Amazon Book Submission may be the answer. </>}
                    />

                    <ServiceBody
                        img1={img1}
                        title1={<> OFFERING THE BEST BOOK PUBLISHING PROCESS </>}
                        text1={<> Amazon Book Submission offers the best book publishing process for authors. We offer a team of professional editors and proofreaders to work with you on your book, as well as an in-house publishing team that handles the publication of your book. With over 10 years of experience in creating books and publishing them. We have a team of professionals who are experts at their craft and will help you create your book from start to finish. </>}
                        img2={img2}
                        subtitle1={<> SHARING YOUR STORIES WITH A GLOBAL AUDIENCE </>}
                        text2={<> Amazon Book Submission is a publishing service that helps authors to get their work published in the form of ebooks, hard copy, paperback & more. We also offer a variety of services such as editing, formatting, cover design, and marketing. </>}
                        subtext2={<> Amazon Book Submission is the company that helps you publish your work to multiple platforms easier. The team at Amazon Book Submission has a background in publishing and customer service and can help you publish with Amazon and more. We provide services such as book editing, formatting, cover design and book marketing. We help authors across the globe publish their books. Our services are designed to help you get your work out there in as many formats as possible and make sure you have more options when it comes to marketing. </>}
                        title2={<> PUBLISH, PRINT, AND PROSPER </>}
                        subtext3={<> With our Print-On-Demand service, you can publish, print, and sell your books internationally while removing the risk and complexity of inventory and fulfilment. </>}
                        text3={<> Amazon Book Submission is an independent publishing consultancy based in the US. We help authors and publishers succeed with their publishing ventures by providing services such as editing, design, marketing, and distribution. Our agency has been particularly successful with their self-publishing division which has helped hundreds of authors break into the industry. </>}
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

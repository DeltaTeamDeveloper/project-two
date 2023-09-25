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
                <title>Book Cover Design Service by Expert Illustrators | Amazon Book Submission</title>
                <meta name="description" content="Get creative book cover design, illustration and graphic design services by team of illustrators & designers. We design book covers that attract the readers." />
                <meta name="keywords" content="book cover design service, Amazon Book Submission" />
                <link rel="canonical" href="" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Book Cover Design Service by Expert Illustrators | Amazon Book Submission" />
                <meta property="og:description" content="Get creative book cover design, illustration and graphic design services by team of illustrators & designers. We design book covers that attract the readers." />
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
                        title={<> DESIGN THAT TELL’S THE COMPLETE STORY <br />
                            <span>WE ILLUSTRATE THE MOST CREATIVE BOOK COVER DESIGN</span> </>}
                        text={<> From the creative minds of Amazon Book Submission, get the most creative book cover design. </>}
                    />

                    <ServiceBody
                        img1={img1}
                        title1={<> HIRE AFFORDABLE BOOK COVER DESIGN SERVICES NOW </>}
                        text1={<> Amazon Book Submission is a leading book cover design company that offers an affordable, professional book cover design services. We have been in the business for over ten years and has worked with a wide variety of clients. , including authors, book publishers, self-publishers and more. We offer a wide range of services that can be customized to your needs. Our team has been working with authors in publishing and has created hundreds of covers for both fiction and non-fiction books. </>}
                        img2={img2}
                        subtitle1={<> MAKE YOUR BOOK COVER STAND OUT! </>}
                        text2={<> The book cover is the first thing that people will see when they are browsing books on internet, so it should be eye-catching and engaging at the same time. If you want to make sure that your book gets more visibility on Amazon or other platforms, then you need to make sure that your cover stands out from the competition! </>}
                        title2={<> GET A BOOK COVER THAT SELLS! </>}
                        subtext3={<> As a publishing agency, we have seen many book covers that don't sell well. But we have also seen book covers that are so beautiful and unique that they sell like crazy. The key to a great cover is finding the right balance between beauty and personality. It's not just about having a pretty picture but also about having an original story behind it. </>}
                        text3={<> Since the book cover is the first impression that you are making, it should be professional and professional looking. But, don’t make your cover too complicated. If the reader doesn’t understand what your book is about at a glance, then they might not give it a second look. </>}
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

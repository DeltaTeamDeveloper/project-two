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
                <title>Book Printing and Publishing Services by Amazon Book Submission</title>
                <meta name="description" content="Amazon Book Submission is one of the most trusted publishing and printing service providers. We offer design, writing, publication and marketing services for your book publishing project." />
                <meta name="keywords" content="book printing service, Amazon Book Submission" />
                <link rel="canonical" href="" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Book Printing and Publishing Services by Amazon Book Submission" />
                <meta property="og:description" content="Amazon Book Submission is one of the most trusted publishing and printing service providers. We offer design, writing, publication and marketing services for your book publishing project." />
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
                        title={<> BOOK PRINTING SERVICES <br />
                            <span>WITH AMAZON BOOK SUBMISSION</span> </>}
                        text={<> Amazon Book Submission is a book printing service provider that allows authors to print their books on demand. We offer a variety of services including hardcover and paperback, full color, perfect binding, and many more. </>}
                    />

                    <ServiceBody
                        img1={img1}
                        title1={<> YOU HAVE THE BEST BOOK PRINTING SERVICES STAFF ON YOUR SIDE </>}
                        text1={<> Amazon Book Submission is a book printing service provider that has been producing high-quality books for over a decade. We have the best team in the industry which helps us provide exceptional services that are on par with their competitors. Amazon Book Submission has a wide range of services, including ebook production, print on demand and digital marketing. We also offer custom publishing packages with customized cover design and interior layout. </>}
                        img2={img2}
                        subtitle1={<> TOP-QUALITY BOOK PRINTING AND DELIVERY SERVICES AT AMAZON BOOK SUBMISSION </>}
                        text2={<> Amazon Book Submission offers book printing and delivery services at a reasonable price. They have been providing top-quality book printing and delivery services since 2011. We specialize in producing high-quality paperbacks for all levels of readership from children to professional authors. </>}
                        title2={<> BINDING, PAPER & PAGE COUNT </>}
                        subtext3={<> When you place your book printing order, you will choose the binding style, paper type, and page count. Different type binding styles have different prices, and increasing the amount of pages can also raise the price. </>}
                        subtitle2={<> WHY PRINT YOUR BOOK WITH AMAZON BOOK SUBMISSION? </>}
                        text3={<> For your book, Amazon Book Submission provides the world's quickest book printing. We take pleasure in consistently delivering on our commitment to complete your book printing order quickly. But that's not all we're good at! Customers adore our high-quality goods, pleasant and supportive customer service, and large selection of printing options and customizations. It's a combination that self-publishers can't find anyplace else! </>}
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

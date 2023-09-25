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
                <title>Top-Quality Book Editing and Proofreading Service by Experts | Amazon Book Submission</title>
                <meta name="description" content="Our editors, proofreaders and writers are highly qualified. Our mission is to provide a top-quality book editing and proofreading service with affordable prices." />
                <meta name="keywords" content="book editing service, proofreading service, Amazon Book Submission" />
                <link rel="canonical" href="" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Top-Quality Book Editing and Proofreading Service by Experts | Amazon Book Submission" />
                <meta property="og:description" content="Our editors, proofreaders and writers are highly qualified. Our mission is to provide a top-quality book editing and proofreading service with affordable prices." />
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
                        title={<> PROFESSIONAL EDITING <br />
                            <span>& PROOFREADING SERVICES</span> </>}
                        text={<> We are a team of experienced professionals who have helped thousands of authors and publishers with their manuscript needs. </>}
                    />

                    <ServiceBody
                        img1={img1}
                        title1={<> 100% QUALITY GUARANTEED PROOFREADING SERVICE </>}
                        text1={<> When it comes to editing your content, you'll want to choose the best proofreading service to edit your text. There are many options out there, but we've had the most success with Amazon. We are a publishing agency that specializes in book editing and proofreading services. We offer a 100% quality guarantee on all our editing and proofreading services. </>}
                        img2={img2}
                        subtitle1={<> TOP-NOTCH QUALITY SERVICES </>}
                        text2={<> Amazon Book Submission offers top-notch quality services for authors and publishers. We offer proofreading services for manuscripts, book editing services, and professional publishing guidance for self-publishers. The services we offer for authors and publishers include, proofreading services for manuscripts, book editing services, and professional publishing guidance for self-publishers. </>}
                        title2={<> EDITING & PROOFREADING PROCESS </>}
                        subtitle2={<> 1- PROOFREADERS SPECIALIZED </>}
                        text3={<> Amazon Book Submission is a book editing service that has been providing proofreading services for authors and publishers. Amazon Book Submission is one of the largest publishing houses in the United States. We are also one of the leading providers of proofreading services for authors. We have helped many authors and publishers with their book editing & proofreading needs. </>}
                        subtitle3={<> 2- CUSTOMIZED SERVICE </>}
                        text4={<> Amazon Book Submission has an expert team that provides proofreading and book editing services for your business. We offer custom-tailored solutions for your needs and can handle any type of project with ease. Amazon Book Submission offers full-service publishing solutions that are suitable for all types of businesses, including self-publishing, publishing on Amazon or other platforms, and print publishing. </>}
                        subtitle4={<> 3- COMMUNICATION WITH CLIENT </>}
                        text5={<> Each customer is valuable to us, and each project is distinct. We place a specific emphasis on customer contact and keep you informed throughout the book proofreading process so that we can give the essential service without compromising. </>}
                        subtitle5={<> 4- APPROVED DESIGN AND PUBLICATION </>}
                        text6={<> The Amazon Book Submission is a publishing agency that provides services to authors and publishers. We have an extensive portfolio of successful books and they are now expanding their services to include design and publication. Following your approval, the finished design and draught are delivered to our formatting and design executives for further processing. </>}
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

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
                <title>E-Book Writing and Publishing Services | Amazon Book Submission</title>
                <meta name="description" content="If you're looking for a professional writing service, or you need help with your next book or e-book, then let our expert ghostwriters take care of the heavy lifting." />
                <meta name="keywords" content="Book Writing Service, Amazon Book Submission" />
                <link rel="canonical" href="" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="E-Book Writing and Publishing Services | Amazon Book Submission" />
                <meta property="og:description" content="If you're looking for a professional writing service, or you need help with your next book or e-book, then let our expert ghostwriters take care of the heavy lifting." />
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
                        title={<> The only book writing and publishing agency <br />
                            <span>with a decade-long track record of success</span> </>}
                        text={<> With over 2,400 published books in our portfolio, <br />Amazon Book Submission is the best choice for your publishing project. </>}
                    />

                    <ServiceBody
                        img1={img1}
                        title1={<> We can Write, Publish and Announce Your Book to the World! </>}
                        text1={<> Our team of professionals love working with authors, publishers and self-publishers alike to bring their vision to life. We have had a decade of success with authors and publishers in the US who have trusted us with their most important projects. Our expertise is in producing high quality works that are designed to succeed in today's competitive publishing market. </>}
                        img2={img2}
                        subtitle1={<> Book Writing & Publishing Services </>}
                        text2={<> As professional team, we create content that has never been seen before – not just because it's technically brilliant but because it tells your story in a unique way. We can help you bring your book from idea to finished product by helping you describe what you want it to be like, editing & proofreading your manuscript, formatting for print or eBook, design & layout, book cover design and more. </>}
                        title2={<> It's Time to Share Your Incredible Story! </>}
                        subtitle2={<> Expert Writers Produce Professional High-Quality Ebooks </>}
                        text3={<> With the invention of ebooks and the digital age, consumers are able to access information on their terms. Nowadays, it's easier than ever to find professional high-quality ebooks. The only drawback is that it's difficult to find an expert writer who can create a book in a timely manner without sacrificing quality. This is where Amazon Book Submission comes in. Amazon Book Submission is a company that's dedicated to creating high quality ebooks, which are then sold on Amazon. Our agency is perfect for people who want their book to be professionally written and formatted by an expert author while they can take the time they need to edit the book. This ensures that their nascent business or idea will get published in a timely manner without compromising their quality. Amazon Book Submission is perfect for people who want to share their expertise with the world. With over a million titles available in Amazon, it's easy to find an audience that will appreciate and admire your work. </>}
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

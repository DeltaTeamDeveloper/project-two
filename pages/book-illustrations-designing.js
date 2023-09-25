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
                <title>Best Book Illustrations Service at The Lowest Price | Amazon Book Submission</title>
                <meta name="description" content="We offer the best book illustration services for both authors and publishers. Our illustrations are a beautiful, affordable solution to your production needs." />
                <meta name="keywords" content="book illustration service, Amazon Book Submission" />
                <link rel="canonical" href="" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Best Book Illustrations Service at The Lowest Price | Amazon Book Submission" />
                <meta property="og:description" content="We offer the best book illustration services for both authors and publishers. Our illustrations are a beautiful, affordable solution to your production needs." />
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
                        title={<> WE CREATE BEAUTIFUL ILLUSTRATIONS <br />
                            <span>FOR YOUR BOOK</span> </>}
                        text={<> Our team of illustrators understand the importance of visuals in your marketing campaign. We will draw and write captivating images for your book, which will help take it to the next level. </>}
                    />

                    <ServiceBody
                        img1={img1}
                        title1={<> WE HAVE A TEAM OF THE BEST ILLUSTRATORS </>}
                        text1={<> Amazon Book Submission is a company that provides illustration services to their clients. We have a team of the best illustrators for hire. As we know, illustration is not just a job but an art form that requires years of practice and experience. This means that illustrators need to be paid well in order to continue working with such high standards. </>}
                        subtext1={<> The Amazon Book Submission has been providing illustration services for over 10 years and they have hired some of the best illustrators who are now working on projects like children's books, magazines, ads, etc. </>}
                        img2={img2}
                        subtitle1={<> BOOK ILLUSTRATION SERVICES AT AN AFFORDABLE PRICE </>}
                        text2={<> To keep things simple, we have fixed price per illustration. This means you'll know precisely what you're paying for your book drawings up front, with no unpleasant surprises. Every illustration job includes skilled project management as well as three rounds of revisions to ensure that your illustration is flawless. </>}
                        title2={<> BOOK ILLUSTRATION THAT LEAVES AN INSTANT IMPACT </>}
                        subtext3={<> Amazon Book Submission is a publishing company that creates book illustrations and covers for authors. The company is able to create illustrations with an instant impact, which helps the author instantly convey a message without the need of words. Book illustrations are created by artists, such as drawings or sketches. Book covers vary in style depending on whether they are for a fiction or nonfiction book and involve designing the cover with the text and cover art. The authors and illustrators associated with Amazon Book Submission will offer insight into how they work with their own book covers, as well as provide information on the various types of book covers. </>}
                        text3={<> Amazon Book Submission provides illustrations for all types of books including children's books, educational books, and adult books. We also provide a variety of illustrations and themes to choose from. You can even order your own custom illustration if you want! </>}
                        text4={<> There are many companies that offer book illustration services, but Amazon Book Submission is a company that offers the best prices on their services with great customer service. </>}
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

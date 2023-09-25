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
                <title>Author Website Development Service by Amazon Book Submission</title>
                <meta name="description" content="Get your author website up and running in minutes with our easy-to-use layouts that can be tweaked to fit your needs. Author website service is created for self-publishing authors who need help with publishing their books." />
                <meta name="keywords" content="author website development service, Amazon Book Submission" />
                <link rel="canonical" href="" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Author Website Development Service by Amazon Book Submission" />
                <meta property="og:description" content="Get your author website up and running in minutes with our easy-to-use layouts that can be tweaked to fit your needs. Author website service is created for self-publishing authors who need help with publishing their books." />
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
                        title={<> MAKE YOUR ONLINE PRESENCE REMARKABLE <br />
                            <span>WITH OUR EXPERT SERVICES</span> </>}
                        text={<> Amazon Book Submission has been providing expert services to help businesses grow online. Our experts are experienced in web development, online marketing, search engine optimization and content marketing. </>}
                    />

                    <ServiceBody
                        img1={img1}
                        title1={<> MODERN WEBSITE DESIGNS THAT ARE BREATHTAKING </>}
                        text1={<> Amazon Book Submission is a leading publishing company that primarily publishes eBooks and other digital content. The website design trends have also changed in the recent years. Modern websites are more interactive and engaging than ever before. </>}
                        subtext1={<> With the internet constantly evolving, it is important for companies to keep up with the latest trends in web design. Companies that do not invest in website design will be left behind and will struggle to compete with those who do. </>}
                        img2={img2}
                        subtitle1={<> WHY AMAZON BOOK SUBMISSION IS THE PERFECT FIT FOR YOU? </>}
                        text2={<> Amazon Book Submission is a leading book marketing company. They help authors to promote their books and get them noticed by the right audience. </>}
                        subtext2={<> Our services are designed to help you focus on your content and not on the marketing aspect of publishing. We offer you a wide range of services that will help you create, publish, and market your book. Amazon Book Submission has been around for more than 10 years, providing quality services to clients from different industries. We are known to be a reliable company that can deliver what they promise on time. </>}
                        title2={<> WHY IS IT IMPORTANT TO HAVE AN AUTHOR WEBSITE? </>}
                        subtext3={<> The author website is the first place people come to when they want to learn more about the author or their work. It should also be the place where people can find out about future events and releases of the author's books. </>}
                        text3={<> Author websites are a great way for authors to promote their work and get more readers. They provide a platform for authors to connect with their audience, as well as share news, book releases, and other updates with them. </>}
                        text4={<> Authors who wish to get noticed need an author website that is easy-to-navigate, informative, and professional looking. </>}
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

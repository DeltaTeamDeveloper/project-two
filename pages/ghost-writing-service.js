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
                <title>Best Ghost Writing Service Near You | Amazon Book Submission</title>
                <meta name="description" content="Best Ghost Writing Service Near You. We are the best Amazon Book Submission in your city. Our writers are professional and affordable." />
                <meta name="keywords" content="ghost writing service, Amazon Book Submission" />
                <link rel="canonical" href="" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Best Ghost Writing Service Near You | Amazon Book Submission" />
                <meta property="og:description" content="Best Ghost Writing Service Near You. We are the best Amazon Book Submission in your city. Our writers are professional and affordable." />
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
                        title={<> The Most Professional Ghostwriting Services </>}
                        subtitle={<> Amazon Book Submission </>}
                        text={<> Want to write a book? Do you have a novel, memoir, or even an academic paper that
                            you need help <br /> with?" Feel free to contact us. </>}
                    />

                    <ServiceBody
                        img1={img1}
                        title1={<> REMARKABLE GHOSTWRITING SERVICES </>}
                        text1={<> Amazon Book Submission is one of the most professional ghostwriting services provider. We provide a wide range of writing services for authors, including editing, proofreading, and research. Our team includes top-notch writers who are experts in their respective fields such as business, health and fitness, lifestyle and parenting as well as fiction. </>}
                        subtext1={<> Amazon Book Submission is also known for their quick turnaround time - we can deliver work within 48 hours! </>}
                        img2={img2}
                        subtitle1={<> CHOOSE OUR SERVICES </>}
                        text2={<> Amazon Book Submission offers affordable rates, reliable and quality service, and quick turnarounds. We are the most affordable option for your next book project. We have a team of professional writers who can write any type of book for you, from fiction to non-fiction. We can also write children's books, novels and short stories, poetry, plays and screenplays. </>}
                        subtext2={<> Choose our services to get your next project done the right way at an affordable price! </>}
                        title2={<> OUR EXPERTISE IN GHOSTWRITING SERVICES </>}
                        subtext3={<> You may have an idea for the next best-seller, but you may not have the time or ability to write it yourself. Our platform meets all of the standards and offers a diverse range of writing styles, including: </>}
                        subtitle2={<> NON-FICTION </>}
                        text3={<> Nonfiction writing is very important since truth is always appealing to its audience. They are crucial in everyone's life since nothing may be more felt than the truth that is seen to the eyes. </>}
                        subtitle3={<> BIOGRAPHY </>}
                        text4={<> Writing a biography begins with extensive research, which includes gathering and compiling all accessible materials such as newspapers, magazines, interviews, and/or any other document that provides a valid look into the subject's life. </>}
                        subtitle4={<> FICTION </>}
                        text5={<> Our Fiction Ghostwriters will transform your ideas into captivating literary works that will captivate readers. The author's main storyline is given special care, ensuring that it does not veer from its course. </>}
                        subtitle5={<> INFORMATIVE </>}
                        text6={<> Our ghostwriters understand the nuances of your material, so they make certain to produce information that is correct and in accordance with the facts and numbers that are available and well recognized worldwide. </>}
                        subtitle6={<> MEMOIRS </>}
                        text7={<> Our ghostwriters have been taught to write memoirs rather than autobiographies, which are occasionally used interchangeably by other writers. As a result, you may hire us to ghostwrite any type of memoir. </>}
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

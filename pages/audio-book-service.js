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
import img1 from '/public/images/resource/audio.jpg'
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
                <title>Streamline Your Audio Book Production with Our Services | Amazon Book Submission</title>
                <meta name="description" content="Amazon Book Submission provides Professional Voice Overs, High-Quality Audio Book Narration, & Audio Book Publishing Service to help you make your book a success." />
                <meta name="keywords" content="audio book service, audio book narration service, audio book publishing service" />
                <link rel="canonical" href="" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Streamline Your Audio Book Production with Our Services | Amazon Book Submission" />
                <meta property="og:description" content="Amazon Book Submission provides Professional Voice Overs, High-Quality Audio Book Narration, & Audio Book Publishing Service to help you make your book a success." />
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
                        title={<> GET YOUR BOOK HEARD </>}
                        subtitle={<> Publish Your Audio Book on Amazon </>}
                        text={<> Create your audio book with our professional voice actors and authors. Let your voice be heard. Put your words on the pages of an audiobook, get it published on Amazon, and you will be able to reach millions of listeners. </>}
                    />

                    <ServiceBody
                        img1={img1}
                        title1={<> READY TO TURN YOUR MANUSCRIPT INTO A BEST-SELLING AUDIO BOOK? </>}
                        text1={<> Achieve more success on Amazon with an audio book narration! Publish your story on Amazon, become a bestseller, and be able to reach millions of listeners. </>}
                        subtext1={<> We know what it takes to produce a great audiobook. With our award-winning production team, we can turn any type of story into an unforgettable audio experience. Whether you're an author or publisher, we've got you covered! </>}
                        img2={img2}
                        subtitle1={<> JOIN THE BEST AUDIOBOOK PUBLISHING SERVICE </>}
                        text2={<> If you have a story you want to share with the world as an audiobook, don't do it alone. Let our team of experts handle the narration and production so you can focus on what matters most - your content. We have access to top voice talent, equipment, and editing tools that will help your stories come alive. </>}
                        title2={<> PUBLISH AUDIO BOOKS ON AMAZON </>}
                        subtext3={<> We help you turn your manuscript into an audiobook on Amazon, and provide the necessary services to create a finished product. - Get an editor to polish your book before publication </>}
                        text3={<> We specialize in audio books narration and audio book production for both fiction and non-fiction books. Our services are unparalleled, and we offer an affordable solution that works well for authors on tight budgets too. </>}
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

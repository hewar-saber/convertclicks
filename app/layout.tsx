import './globals.css'
import Header from '@/components/Header/Header'
import { Metadata } from 'next'
import Script from 'next/script'
import { GeistSans } from 'geist/font/sans'
import Footer from '@/components/Footer/Footer'

const title = 'ConvertClicks'
const description =
    'Get a high converting landing page that turns clicks into sales'
const url = process.env.WEBSITE_URL
const images = [
    {
        url: `${process.env.WEBSITE_URL}/images/og.png`,
        alt: title,
        width: 1000,
        height: 500
    }
]
export const metadata: Metadata = {
    title,
    description,
    openGraph: {
        type: 'website',
        url,
        title,
        description,
        images
    },
    twitter: {
        card: 'summary_large_image',
        title,
        images
    },
    publisher: 'ConvertClicks',
    category: 'Business',
    keywords: [
        'ConvertClicks',
        'Web design',
        'Web design agency',
        'Landing page design',
        'Landing page',
        'Website design',
        'Website',
        'Web development',
        'High converting website',
        'High converting landing page',
        'High converting',
        'High converting design',
        'High converting web design'
    ],
    alternates: {
        canonical: process.env.WEBSITE_URL
    }
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <head>
                {/* Favicon stuff */}

                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='/apple-touch-icon.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/favicon-16x16.png'
                />
                <link rel='manifest' href='/site.webmanifest' />
                <link
                    rel='mask-icon'
                    href='/safari-pinned-tab.svg'
                    color='#5bbad5'
                />
                <meta name='msapplication-TileColor' content='#303030' />
                <meta name='theme-color' content='#ffffff' />
            </head>
            <body className={GeistSans.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}

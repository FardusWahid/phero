import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Acs courses",
  description: "Acs Engineering Private Batch 2024",
  keywords: "Acs Engineering 24, Acs Engineering free, Acs varsity, Buet admission 24 , ACS, acs course discount, Acs coupon code, Acs engineering promo, free course, Acs Lecture sheets, Acs pdf, Acs Practice sheets, Acs 24, Hsc 2024, Hsc routine 2024, Hsc routine 24, Acs pdf, Hsc shot syllabus, Hsc admission, Admission Course, Dhaka, Admission coaching Dhaka, Admission coaching, Admission 24, Free Class admission, Udvash, ACS, Bangladesh",
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
            <head>
        <meta charSet="UTF-8" />
        <meta name="google-site-verification" content="5A6r0nl48WzkentBg3bhahhCZxhXM90Bl2_eQ6q9vzk" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <title>{metadata.title}</title>
        
      </head>
      <body className={inter.className}>
        {children}
        </body>
    </html>
  )
}

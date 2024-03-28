'use client'

import { Banner } from '@/components/Banner/Banner'
import { ContactFormDialog } from '@/components/ContactFormDialog'
import { useEffect, useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [contactFormOpen, setContactFormOpen] = useState(false)
  const [isFormSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isSubmitted =
        window.localStorage.getItem('isFormSubmitted') === 'true'
      setFormSubmitted(isSubmitted)
    }
  }, [])

  const openContactForm = () => setContactFormOpen(true)
  const closeContactForm = () => setContactFormOpen(false)
  const handleFormSubmitted = (message: string) => {
    console.log('Form submitted with message:', message)
    localStorage.setItem('isFormSubmitted', 'true')
    localStorage.setItem('formMessage', message)
    setFormSubmitted(true)
  }

  const bannerContent = isFormSubmitted ? (
    <p>
      We received your messge. Please feel free to get in touch again if you
      would like to include any further details or ask any other questions. We
      are eager to assist you.
    </p>
  ) : (
    <div className={styles.bannerContent}>
      <p>
        Please get in touch if you would like an expert report for this site.
        Benefits include:
      </p>
      <ul>
        <li>Key insights from our expert team</li>
        <li>An in-depth analysis of the site</li>
        <li>Recommendations of next steps to take</li>
      </ul>
    </div>
  )

  const bannerButtonText = isFormSubmitted
    ? 'Send another message'
    : 'Get In Touch'

  const bannerTitleText = isFormSubmitted
    ? 'Expert Report Requested'
    : 'Expert Report'

  const bannerSubitleText = isFormSubmitted ? '' : 'Next step'

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
      </div>

      <div className={styles.placeholder}>
        <Banner
          imageSrc='/images/blue-bg.png'
          iconSrc='/images/report.svg'
          title={bannerTitleText}
          subtitle={bannerSubitleText}
          contentComponent={bannerContent}
          buttonText={bannerButtonText}
          onButtonClick={openContactForm}
        />
      </div>

      <ContactFormDialog
        open={contactFormOpen}
        onClose={closeContactForm}
        onFormSubmitted={handleFormSubmitted}
      />
    </main>
  )
}

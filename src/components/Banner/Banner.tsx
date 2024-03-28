'use client'

import { Card, CardActions, CardContent } from '@mui/material'
import Image from 'next/image'

import { ReactElement } from 'react'
import { Button } from '../Button/Button'
import styles from './Banner.module.css'

interface BannerProps {
  imageSrc: string
  iconSrc: string
  title: string
  subtitle?: string
  contentComponent: ReactElement
  buttonText: string
  onButtonClick: () => void
}

export const Banner: React.FC<BannerProps> = ({
  imageSrc,
  iconSrc,
  title,
  subtitle,
  contentComponent,
  buttonText,
  onButtonClick,
}) => {
  return (
    <Card className={styles.banner}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={imageSrc} alt={title} fill />
        <div className={styles.imageOverlayText}>
          <Image
            className={styles.icon}
            src={iconSrc}
            alt={title}
            width={52}
            height={56.8}
          />
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          <h2 className={styles.title}>{title}</h2>
        </div>
      </div>
      <CardContent className={styles.bannerContent}>
        {contentComponent}
      </CardContent>
      <CardActions className={styles.bannerActions}>
        <Button
          variant='primary'
          onClick={onButtonClick}
          className={styles.bannerButton}
        >
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  )
}

import { WithArrow } from '../Buttons/Buttons'
import LinkWrapper from '../LinkWrapper/LinkWrapper'
import styles from './CaseStudies.module.scss'
import Image from 'next/image'

export default function CaseStudies() {
    return (
        <div className={styles.cards}>
            <figure>
                <Image
                    src='/images/aic-website.webp'
                    alt='Web design & SEO for AIC Roofing'
                    width={800}
                    height={500}
                    layout='responsive'
                    sizes='(max-width: 900px) 100vw, 50vw'
                    loading='lazy'
                />
                <figcaption>
                    <b className={styles.title}>
                        Web design and SEO for{' '}
                        <LinkWrapper>
                            <a
                                href='https://afritechcons.com'
                                target='_blank'
                                rel='noreferrer nofollow
				'
                            >
                                AIC Roofing
                            </a>
                        </LinkWrapper>
                    </b>
                    <p>
                        We built a fast & beautiful website for AIC Roofing to
                        help them get more roofing leads.
                    </p>
                    <WithArrow
                        href='https://afritechcons.com/'
                        type='secondary'
                        newTab
                    >
                        Visit Website
                    </WithArrow>
                </figcaption>
            </figure>
            <figure>
                <Image
                    src='/images/Fotballbilletter-website.webp'
                    alt='Web design & SEO for Fotballbilletter.no'
                    width={800}
                    height={500}
                    layout='responsive'
                    sizes='(max-width: 900px) 100vw, 50vw'
                    loading='lazy'
                />
                <figcaption>
                    <b className={styles.title}>
                        Web design for{' '}
                        <LinkWrapper>
                            <a
                                href='https://fotballbilletter.no'
                                target='_blank'
                                rel='noreferrer nofollow
				'
                            >
                                Fotballbilletter.no
                            </a>
                        </LinkWrapper>
                    </b>
                    <p>
                        We built a fast & beautiful website for
                        Fotballbilletter, now they rank on Google, get sales and
                        save time with the CMS features
                    </p>
                    <WithArrow
                        href='https://fotballbilletter.no/'
                        type='secondary'
                        newTab
                    >
                        Visit Website
                    </WithArrow>
                </figcaption>
            </figure>
            <figure>
                <Image
                    src='/images/Fotballbilletter-visual-identity.webp'
                    alt='Web design & SEO for Fotballbilletter.no'
                    width={800}
                    height={500}
                    layout='responsive'
                    sizes='(max-width: 900px) 100vw, 50vw'
                    loading='lazy'
                />
                <figcaption>
                    <b className={styles.title}>
                        Visual Identity for{' '}
                        <LinkWrapper>
                            <a
                                href='https://fotballbilletter.no'
                                target='_blank'
                                rel='noreferrer nofollow
                            '
                            >
                                Fotballbilletter.no
                            </a>
                        </LinkWrapper>
                    </b>
                    <p>
                        We created a visual identity that consists a joyful set
                        of colors and a great logo that immediately makes if
                        known that this is football ticket service.
                    </p>
                    <WithArrow
                        href='/projects/fotballbilletter-visual-identity'
                        type='secondary'
                    >
                        Read Case Study
                    </WithArrow>
                </figcaption>
            </figure>
        </div>
    )
}

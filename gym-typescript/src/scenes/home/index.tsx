import React from 'react'
import { SelectedPage } from "@/shared/types"
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import Mizuno from "@/assets/Mizuno.jpeg"
import SponsorRedbull from "@/assets/SponsorRedbull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    return (
        <section
            id="home"
            className='gap-16 bg-gray20 py-10 md:h-full md:pb-0'>
            {/*Image and Main Header*/}
            <motion.div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
                {/*Main Header*/}
                <div className='z-10 mt-32 md:basis-3/5'>
                    {/*Headings*/}
                    <motion.div className='md:-mt-20'
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}>
                        <div className='relative'>
                            <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext'>
                                {/* <img src={HomePageText} alt="home-page-text" /> */}
                            </div>
                        </div>
                        <p className='mt-8 text-xs'>
                            Смотря на бутсы Mizuno, мы видим, что компания продолжает делать в 2021 году практически то же, что и делала на заре своего становления. Как нам кажется, принцип компании заключается в фразе: зачем выдумывать что-то новое, когда мы уже сделали что-то качественное и это эффективно работает.
                            Разработчики компании просто занимаются совершенствованием некоторых деталей, но не идут на поводу у моды и трендов. В то время, когда Nike, Adidas и Puma впереди планеты всей пытаются нас удивить чем-то новым, Mizuno продолжает делать то, что и делала. При этом на рынок выпускает только то, что не сможет испортить репутацию бренда. А для бренда высокое качество продукции – это очень важный показатель.
                            Бутсы Mizuno продолжают выпускать обувь из фирменных материалов: натуральной кожи или синтетики, которая по своим свойствам напоминает кожу. Практически все модели имеют классическое строение с минимальным набором технологий. Используются только те разработки, которые реально нужны в конструкции и от наличия которых есть какой-то толк.
                        </p>
                    </motion.div>
                    {/*Actions*/}
                    <motion.div className='mt-8 flex items-center gap-8'
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}>
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                        <AnchorLink
                            className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}>
                            <p>Learn More</p>
                        </AnchorLink>
                    </motion.div>
                </div>
                {/*Image*/}
                <div className='flex basis-2/6 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
                    {/* <img src={HomePageGraphic} alt="home-pageGraphic" /> */}
                    <img src={Mizuno} alt="home-pageGraphic" style={{ maxWidth: '100%' }} />
                </div>
            </motion.div>
            {/*Sponsors*/}
            {isAboveMediumScreens && (
                <div className='h-[150px] w-full bg-primary-100 py-10'>
                    <div className='mx-auto w-5/6'>
                        <div className=' flex w-3/5 items-center justify-between gap-8'>
                            <img src={SponsorRedbull} alt="redbull-sponsor" />
                            <img src={SponsorForbes} alt="forbes-sponsor" />
                            <img src={SponsorFortune} alt="fortune-sponsor" />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Home 
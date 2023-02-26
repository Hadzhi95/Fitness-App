import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import Hulk from "@/assets/Hulk.webp"
import HText from '@/shared/HText'

type Props = {
    setSelectedPage: (value: SelectedPage) => void,
}

const ContactUs = ({ setSelectedPage }: Props) => {
    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`
    const {
        register,
        trigger,
        formState: { errors }
    } = useForm()
    const onSubmit = async (e: any) => {
        const isValid = await trigger()
        if (!isValid) {
            e.preventDefault()
        }
    }
    return (
        <section id="contactus" className='mx-auto w-5/6 pt-24 pb-32'>
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
                {/*Header*/}
                <motion.div className='md:w-3/5'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}>
                    <HText>
                        <span className='text-primary-500'>ПОКУПАЙТЕ СЕЙЧАС</span>
                    </HText>
                    <p className='my-5'>
                        Успейте оформить заявку для приобретения футбольных бутс до <span className='text-primary-500'>28.02.2023</span> года и получи <span className='text-primary-500'>40 %</span> скидки на первую покупку
                    </p>
                </motion.div>
                {/*Form and Image*/}
                <div className='mt-10 justify-between gap-8 md:flex'>
                    <motion.div className='mt-10 basis3/5 md:mt-0'
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}>
                        <form
                            target='_blank'
                            onSubmit={onSubmit}
                            action="https://formsubmit.co/kreyg1992@bk.ru"
                            method="POST">
                            <input className={inputStyles}
                                type="text"
                                placeholder='NAME'
                                {...register("name", {
                                    required: true,
                                    maxLength: 100,
                                })}
                            />

                            {errors.name && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.name.type === 'required' && 'This field is required.'}
                                    {errors.name.type === 'maxLength' && 'Max length is 100 char.'}
                                </p>
                            )}

                            <input className={inputStyles}
                                type="text"
                                placeholder='EMAIL'
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                            />
                            {errors.email && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.email.type === 'required' && 'This field is required.'}
                                    {errors.email.type === 'pattern' && 'Invalid email address.'}
                                </p>
                            )}

                            <textarea className={inputStyles}
                                rows={4}
                                cols={50}
                                placeholder='MESSAGE'
                                {...register("message", {
                                    required: true,
                                    maxLength: 2000,
                                })}
                            />

                            {errors.message && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.message.type === 'required' && 'This field is required.'}
                                    {errors.message.type === 'maxLength' && 'Max length is 2000 char.'}
                                </p>
                            )}
                            <button type='submit'
                                className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'>
                                SUBMIT
                            </button>
                        </form>
                    </motion.div>
                    <motion.div className='relative mt-16 basis-2/5 md:mt-0'
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}>
                        <div className='md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]'>
                            <img 
                            className='w-full' 
                            src={Hulk} 
                            alt="contact-us-page-graphic" />
                        </div>
                        <p className='md:mt-6'>Ведущий футболист мира Hulk выбирает Премиальные бутсы Mizuno Morelia Neo II Md.</p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default ContactUs
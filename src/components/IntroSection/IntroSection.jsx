import React from 'react'
import { topics } from '../../constants/data'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function IntroSection() {
    const { t } = useTranslation()

    return (
        <section className="space-x-4 lg:grid block px-[50px] py-[50px] text-white mx-auto mt-[100px] items-center bg-black container rounded-2xl grid-cols-2">
            <div className="max-w-[100%]">
                <h2 className="md:text-3xl text-2xl font-bold mb-[50px]">{t('intro.title')}</h2>
                <p className="md:text-lg text-sm">{t('intro.description')}</p>
            </div>
            <div className='max-w-[100%] grid md:grid-cols-3 gap-6 mx-auto lg:mt-[0] mt-[50px]'>
                {topics.map(({ titleKey, descKey, link, emoji }) => (
                    <Link key={titleKey} to={link} className="bg-[#1a1a1a] px-[20px] py-[25px] rounded-xl hover:bg-[#2a2a2a] transition">
                        <h3 className="text-[19px] font-semibold mb-2">{emoji} <br /> {t(titleKey)}</h3>
                        <p className="text-gray-400 text-sm">{t(descKey)}</p>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default IntroSection

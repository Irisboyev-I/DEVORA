import React from 'react'
import { articlePreviews } from '../../constants/data'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function ArticlePreviews() {
    const { t } = useTranslation()

    return (
        <div className='container my-[100px] bg-black mx-auto rounded-2xl py-[40px] px-[50px]'>
            <h2 className='md:text-3xl text-xl font-bold text-white'>📰 {t('articlePreviewTitle')}</h2>
            <div className='max-w-[100%] grid md:grid-cols-3 gap-6 mx-auto mt-[50px]'>
                {
                    articlePreviews.map(({ id, emoji, title, summary, link }) => {
                        return <Link to={link} key={id} className="bg-[#1a1a1a] px-[20px] py-[25px] rounded-xl hover:bg-[#2a2a2a] transition min-h-[200px]">
                            <h3 className="text-[19px] font-semibold mb-2 text-white">{emoji} <br /> {t(title)}</h3>
                            <p className="text-gray-400 text-sm">{t(summary)}</p>
                            <p className='text-blue-600'>{t('more')}</p>
                        </Link>
                    })
                }
            </div>
        </div>
    )
}

export default ArticlePreviews

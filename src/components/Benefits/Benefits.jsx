import { Lightbulb } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'

function Benefits() {
    const { t } = useTranslation()

    return (
        <div className='container mx-auto bg-black rounded-2xl my-[100px] py-[20px] px-[25px] md:py-[40px] md:px-[50px] text-white grid grid-cols-2 md:grid-cols-1'>
            <div className=''>
                <h2 className='text-2xl md:text-3xl font-bold text-white'>📌 {t('featuresSectionTitle')}</h2>
                <ul className='mt-[50px] block space-y-4'>
                    <li className='font-semibold text-sm sm:text-md md:text-xl opacity-[.6] hover:opacity-[1] cursor-pointer text-white'>✅ {t('noSignup')}</li>
                    <li className='font-semibold text-sm sm:text-md md:text-xl opacity-[.6] hover:opacity-[1] cursor-pointer text-white'>✅ {t('free')}</li>
                    <li className='font-semibold text-sm sm:text-md md:text-xl opacity-[.6] hover:opacity-[1] cursor-pointer text-white'>✅ {t('withExamples')}</li>
                    <li className='font-semibold text-sm sm:text-md md:text-xl opacity-[.6] hover:opacity-[1] cursor-pointer text-white'>✅ {t('practicalTips')}</li>
                    <li className='font-semibold text-sm sm:text-md md:text-xl opacity-[.6] hover:opacity-[1] cursor-pointer text-white'>✅ {t('forBeginners')}</li>
                </ul>
            </div>
        </div>
    )
}

export default Benefits

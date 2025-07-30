import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion';
import FadeInOnScroll from '../../constants/FadeInOnScroll'

function PrivacyPolicy() {
    const { t } = useTranslation()

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="page"
        >
            <div className='container mx-auto'>
                <FadeInOnScroll delay={0.1}><div className='bg-gradient-to-br from-blue-500 to-indigo-700 rounded-2xl px-[50px] py-[50px] my-[50px]'>
                    <h2 className="text-white md:text-3xl text-2xl font-bold mb-[50px]">📄 {t('privacyPolicy')}</h2>
                    <p className='text-white max-w-[100%] md:max-w-[60%]'>Мы уважаем вашу конфиденциальность и обязуемся защищать личную информацию, которую вы нам предоставляете при использовании сайта devoraf.online.</p>
                </div></FadeInOnScroll>

                <FadeInOnScroll delay={0.1}><div className='mt-[50px] bg-black rounded-2xl px-[50px] py-[50px] my-[50px]'>
                    <p className='text-white space-y-6'>
                        <span className='text-white font-bold text-md md:text-xl block mt-[40px]'>1. Сбор информации</span>
                        Мы можем собирать следующую информацию:

                        Ваше имя и контактные данные (например, email, Telegram, WhatsApp), если вы оставляете их в форме.

                        Неидентифицируемую информацию о вашем устройстве, браузере и действиях на сайте (через Google Analytics или аналогичные сервисы).

                        <span className='text-white font-bold text-md md:text-xl block mt-[40px]'>2. Использование информации</span>
                        Мы используем собранные данные для:

                        Связи с вами по вашему запросу

                        Улучшения качества сайта и пользовательского опыта

                        Поддержания безопасности и анализа работы сайта

                        <span className='text-white font-bold text-md md:text-xl block mt-[40px]'>3. Cookies</span>
                        Сайт может использовать файлы cookie для:

                        Запоминания ваших языковых предпочтений

                        Анализа поведения на сайте

                        Улучшения производительности

                        Вы можете отключить cookies в настройках вашего браузера, но это может ограничить функциональность сайта.

                        <span className='text-white font-bold text-md md:text-xl block mt-[40px]'>4. Передача информации третьим лицам</span>
                        Мы не передаём вашу личную информацию третьим лицам, за исключением случаев, предусмотренных законом.

                        <span className='text-white font-bold text-md md:text-xl block mt-[40px]'>5. Безопасность данных</span>
                        Мы принимаем разумные меры для защиты вашей информации от несанкционированного доступа, изменения, раскрытия или уничтожения.

                        <span className='text-white font-bold text-md md:text-xl block mt-[40px]'>6. Ссылки на другие сайты</span>
                        На сайте могут быть ссылки на внешние ресурсы (например, Instagram, Telegram, GitHub). Мы не несем ответственности за политику конфиденциальности этих сайтов.

                        <span className='text-white font-bold text-md md:text-xl block mt-[40px]'>7. Ваши права</span>
                        Вы можете:

                        Запросить копию ваших данных

                        Попросить удалить вашу информацию

                        Отозвать своё согласие на обработку данных

                        Для этого свяжитесь с нами через раздел «Контакты».

                        <span className='text-white font-bold text-md md:text-xl block mt-[40px]'>8. Изменения в политике</span>
                        Мы можем периодически обновлять настоящую Политику. Актуальная версия всегда доступна на этой странице.
                    </p>
                </div></FadeInOnScroll>

                <FadeInOnScroll delay={0.1}><div className='bg-gradient-to-br from-blue-500 to-indigo-700 rounded-2xl px-[50px] py-[50px] my-[50px] text-white'>
                    <h3 className='text-md md:text-xl font-bold mb-[20px]'>📬 По вопросам конфиденциальности: <br /></h3>
                    <p className='font-bold text-lg'>Напишите на email: <span className='my-[10px] block text-md opacity-[.6] hover:opacity-[1] transition-[.66s]'>ibrohim@example.com</span> или через Telegram: <span className='my-[10px] block text-md opacity-[.6] hover:opacity-[1] transition-[.66s]'>@irisboyevw</span></p>
                </div></FadeInOnScroll>
            </div>
        </motion.div>
    )
}

export default PrivacyPolicy

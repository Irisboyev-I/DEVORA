import React from 'react';
import { useParams } from 'react-router-dom';
import { articlesMoreData } from '../../constants/data.js';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import FadeInOnScroll from '../../constants/FadeInOnScroll'

export default function ArticlesMore() {
    const { id } = useParams();
    const { t, i18n } = useTranslation();
    const lang = i18n.language || 'ru';

    const article = articlesMoreData.find(article => article.key === id);

    if (!article) {
        return (
            <div className="container mx-auto py-20 text-center">
                <h2 className="text-2xl md:text-4xl text-red-500 font-semibold">
                    {t('articleNotFound.title')}
                </h2>
                <p className="text-gray-400 mt-4">
                    {t('articleNotFound.description')}
                </p>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="page"
        >
            <div className="container mx-auto px-4 py-20 text-white bg-black rounded-2xl w-full">
                <div className="max-w-[70%] m-auto">
                    <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">
                        {article.title[lang]}
                    </h1>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-2">
                            🧩 {t('article.shortDescription')}
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                            {article.description[lang]}
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-2">
                            📘 {t('article.detailedExplanation')}
                        </h2>
                        <p className="text-gray-300 whitespace-pre-line">
                            {article.content[lang]}
                        </p>
                    </section>

                    <FadeInOnScroll delay={0.1}><section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-2">
                            💡 {t('article.exampleJsx')}
                        </h2>
                        <pre className="bg-gray-900 text-sm p-4 rounded-xl overflow-auto">
                            <code>{article.exampleJsx}</code>
                        </pre>
                    </section></FadeInOnScroll>

                    <FadeInOnScroll delay={0.1}><section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-2">
                            💡 {t('article.exampleTsx')}
                        </h2>
                        <pre className="bg-gray-900 text-sm p-4 rounded-xl overflow-auto">
                            <code>{article.exampleTsx}</code>
                        </pre>
                    </section></FadeInOnScroll>

                    <FadeInOnScroll delay={0.1}><section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-2">
                            🚀 {t('article.proTips')}
                        </h2>
                        <ul className="list-disc list-inside text-gray-300">
                            {article.proTips[lang].map((tip, index) => (
                                <li key={index}>{tip}</li>
                            ))}
                        </ul>
                    </section></FadeInOnScroll>
                </div>
            </div>
        </motion.div>
    );
}

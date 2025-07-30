import React from 'react'
import { AllArticles } from '../../constants/data'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion';
import FadeInOnScroll from '../../constants/FadeInOnScroll'

function Articles() {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
      className="page"
    >
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-blue-500 to-indigo-700 rounded-2xl px-6 md:px-12 py-12 md:py-16 my-12 text-white text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('articlesForReading')}</h2>
          <p className="text-base md:text-xl max-w-3xl mx-auto">{t('inspiringPhrase')}</p>
        </div>

        <FadeInOnScroll delay={0.1}><div className="bg-black rounded-2xl px-6 md:px-12 py-12 my-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {AllArticles.map(({ key, path }) => (
              <Link
                to={path}
                key={key}
                className="block bg-zinc-900 hover:bg-zinc-800 text-white rounded-2xl p-6 transition-all duration-300 h-full"
              >
                <h3 className="text-lg font-semibold mb-2">{t(`articleTitles.${key}`)}</h3>
                <p className="text-sm text-gray-400">{t(`articleDescriptions.${key}`)}</p>
              </Link>
            ))}
          </div>
        </div></FadeInOnScroll>
      </div>
    </motion.div>
  )
}

export default Articles

import React from 'react'
import Hero from '../../components/HeroSection/Hero'
import IntroSection from '../../components/IntroSection/IntroSection'
import ArticlePreviews from '../../components/ArticlePreview/ArticlePreviews'
import Benefits from '../../components/Benefits/Benefits'
import ContactBanner from '../../components/ContactBanner/ContactBanner'
import { motion } from 'framer-motion'
import FadeInOnScroll from '../../constants/FadeInOnScroll'

function Home() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="page"
        >
            <FadeInOnScroll><Hero /></FadeInOnScroll>
            <FadeInOnScroll delay={0.1}><IntroSection /></FadeInOnScroll>
            <FadeInOnScroll delay={0.2}><ArticlePreviews /></FadeInOnScroll>
            <FadeInOnScroll delay={0.2}><Benefits /></FadeInOnScroll>
            <FadeInOnScroll delay={0.2}><ContactBanner /></FadeInOnScroll>
        </motion.div>
    )
}

export default Home

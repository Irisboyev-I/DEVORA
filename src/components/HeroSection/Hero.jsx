import React from "react";
import { useTranslation } from "react-i18next";

export default function Hero() {
    const { t } = useTranslation()

    return (
        <section className="container mx-auto rounded-2xl mt-[50px] bg-gradient-to-br from-blue-500 to-indigo-700 text-white py-24 px-6 text-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-4">
                {t('title')}
            </h1>
            <p className="text-sm md:text-xl max-w-2xl mx-auto mb-6">
                {t('subtitle')}
            </p>
            <div className="flex justify-center gap-4">
                <a href="/blog" className="text-[10px] md:text-xl bg-white text-blue-600 font-semibold py-2 px-6 rounded shadow hover:opacity-[.7] transition-[.66s]" >
                    {t('readBlog')}
                </a>
                <a href="/resources" className="md:text-xl text-[10px] bg-transparent border py-2 px-6 border-white font-semibold rounded hover:bg-white transition-[.66s] hover:text-blue-600" >
                    {t('allResources')}
                </a>
            </div>
        </section>
    );
}

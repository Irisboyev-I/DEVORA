import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { LuLanguages } from "react-icons/lu"
import { HiMenu, HiX } from "react-icons/hi"
import { useTranslation } from 'react-i18next'

function Navbar() {
    const [openLang, setOpenLang] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)
    const { t, i18n } = useTranslation()
    const langRef = useRef(null)
    const menuRef = useRef(null)

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
        setOpenLang(false)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (langRef.current && !langRef.current.contains(event.target)) {
                setOpenLang(false)
            }
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenMenu(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <nav className='container mx-auto bg-black w-full rounded-2xl px-[50px] py-[30px] my-5 flex items-center justify-between relative z-50'>
            <Link to='/' className='text-[#e9e6df] font-bold text-2xl hover:opacity-70 transition-all'>
                DEVORA
            </Link>

            <ul className='hidden md:flex items-center gap-6'>
                <li className='text-white sm:text-sm lg:text-2xl hover:underline'><Link to='/articles'>{t('articles')}</Link></li>
                <li className='text-white sm:text-sm lg:text-2xl hover:underline'><Link to='/about'>{t('about')}</Link></li>
                <li className='text-white sm:text-sm lg:text-2xl hover:underline'><Link to='/contact'>{t('contact')}</Link></li>
                <li className='text-white sm:text-sm lg:text-2xl hover:underline'><Link to='/privacyPolicy'>{t('privacyPolicy')}</Link></li>
                <li ref={langRef} className='relative'>
                    <LuLanguages
                        onClick={() => setOpenLang(prev => !prev)}
                        className="w-6 h-6 text-white cursor-pointer hover:opacity-70"
                    />
                    {openLang && (
                        <div className='absolute top-full right-0 mt-2 bg-black rounded shadow text-white z-50'>
                            <div onClick={() => changeLanguage('uz')} className='px-4 py-2 hover:opacity-70 cursor-pointer'>Uzbekcha</div>
                            <div onClick={() => changeLanguage('ru')} className='px-4 py-2 hover:opacity-70 cursor-pointer'>Русский</div>
                            <div onClick={() => changeLanguage('en')} className='px-4 py-2 hover:opacity-70 cursor-pointer'>English</div>
                        </div>
                    )}
                </li>
            </ul>

            <button onClick={() => setOpenMenu(true)} className='md:hidden text-white'>
                <HiMenu size={28} />
            </button>

            {openMenu && (
                <div
                    ref={menuRef}
                    className='fixed top-0 right-0 h-full w-64 bg-black text-white z-50 shadow-lg flex flex-col p-6 space-y-4 transition-transform duration-300'
                >
                    <div className='flex justify-between items-center mb-4'>
                        <span className="text-xl font-semibold">Menu</span>
                        <HiX onClick={() => setOpenMenu(false)} className="cursor-pointer" size={26} />
                    </div>

                    <Link onClick={() => setOpenMenu(false)} to='/articles'>{t('articles')}</Link>
                    <Link onClick={() => setOpenMenu(false)} to='/about'>{t('about')}</Link>
                    <Link onClick={() => setOpenMenu(false)} to='/contact'>{t('contact')}</Link>
                    <Link onClick={() => setOpenMenu(false)} to='/privacyPolicy'>{t('privacyPolicy')}</Link>

                    <div ref={langRef} className='relative'>
                        <div className='flex items-center gap-2 cursor-pointer' onClick={() => setOpenLang(!openLang)}>
                            <LuLanguages className='w-5 h-5' />
                            <span>{t('language')}</span>
                        </div>
                        {openLang && (
                            <div className='absolute top-full left-0 mt-2 bg-black rounded shadow text-white z-50'>
                                <div onClick={() => changeLanguage('uz')} className='px-4 py-2 hover:opacity-70 cursor-pointer'>Uzbekcha</div>
                                <div onClick={() => changeLanguage('ru')} className='px-4 py-2 hover:opacity-70 cursor-pointer'>Русский</div>
                                <div onClick={() => changeLanguage('en')} className='px-4 py-2 hover:opacity-70 cursor-pointer'>English</div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar

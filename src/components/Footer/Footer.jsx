import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp, FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { footerData } from '../../constants/data.js';

const Footer = () => {
    const { t } = useTranslation();
    const [expand, setExpand] = useState(false);

    const handleToggle = () => {
        setExpand(!expand);
    };

    return (
        <footer className="bg-black py-14 px-6 md:px-20 mt-[50px]">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <h2 className="text-white text-2xl font-semibold">DEVORA</h2>
                <div className="flex gap-4">
                    <ul className='flex items-center justify-between space-x-10'>
                        <li>
                            <a href="https://instagram.com/irisboyev.o77" target="_blank">
                                <FaInstagram className='text-white hover:opacity-[.7] transition-[.66s] cursor-pointer' size={40} />
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/998200105221" target="_blank">
                                <FaWhatsapp className='text-white hover:opacity-[.7] transition-[.66s] cursor-pointer' size={40} />
                            </a>
                        </li>
                        <li>
                            <a href="https://t.me/irisboyevw" target="_blank">
                                <FaTelegram className='text-white hover:opacity-[.7] transition-[.66s] cursor-pointer' size={40} />
                            </a>
                        </li>
                    </ul>

                </div>
            </div>

            <div className="flex flex-wrap justify-between gap-10 mt-10">
                <ul className="flex-1 min-w-[200px] my-6 space-y-2">
                    <p className="text-white text-xl mb-4">{t('footer.articlesTitle')}</p>
                    {footerData.articles.map(({ key, path }) => (
                        <li key={key} className="text-white text-md opacity-60 hover:opacity-100 hover:underline transition duration-500">
                            <Link to={path}>{t(`footer.links.${key}`)}</Link>
                        </li>
                    ))}

                    {expand && (
                        <ul className="space-y-2 mt-2">
                            {footerData.moreArticles.map(({ key, path }) => (
                                <li key={key} className="text-white text-md opacity-60 hover:opacity-100 hover:underline transition duration-500">
                                    <Link to={path}>{t(`footer.links.${key}`)}</Link>
                                </li>
                            ))}
                        </ul>
                    )}

                    <li onClick={handleToggle} className="flex gap-2 items-center cursor-pointer text-white text-md opacity-60 hover:opacity-100 transition duration-500">
                        {expand ? t('footer.collapse') : t('footer.expand')} {expand ? <FaAngleUp /> : <FaAngleDown />}
                    </li>
                </ul>

                <ul className="flex-3 min-w-[200px] mt-[100px] text-center space-y-4 text-white">
                    <li>{t('footer.slogan')}</li>
                    <li>{t('footer.motto')}</li>
                </ul>

                <ul className="flex-1 min-w-[200px] my-6 space-y-2">
                    <p className="text-white text-xl mb-4">{t('footer.contactsTitle')}</p>
                    {footerData.contacts.map((item, i) => (
                        <li key={i} className="cursor-pointer text-white text-md opacity-60 hover:opacity-100 hover:underline transition duration-500">
                            {item.href ? (
                                <a href={item.href} target="_blank" rel="noopener noreferrer">{item.text}</a>
                            ) : (
                                item.text
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-12 text-center text-white opacity-50 text-sm">
                &copy; {new Date().getFullYear()} DEVORA. {t('footer.rightsReserved')}
            </div>
        </footer>
    );
};

export default Footer;

import { Mail } from 'lucide-react';
import React from 'react';
import { FaGithub, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import FadeInOnScroll from '../../constants/FadeInOnScroll'

function Contact() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
      className="page"
    >
      <div className='container mx-auto'>
        <div className='bg-gradient-to-br from-blue-500 to-indigo-700 rounded-2xl px-[50px] py-[50px] my-[50px]'>
          <h2 className="text-white md:text-3xl text-2xl font-bold mb-[50px]">
            {t('contactSection.title')}
          </h2>
          <p className="text-white max-w-[100%] md:max-w-[40%]">
            {t('contactSection.description')}
          </p>
        </div>

        <div className='bg-black rounded-2xl px-[50px] py-[50px] my-[50px]'>
          <ul className="space-y-3 text-white">
            <li className="flex items-center space-x-2">
              <Mail className="text-blue-500" />
              <span>irisboyev.ii@gmail.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaWhatsapp className="text-green-500" />
              <span>+998 20 010 52 21</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaTelegram className="text-sky-500" />
              <span>@irisboyevw</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaGithub className="text-gray-800" />
              <a href="https://github.com/Irisboyev-I" className="underline">github.com/Irisboyev-I</a>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;

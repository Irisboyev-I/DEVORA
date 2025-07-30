import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { HiX } from 'react-icons/hi';

function ContactBanner() {
    const { t } = useTranslation();
    const [openModal, setOpenModal] = useState(false);
    const modalRef = useRef(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const handleSendMessage = (data) => {
        console.log('Форма отправлена:', data);
        setOpenModal(false);
        reset();
    };

    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setOpenModal(false);
        }
    };

    return (
        <section className="container mx-auto rounded-2xl mt-[50px] bg-gradient-to-br from-blue-500 to-indigo-700 text-white py-24 px-6 text-center my-[100px]">
            <h2 className="text-4xl md:text-6xl font-bold mb-[50px]">{t('contactBanner.title')}</h2>
            <p className="mb-[30px] text-2xl">{t('contactBanner.subtitle')}</p>
            <button
                onClick={() => setOpenModal(true)}
                className="cursor-pointer hover:opacity-[.7] transition-[.66s] bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-100"
            >
                {t('contactBanner.button')}
            </button>

            {openModal && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 top-0 flex items-center justify-center"
                    onClick={handleClickOutside}
                >
                    <button
                        onClick={() => setOpenModal(false)}
                        className="absolute top-[20px] right-[50px] cursor-pointer hover:opacity-70"
                    >
                        <HiX size={50} />
                    </button>
                    <div
                        ref={modalRef}
                        className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md text-black relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-xl font-semibold mb-4">{t('contactBanner.formTitle')}</h2>
                        <form onSubmit={handleSubmit(handleSendMessage)} className="space-y-2">
                            <input
                                {...register('Name', {
                                    required: t('contactBanner.errors.nameRequired'),
                                })}
                                type="text"
                                placeholder={t('contactBanner.namePlaceholder')}
                                className="w-full border border-gray-300 rounded-lg p-2 placeholder:text-gray-400"
                            />
                            {errors.Name && <p className="text-red-500 text-sm">{errors.Name.message}</p>}

                            <input
                                {...register('PhoneNumber', {
                                    required: t('contactBanner.errors.telegramRequired'),
                                    pattern: {
                                        value: /^@\w+$/,
                                        message: t('contactBanner.errors.telegramPattern'),
                                    },
                                })}
                                type="text"
                                placeholder={t('contactBanner.telegramPlaceholder')}
                                className="w-full border border-gray-300 rounded-lg p-2 placeholder:text-gray-400"
                            />
                            {errors.PhoneNumber && (
                                <p className="text-red-500 text-sm">{errors.PhoneNumber.message}</p>
                            )}

                            <textarea
                                {...register('Message')}
                                placeholder={t('contactBanner.messagePlaceholder')}
                                className="w-full border border-gray-300 rounded-lg p-2 placeholder:text-gray-400"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition"
                            >
                                {t('contactBanner.sendButton')}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
}

export default ContactBanner;

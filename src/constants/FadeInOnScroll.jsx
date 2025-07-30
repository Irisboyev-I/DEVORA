import React from 'react';
import { motion } from 'framer-motion';

const FadeInOnScroll = ({ children, delay = 0, yOffset = 40 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInOnScroll;
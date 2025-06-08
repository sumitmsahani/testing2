import React from 'react';
import { motion } from 'framer-motion';

const Message = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-0 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Dear Madam Ji,
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          Happy Anniversary to the two beautiful souls who brought you into this world — the same souls I silently thank every single day.<br></br>
You know what? I'm not just lucky to have you… I’m incredibly blessed to have become a small part of a family that raised someone as pure, kind, and full of love as you.
Your mom and dad’s bond is not just a milestone — it’s a reflection of the kind of love I dream of having with you someday.
Through you, I feel the warmth of your whole family… your mom’s kindness, your dad’s strength, your brother’s energy — it’s like I’ve found a second home in you.
So today, I celebrate them… and I celebrate you.Because you’re not just a gift to me, you're the most precious piece of their love story.
Tell them from my heart — Happy Anniversary, and thank you…for giving me you. 🕊️❤️"
        </p>
        <p className="text-lg text-pink-600 font-semibold">
          and on your special day, i wish your parents the happiest anniversary
        </p>
      </motion.div>
    </div>
  );
};

export default Message;

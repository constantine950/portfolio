"use client";

import Image from "next/image";
import pic1 from "@/public/pic1.jpg";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <Image
        className="object-cover object-top"
        fill
        placeholder="blur"
        quality={80}
        src={pic1}
        alt="my-picture"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 bg-black/50">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Hi, I’m <span className="text-indigo-300">James</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-2xl text-gray-200 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Let’s build something beautiful. I craft responsive, user-friendly
          websites that feel as good as they look.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link
            href="/portfolio"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition"
          >
            View My Work
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

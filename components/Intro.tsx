'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import portrait from '@/public/portrait.jpg'
import Link from 'next/link';

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
      <div className="flex items-center justify-center">
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: .2,
            }}
          >
            <Image src={portrait} alt={`Mark's portrait`} width={192} height={192} quality={95} priority={true} className='h-28 w-28 rounded-full object-cover border-[0.3rem] border-white shadow-xl'/>

          </motion.div>

          <motion.span className='text-4xl absolute bottom-0 right-0'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: .1,
              duration: .7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>Hello, I&apos;m Mark.</span> I&apos;m a {' '}
        <span className='font-bold'>web-developer</span> with {' '}
        <span className='font-bold'>1 year</span> of experience. I enjoy building {' '}
        <span className='italic'>sites & apps.</span> My focus is {' '}
        <span className='underline'>React (Next.js)</span>
      </motion.h1>

      <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: .1,
        }}
      >
        <Link href='#contact' className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 hover:bg-gray-950 active:scale-105 transition'>
          Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>

        <a href='/CV.pdf' download className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer border border-black/10'>
          Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
        </a>

        <a href='https://linkedin.com' target='_blank' className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.27rem] rounded-full focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10">
          <BsLinkedin />
        </a>

        <a href='https://github.com/' target='_blank' className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-110 hover:text-gray-950 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10">
          <BsGithub />
        </a>

      </motion.div>
    </section>
  )
}
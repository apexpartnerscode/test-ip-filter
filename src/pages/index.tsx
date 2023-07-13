import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { GetServerSideProps } from 'next'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1>ok</h1>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const allowedIps = ['177.39.236.1'] as any
  const ip = ctx.req.headers['x-forwarded-for'] || ctx.req.socket.remoteAddress
  if (allowedIps.includes(ip)) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }
  return {
    props: {},
  }
}
"use client"
import { useState } from "react"
import Image from "next/image"

import PcMenu from "@/app/components/pc-menu"
import MobileMenu from "@/app/components/mobile-menu"
import WhatIs from "@/app/components/what-is"
import News from "@/app/components/news"
import Company from "@/app/components/company"
import Recruit from "@/app/components/recruit"
import ContactMobileMenu from "@/app/components/contact-mobile-menu"
import Footer from "@/app/components/footer"

export default function Home() {
  const [ isOpen, setIsOpen ] = useState(false)

  function handleClick() {
    setIsOpen(!isOpen)
    console.log("isOpen:", isOpen)
  }

  const CheckIsOpen = () => {
    if(isOpen) {
      return (
        <>
          <div>
            <MobileMenu />
          </div>
          <div className="p-3">
            <ContactMobileMenu />
          </div>
        </>
      )
    }
  }

  return (
    <>
      {/*ヘッダー */}
      <div className="bg-gray-200/75 sticky top-0 p-3">
        <header className="container mx-auto items-center">
          <div className="flex justify-between">
            <div className="flex flex-row items-center">
              <div className="py-3">
                <Image src="/imgs/company.svg" alt="news logo" width={35} height={35} />
              </div>
              <h1 className="text-lg font-semibold">サンプルCompany01</h1>
            </div>
             {/*ハンバーガーメニュー */}
            <button onClick={handleClick}>
              <svg className="md:hidden h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
              </svg>
            </button>
          </div>
          <div className="md:hidden">
            <CheckIsOpen />
          </div>

          <div className="hidden md:flex md:justify-end">
            <PcMenu />
          </div>

        </header>
      </div>

      {/*コンテンツ */}
      <section>
        <div>
          <WhatIs />
        </div>

        <div>
          <News />
        </div>

        <div>
          <Company />
        </div>

        <div>
          <Recruit />
        </div>
      </section>

      {/* footer */}
      <section>
        <div>
          <Footer />
        </div>
      </section>

    </>
  )
}

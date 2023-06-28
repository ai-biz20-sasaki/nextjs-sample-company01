"use client"
import { useState } from "react"
import PcMenu from "@/app/components/pc-menu"
import MobileMenu from "@/app/components/mobile-menu"
import News from "@/app/components/news"
import Company from "@/app/components/company"
import Recruit from "@/app/components/recruit"
import Contact from "@/app/components/contact"
import AboutUs from "./components/about-us"

export default function Home() {
  const [ isOpen, setIsOpen ] = useState(false)

  function handleClick() {
    setIsOpen(!isOpen)
    console.log("isOpen:", isOpen)
  }

  const CheckIsOpen = () => {
    if(isOpen) {
      return <MobileMenu />
    }
  }

  return (
    <>
      <div className="bg-gray-200/75 sticky top-0">
        <header className="container mx-auto items-center">
          <div className="flex justify-between">
            <h1 className="text-lg font-semibold">サンプルCompany01</h1>
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

      <div>
        <div>
          ITと匠の融合
        </div>
        <div>
          「金型」は身近にある色々なものの「形」を作るもの。
        </div>
        <div>
          私たちが普段目にする多くのものは、実は「金型」から作り上げられているということをご存知でしょうか？
        </div>
        <div>
          自動車や新幹線、飛行機の部品だけでなく生活に直接関係する身近なものまで、
        </div>
        <div>
          あらゆるものが「金型」を通して作られています。
        </div>
        <div>
        その中でも当社の強みは最新の情報・技術・設備を擁し、創業40年以来培ってきたノウハウや経験を融合し
        </div>
        <div>
          お客様のニーズを捉え、価値ある製品やサービスを提供し続けていることです。    
        </div>
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

      <div>
        <Contact />
      </div>

      <div>
        <AboutUs />
      </div>

    </>
  )
}

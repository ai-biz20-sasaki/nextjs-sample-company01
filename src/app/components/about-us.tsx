import Image from "next/image"

export default function AboutUs() {
  return (
    <div className="bg-neutral-500 text-white px-3">
      <div className="flex justify-center">
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <div className="py-2">
              <Image src="/imgs/company.svg" alt="news logo" width={35} height={35} />
            </div>
            <div className="py-2">
              サンプルCompany01
            </div>
          </div>
          <div className="py-2">
            本社 〒xxx-xxxx
          </div>
          <div className="py-2">
            xxxxxxxxxxxxxxxx
          </div>
          <div className="py-2">
            工場 〒ooo-ooo
          </div>
          <div className="py-2">
            oooooooooooooooo
          </div>
          <div className="flex flex-row border-b-2 border-white">
            <div className="mr-2">
              <Image src="/imgs/location_on.svg" alt="location on image"  width={25} height={25} />
            </div>
            <a href="https://goo.gl/maps/TWybHPy6VuYMfKdc7" target="_blank">
              Google Map
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="py-8 text-xs">
          © xxxxxxx. All Rights Reserved.
        </div>
      </div>
    </div>
  )
}

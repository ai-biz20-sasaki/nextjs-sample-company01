import Image from "next/image"

export default function ContactMobileMenu() {
  return (
    <>
      <div className="border-4 border-orange-500 mx-16 p-2 rounded-3xl">
        <div className="flex justify-center text-orange-500">
          電話でのお問い合わせ
        </div>
        <div className="flex justify-center text-4xl text-orange-500">
          0120-xx-xxxx
        </div>
        <div className="flex justify-center text-orange-500">
          営業時間／8:30-17:30
        </div>
      </div>

      <div className="flex flex-row justify-center border-4 border-lime-500 my-4 mx-16 p-4 rounded-3xl">
        <div className="py-2">
          <Image src="" alt="mail icon" className="" />
        </div>
        <div>
          <div className="text-lime-500">
            メールでの
          </div>
          <div className="text-lime-500">
            お問い合わせ
          </div>
        </div>
        <div className="py-2">
          <Image src="" alt="→" className="" />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="py-2 text-xs">
          © xxxxxxx. All Rights Reserved.
        </div>
      </div>      
    </>
  )
}

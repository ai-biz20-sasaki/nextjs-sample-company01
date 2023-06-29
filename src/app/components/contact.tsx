import Image from "next/image"

export default function Contact() {
  return (
    <div className="bg-neutral-700 text-white px-3 py-5">
      <div className="py-2">
        <Image src="/imgs/title_Contact.svg" alt="Contact image" width={250} height={50} />
      </div>
      <div className="py-2">
        お問い合わせ
      </div>

      <div className="container mx-auto flex flex-col items-center md:flex-row md:space-x-8">

        <div className="border-4 border-white rounded-3xl w-3/4 p-4 md:basis-1/2 md:h-32">
          <div className="flex justify-center">
            電話でのお問い合わせ
          </div>
          <div className="flex justify-center text-4xl">
            0120-xx-xxxx
          </div>
          <div className="flex justify-center">
            営業時間／8:30-17:30
          </div>
        </div>

        <div className="md:hidden m-3"></div>

        <div className="flex flex-row justify-center items-center border-4 border-lime-400 rounded-3xl w-3/4 p-6 md:basis-1/2 md:h-32">
          <div className="mr-3">
            <Image src="/imgs/mail.svg" alt="mail icon" width={50} height={50} />
          </div>
          <div className="">
            <a href="mailto:sample01@example.com">
            <div className="text-lime-400">
              メールでの
            </div>
            <div className="text-lime-400">
              お問い合わせ
            </div>
            </a>
          </div>
          <div className="">
            <Image src="/imgs/arrow_right.svg" alt="→" width={50} height={50} />
          </div>
        </div>
      </div>

    </div>
  )
}

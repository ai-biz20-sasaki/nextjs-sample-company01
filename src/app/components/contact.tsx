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

        <div className="w-3/4 md:basis-1/2 md:h-32 group">
          <div className="flex flex-row justify-center items-center border-4 border-lime-400 rounded-3xl p-6 group-hover:bg-lime-400">
            <div className="mr-3">
              <svg 
                className="fill-lime-400 group-hover:fill-neutral-700"
                xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 -960 960 960">
                  <path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z"/>
              </svg>
            </div>
            <div className="">
              <a href="mailto:sample01@example.com">
              <div className="text-lime-400 group-hover:text-neutral-700">
                メールでの
              </div>
              <div className="text-lime-400 group-hover:text-neutral-700">
                お問い合わせ
              </div>
              </a>
            </div>
            <div className="">
              <svg 
                className="fill-lime-400 group-hover:fill-neutral-700"
                xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 -960 960 960">
                  <path d="m561-242-43-42 168-168H160v-60h526L517-681l43-42 241 241-240 240Z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

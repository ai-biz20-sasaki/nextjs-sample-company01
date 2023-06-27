export default function Contact() {
  return (
    <div className="bg-gray-600 text-white px-3">
      <div className="py-2">
        <img src="" alt="Contact image" className="" />
      </div>
      <div className="py-2">
        お問い合わせ
      </div>
      <div className="border-4 border-white mx-16 p-2 rounded-3xl">
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

      <div className="flex flex-row justify-center border-4 border-lime-500 mx-16 my-4 p-4 rounded-3xl">
        <div className="py-2">
          <img src="" alt="mail icon" className="" />
        </div>
        <div>
          <div>
            メールでの
          </div>
          <div>
            お問い合わせ
          </div>
        </div>
        <div className="py-2">
          <img src="" alt="→" className="" />
        </div>
      </div>
    </div>
  )
}

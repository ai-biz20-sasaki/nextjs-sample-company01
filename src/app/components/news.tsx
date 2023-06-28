import Image from "next/image"

export default function News() {
  return (
    <div className="m-3">
      <div className="py-3">
        <Image src="/imgs/title_News.svg" alt="news logo" width={300} height={75} />
      </div>
      <p className="border-b border-black mx-3 py-3">
        お知らせ
      </p>
      <p className="text-lime-500 mx-3 py-2">20xx.04.xx</p>
      <p className="border-b border-black mx-3 pb-2">
        GW営業のお知らせ
      </p>
      <p className="text-lime-500 mx-3 py-2">20xx.12.xx</p>
      <p className="border-b border-black mx-3 pb-2">
        年末年始のお知らせ
      </p>
      <p className="text-lime-500 mx-3 py-2">20xx.xx.xx</p>
      <p className="border-b border-black mx-3 pb-2">
        溶接機を導入しました。
      </p>
      <div className="flex justify-end items-center py-3">
        <div className="text-white bg-lime-500 rounded-full h-12 w-12 flex justify-center items-center">
          &gt;
        </div>
        <div className="ml-2">
          <a href="#">一覧を見る</a>
        </div>
      </div>
    </div>          
  )
}

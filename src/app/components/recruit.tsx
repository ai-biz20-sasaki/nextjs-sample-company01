import Image from "next/image"

export default function Recruit() {
  return (
    <div className="flex flex-col m-3">
      <div className="py-3">
        <Image src="/imgs/title_Recruit.svg" alt="recrut logo" width={300} height={75} />
      </div>
      <div className="mb-6">
        採用情報
      </div>
      <div>
        金型はものづくりにはかかせないもの。
      </div>
      <div>
        最高の金型で「ものづくり」の出発地点に
      </div>
      <div>
        携わってみませんか？
      </div>
      <div className="flex justify-center py-6">
        <button className="bg-lime-500 text-white rounded-full px-10 py-4">
          採用情報はこちら
        </button>
      </div>
    </div>
  )
}

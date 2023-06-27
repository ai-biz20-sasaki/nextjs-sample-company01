import Image from "next/image"

export default function Company() {
  return (
    <div className="bg-orange-500 text-white">
      <div className="py-3">
        <Image src="" alt="company image" className="" />
      </div>
      <p className="border-b border-white mx-3 py-3">
        会社概要
      </p>
      <p className="mx-3 py-2">企業名</p>
      <p className="border-b border-white mx-3 pb-2">
        株式会社 サンプルCompany01
      </p>
      <p className="mx-3 py-2">住所</p>
      <p className="mx-3">
        【本社】
      </p>
      <p className="border-b border-white mx-3 pb-2">
        【工場】
      </p>
      <p className="mx-3 py-2">代表者</p>
      <p className="border-b border-white mx-3 pb-2">
        サンプル太郎
      </p>
      <p className="mx-3 py-2">設立年月日</p>
      <p className="border-b border-white mx-3 pb-2">
        19xx年 x月 x日
      </p>
      <p className="mx-3 py-2">代表電話番号</p>
      <p className="border-b border-white mx-3 pb-2">
        0120-xx-xxxx
      </p>
      <p className="mx-3 py-2">業種</p>
      <p className="mx-3">製造業・その他</p>
      <p className="mx-3">（主な製品）</p>
      <p className="border-b border-white mx-3 pb-2">
        自動車関連部品
      </p>
      <p className="mx-3 py-2">法人番号</p>
      <p className="border-b border-white mx-3 pb-2">
        1234xxxxxxxxxxxx
      </p>
      <div className="flex justify-center py-3">
        <Image src="" alt="Logo" className="" />
      </div>
    </div>          
  )
}

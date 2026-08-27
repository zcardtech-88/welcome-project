export default function AutomotiveCard(){
 const vehicle={title:'2024 Mercedes-Benz G63 AMG',price:'EGP 12,500,000',location:'New Cairo, Egypt'};
 return <main className="min-h-screen bg-white flex justify-center p-6 text-[#111]">
  <div className="w-full max-w-sm rounded-[28px] bg-[#F8F8F8] shadow-xl overflow-hidden">
   <div className="h-80 bg-gray-200 flex items-end p-6">
    <div><span className="text-xs text-[#D4AF37]">✓ Verified</span><h1 className="text-2xl font-semibold">{vehicle.title}</h1><p>{vehicle.price}</p></div>
   </div>
   <div className="p-5 space-y-4">
    <div className="flex gap-2">{['Call','WhatsApp','Location','Share','QR'].map(x=><button className="bg-white rounded-full px-3 py-2 text-sm">{x}</button>)}</div>
    {['Vehicle Specifications','Highlights','Description','Gallery','Featured Video','Seller','Social Links'].map(s=><section className="bg-white rounded-2xl p-4 flex justify-between" key={s}><span>{s}</span><span>⌄</span></section>)}
   </div>
  </div>
 </main>
}
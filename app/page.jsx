'use client'

import { useState } from 'react'
import { Phone, MessageCircle, MapPin, Share2, QrCode, ChevronDown, CheckCircle2, CarFront, Star, AlignLeft, Images, CirclePlay, UserRoundCheck, ShareNodes, Mail, Instagram, Facebook, Linkedin } from 'lucide-react'

const vehicle = {
  cover_image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=85',
  featured_image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=85',
  title: '2024 Mercedes-Benz G63 AMG', brand: 'Mercedes-Benz', model: 'G63 AMG', year: '2024',
  price: '12,500,000', currency: 'EGP', condition: 'Brand New', location: 'New Cairo, Egypt', badge: 'For Sale', verified: true,
  phone: '+201000000000', whatsapp: '201000000000', email: 'sales@elitemotors.eg', save_contact: true, share_card: true,
  body_type: 'SUV', trim: 'AMG G63', mileage: '8,500 km', transmission: 'Automatic', fuel_type: 'Gasoline', engine_size: '4.0L Twin Turbo V8', horsepower: '577 HP', drivetrain: '4MATIC', exterior_color: 'Obsidian Black', interior_color: 'Black Nappa Leather',
  sunroof: true, leather_seats: true, navigation: true, parking_sensors: true, rear_camera: true, keyless_entry: true, cruise_control: true, bluetooth: true, apple_carplay: true, android_auto: true,
  description: 'Luxury SUV with AMG performance, premium Black Nappa interior and advanced driver assistance systems. Designed for effortless everyday presence with genuine high-performance character.',
  gallery: [
    'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=900&q=85'
  ],
  video_thumbnail: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=85',
  seller_name: 'Ahmed Hassan', seller_title: 'Senior Automotive Consultant', seller_company: 'Elite Motors', seller_verified: true,
  website: 'https://example.com', facebook: 'https://facebook.com', instagram: 'https://instagram.com', youtube: 'https://youtube.com', linkedin: 'https://linkedin.com'
}

const sections = [
  ['specs','Vehicle Specifications',CarFront], ['highlights','Highlights',Star], ['description','Description',AlignLeft], ['gallery','Gallery',Images], ['video','Featured Video',CirclePlay], ['seller','Seller',UserRoundCheck], ['social','Social Links',ShareNodes]
]

export default function AutomotiveCard(){
  const [open, setOpen] = useState('specs')
  const [gallery, setGallery] = useState(0)
  const toggle = (id) => setOpen(open === id ? '' : id)
  const highlights = [
    ['Leather Seats', vehicle.leather_seats], ['Panoramic Sunroof', vehicle.sunroof], ['360° Camera', vehicle.rear_camera], ['Apple CarPlay', vehicle.apple_carplay], ['Android Auto', vehicle.android_auto], ['Navigation', vehicle.navigation], ['Blind Spot Monitor', true], ['Adaptive Cruise Control', vehicle.cruise_control], ['Wireless Charger', true], ['Premium Sound System', true]
  ].filter(([,v])=>v)
  const specs = [['Brand',vehicle.brand],['Model',vehicle.model],['Year',vehicle.year],['Mileage',vehicle.mileage],['Transmission',vehicle.transmission],['Fuel Type',vehicle.fuel_type],['Engine Size',vehicle.engine_size],['Horsepower',vehicle.horsepower],['Exterior Color',vehicle.exterior_color]]
  const actions = [[Phone,'Call'],[MessageCircle,'WhatsApp'],[MapPin,'Location'],[Share2,'Share'],[QrCode,'QR Code']]
  return <main className="page-shell"><div className="card-wrap">
    <header className="hero">
      <img src={vehicle.cover_image} alt="Mercedes-Benz G63 AMG" className="cover" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="verified"><CheckCircle2 size={16} /> Verified</div>
        <div className="floating-car"><img src={vehicle.featured_image} alt="G63 AMG" /></div>
        <p className="eyebrow">{vehicle.brand} · {vehicle.model} · {vehicle.year}</p>
        <h1>{vehicle.title}</h1>
        <p className="location"><MapPin size={15}/>{vehicle.location}</p>
        <div className="price"><span>{vehicle.currency}</span> {vehicle.price}</div>
        <div className="meta-row"><span>{vehicle.condition}</span><span>{vehicle.badge}</span></div>
      </div>
    </header>
    <div className="sticky-title"><div><span>{vehicle.brand}</span><strong>{vehicle.model}</strong></div><b>{vehicle.currency} {vehicle.price}</b></div>
    <div className="actions">{actions.map(([Icon,label])=><button key={label} aria-label={label}><Icon size={18}/><span>{label}</span></button>)}</div>
    <div className="sections">{sections.map(([id,title,Icon])=> <section key={id} className="accordion">
      <button className="accordion-head" onClick={()=>toggle(id)}><span className="section-title"><Icon size={18}/><b>{title}</b></span><ChevronDown size={18} className={open===id?'rot':''}/></button>
      {open===id && <div className="accordion-body">
        {id==='specs' && <div className="spec-grid">{specs.map(([k,v])=><div key={k}><span>{k}</span><b>{v}</b></div>)}</div>}
        {id==='highlights' && <div className="chips">{highlights.map(([h])=><span key={h}>{h}</span>)}</div>}
        {id==='description' && <><p className="desc">{vehicle.description}</p><button className="read-more">Read More</button></>}
        {id==='gallery' && <div className="gallery"><img src={vehicle.gallery[gallery]} alt="Vehicle gallery"/><div className="gallery-nav"><button onClick={()=>setGallery((gallery-1+vehicle.gallery.length)%vehicle.gallery.length)}>‹</button><span>{gallery+1} / {vehicle.gallery.length}</span><button onClick={()=>setGallery((gallery+1)%vehicle.gallery.length)}>›</button></div><div className="thumbs">{vehicle.gallery.map((src,i)=><button key={src} onClick={()=>setGallery(i)} className={gallery===i?'active':''}><img src={src} alt="thumb"/></button>)}</div></div>}
        {id==='video' && <div className="video"><img src={vehicle.video_thumbnail} alt="Featured vehicle video"/><div className="play"><CirclePlay size={54}/></div></div>}
        {id==='seller' && <div className="seller"><div className="avatar">AH</div><div className="seller-info"><h3>{vehicle.seller_name}<CheckCircle2 size={15}/></h3><p>{vehicle.seller_title}</p><p>{vehicle.seller_company}</p></div><div className="seller-actions"><button><Phone size={17}/>Call</button><button><MessageCircle size={17}/>WhatsApp</button><button><Mail size={17}/>Email</button></div></div>}
        {id==='social' && <div className="socials"><a href={vehicle.website}><span>⌁</span></a><a href={vehicle.instagram}><Instagram size={20}/></a><a href={vehicle.facebook}><Facebook size={20}/></a><a href={vehicle.youtube}><CirclePlay size={20}/></a><a href={vehicle.linkedin}><Linkedin size={20}/></a></div>}
      </div>}
    </section>)}</div>
    <footer>Z CARD · Automotive</footer>
  </div></main>
}

import ceo from '../../web_assets/web_assets/Blog/ceo.png'
import cfo from '../../web_assets/web_assets/Blog/cfo.png'
import cto from '../../web_assets/web_assets/Blog/cto.png'
import techLead1 from '../../web_assets/web_assets/Blog/techLead1.png'
import techLead2 from '../../web_assets/web_assets/Blog/techLead2.png'
import { StaticImageData } from 'next/image';


type memberType = {
    image: StaticImageData,
    name: string,
    role: string
}

const allMembers : memberType[] = [
  {
    image: ceo,
    name: "Josh Okusi",
    role: "CEO"
  },
  {
      image: cfo,
      name: "Alex Reid",
      role: "CFO"
  },
  {
    image: cto,
    name: "Zain Mobarik",
    role: "CTO"
  },
  // {
  //   image: techLead1,
  //   name: "Jessica Daniels",
  //   role: "Tech Lead"
  // },
  // {
  //   image: techLead2,
  //   name: "Neil Shaabi",
  //   role: "Tech Lead"
  // },

]

export {allMembers, type memberType}
  
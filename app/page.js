import Navbar from "@/Component/navpage";
import HomePage from "@/Component/productpage/productpage";

import DiscoverSection from "@/Component/secondcomponent/description";


import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      
      {/* <Link href={"/user"}>user</Link> */}
      <Navbar/>
      <DiscoverSection></DiscoverSection>
 
<HomePage></HomePage>
    </main>
  );
}

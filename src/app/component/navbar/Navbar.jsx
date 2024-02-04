import Link from "next/link"
import  "./nav.br.css"
function Navbar() {
  return (
    <>
    <div className="nabar">
    <div className="log"><Link href="/Home"> Logo</Link></div>
    <div className="lnk">
        <Link className="lin" href="/Home">Home</Link>
        <Link className="lin" href="/About">About</Link>
         <Link className="lin" href="/Contact">Contact</Link>
         </div>
    </div>
    </>
  )
}

export default Navbar
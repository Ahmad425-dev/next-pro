
import Image from "next/image";
import "./home.css"

function Home() {
  return (
    <div className="h-container">
    <div className="doc-container">
      <h1 className="title">Creative Thought Agency </h1>
      <p className="para">Well, Here All details related your Search you can get  </p>
      <div className="btn">
        <button className="button">Learn More</button>
        <button className="button">Contact</button>
      </div>
      
    </div>
    <div className="img-container"><Image src="/hero (7).gif" alt="" height={300}  width={300}/></div>
    </div>
  )
}

export default Home;
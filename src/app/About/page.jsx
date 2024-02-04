import Image from 'next/image'
import "./about.css"

function About() {
  return (
    <div className='containerrr'>

    <div className='text-area'>
      <h3>About Agency</h3>
      <h1>We create digital ideas that are bigger,bolder braver and better </h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged </p>
      <div className='last'>
      <div> <h2>10 k+</h2>
      <p className='pp'>Year of experience</p></div>
      <div>
      <h2>10 k+</h2>
      <p className='pp'>Year of experience</p></div>
      <div>   <h2>10 k+</h2>
      <p className='pp'>Year of experience</p></div>
     
   
       </div>
    </div>
    <div className='immg'>
      <Image src="/about.png" alt="" height={300}  width={300}/>
    </div>
    </div>
  )
}

export default About
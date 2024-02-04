import Image from 'next/image'
import "./contact.css"
function Contact() {
  return (
    <div className='connt'>
<div className='immg'> <Image src="/about.png" alt="" height={300}  width={300}/></div>

<div className='fom'> 
<form className='fomm'>
<input type='text' placeholder='Enter your first name'></input>
<input type='text' placeholder='Enter your sure  name'></input>
<input type='text' placeholder='Enter  Email'></input>
<textarea rows="10"
cols="20"
id=''
name=''
placeholder='ext here'
 ></textarea>
 <button className='btnn'>Submit</button>
</form>
</div>
    </div>
  )
}

export default Contact
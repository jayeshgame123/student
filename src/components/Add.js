import React from 'react'
import "./Add.css"
export default function Add({studName,studAdd,studMob,studGen,setStudName,setStudAdd,setStudMob,setStudGen,handleSubmit}) {
  return (
    <>
    <br/><div className="container">
        <form onSubmit={(e)=>handleSubmit(e)}>
        <label htmlFor="name" className='lab'>Full Name:</label>
        <input type="text" name="name" className='inp' value={studName} onChange={(e)=>setStudName(e.target.value)} />
        
        <label htmlFor="address" className='lab'>Address</label>
        <textarea name="address" id="" cols="20" rows="2" className='inp' value={studAdd} onChange={(e)=>setStudAdd(e.target.value)}>
        </textarea>
        
        <label htmlFor="mobno" className='lab'>Mobile Number</label>
        <input type="number" name="mobno" className='inp' value={studMob} onChange={(e)=>setStudMob(e.target.value)} />
        
        <label htmlFor="gender" className='lab'>Gender:</label>
        <div className='inp'>
        <label>Male</label>
        <input type="radio" name='gender' value="male" onClick={(e)=>setStudGen(e.target.value)}/>
        <label>Female</label>
        <input type="radio" name='gender' value="female" onClick={(e)=>setStudGen(e.target.value)} />
        </div>
        <div className='inp'>
        <input type="submit" value="submit" />
        <input type="reset" value="reset"/>
        </div>
        </form>
    </div>
    </>
  )
}

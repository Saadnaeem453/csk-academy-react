import { React , useState }  from 'react'

const Mousemove = () => {
    const [x , setX]= useState("0")
    const [y , setY]= useState("0")

    window.addEventListener('mousemove', (event) => {
        setX( event.pageX);
       setY ( event.pageY);
    //    console.log(x+' x '+y+' y ')
     });
  return (
    <div>
      
      <div  style={{zIndex:'999',display:'flex',justifyContent:'center',alignItems:'center', width:'50px', height:'50px',zIndex:"1025",border:'1px solid #04aa6d',borderRadius:'50%', position:'absolute',transition:'top 1.2s ease , left 1.2s ease',pointerEvents:'none',left:`${x-20}px`,top:`${y-21}px`}}> 
           </div>
           <div style={{zIndex:'999', width:'8px', height:'8px',backgroundColor:'#04aa6d',borderRadius:'50%',zIndex:"1025", position:'absolute',transition:'top 1.9s ease , left 1.9s ease',left:`${x}px`,top:`${y}px`}}> 
           </div>
    </div>
  )
}

export default Mousemove

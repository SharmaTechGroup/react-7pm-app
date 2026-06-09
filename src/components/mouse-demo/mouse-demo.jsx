import { useState } from 'react';

export function MouseDemo(){

    const [styleObj, setStyleObj] = useState({position:'fixed', left:'', top:''});

    function handleMouseMove(e){
        setStyleObj({
            position:'fixed',
            left: e.clientX + 'px',
            top: e.clientY + 'px'
        })
    }

    return(
       <div onMouseMove={handleMouseMove}>
         <div className='container-fluid' style={{height:'1000px'}}>
             X : {styleObj.left}
             <br></br>
             Y : {styleObj.top}
         </div>
         <img width={50} style={styleObj} height={50} src='flag.gif' />
       </div>
    )
}
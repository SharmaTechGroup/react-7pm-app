import { useState } from "react";
import { Navbar } from "../../controlled-components/navbar";

export function RenderDemo(){
    const [data] = useState([{Name:'TV', Price: 23000}, {Name:'Mobile', Price:12000}]);
    const [toggle, setToggle] = useState('save');
    const [toggleText, setToggleText] = useState('Edit');
    const [toggleClass, setToggleClass] = useState('btn btn-warning bi bi-pen-fill');

    function handleToggleClick(){
        if(toggleText==='Edit'){
            setToggleText('Save');
            setToggleClass('btn btn-success bi bi-floppy-fill');
            setToggle('edit');
        } else {
            setToggleText('Edit');
            setToggleClass('btn btn-warning bi bi-pen-fill');
            setToggle('save');
        }
    }
    function handleDoubleClick(){
        handleToggleClick();
    }
    return(
        <div className="container-fluid">
            <h2>Conditional Render</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {
                     data.map(item=><tr key={item.Name}>
                         <td onDoubleClick={handleDoubleClick}> {(toggle==='save')?<label >{item.Name}</label>:<input onBlur={handleDoubleClick} type="text" value={item.Name} />} </td>
                         <td>
                            {(toggle==='save')?<label>{item.Price}</label>:<input type="text" value={item.Price} />}
                         </td>
                         <td>
                            <button onClick={handleToggleClick} className={toggleClass}> {toggleText} </button>
                            
                         </td>
                     </tr>)
                   }
                </tbody>
            </table>
        </div>
    )
}
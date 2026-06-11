

export function ButtonDemo(){

    function handleDoubleClick(){
        window.open('iphone-marine.webp', 'iphone', 'width=300 height=400');
    }
    function handleContextMenu(){
        document.oncontextmenu = function(){
            alert('Right Click Disabled');
            return false;
        }
    }

    return(
        <div className="container-fluid" onContextMenu={handleContextMenu} style={{height:'1000px'}}>
            <dl>
                <dt>Account Number</dt>
                <dd><input type="text" /></dd>
                <dt>Verify Account</dt>
                <dd><input type="text" /></dd>
            </dl>
            <img src="iphone-marine.webp" onDoubleClick={handleDoubleClick} width={100} height={100} />
            <p>Double click to view large</p>
        </div>
    )
}
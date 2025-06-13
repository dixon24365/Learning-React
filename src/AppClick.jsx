export default function AppClick(){
    function handleClick(){
        console.log('Clicked')
        
    }

    function mouseOver(){
        console.log('Felix not the boy')
        
    }
    return(
        <div>
            <img onMouseOver={mouseOver} src="/img/felix.png" alt="boy on bike" /><br></br>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}
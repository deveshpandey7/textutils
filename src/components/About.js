import React  from 'react'

export default function About(props) {


    // const [myStyle, setMyStyle] = useState({ // this and below commeneted code is to give darkmode in button in accordian separately
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    let myStyle = {
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
    }

//    const [btntext, seBtnText] = useState("Enable Dark Mode")
    
    // const  toggleStyle = ()=>{
    //   if ( myStyle.color === 'black'){
    //        setMyStyle({
    //         color: 'white',
    //         backgroundColor: 'black',
    //         border: '1px solid white'

    //        })

    //        seBtnText("Enable Light Mode")
    //   }
    //   else{
    //     setMyStyle({
    //         color: 'black',
    //         backgroundColor: 'white'
    //        })

    //        seBtnText("Enable Dark Mode");

    //   }
    // }

  return (


    <div className="container" style={{ color: props.mode === 'dark'?'white':'#042743'}}>
        <h2>About Us</h2>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               Analyze your text.
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
             Analyze and work on tour text using this app.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Free to use.
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
               This app is completely free to use.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Browser Compatible
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
               This app is browser compatible.
            </div>
            </div>
        </div>
        </div>
       
    </div>
  )
}

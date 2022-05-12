import React from 'react';


export default function About(props){

    // const [MyStyle,setMyStyle]=useState(
    //     {
    //         color: 'white',
    //         background: 'black'
    //     }
    // )
var mode ="black";
    if(props.mode==='light')
    {
        mode='white'
        console.log('changed')
        // setMyStyle(  {
        //             color: 'black',
        //                background: 'white'
        //          });

    }
    else{
        mode='black'
        console.log('changed 565')
        // setMyStyle(  {
        //             color: 'white',
        //                background: 'black'
        //          });
    }

    //   if(mode==='light')
    //   {

    //     setMyStyle(  {
    //         color: 'black',
    //            background: 'white'
    //      });
    //   }
    //   else{
    //     setMyStyle(  {
    //         color: 'white',
    //            background: 'black'
    //      });
    //   }
    

    return(
        <div className="container" style={{ color: mode=== 'white'?'black':'white'}} >
        <div className="accordion" id="accordionExample">
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{background: mode=== 'white'?'white':'black', color: mode=== 'white'?'black':'white'}} >
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{background: mode=== 'white'?'white':'black', color: mode=== 'white'?'black':'white'}} >
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{background: mode=== 'white'?'white':'black', color: mode=== 'white'?'black':'white'}}  >
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{background: mode=== 'white'?'white':'black', color: mode=== 'white'?'black':'white'}} >
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{background: mode=== 'white'?'white':'black', color: mode=== 'white'?'black':'white'}} >
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{background: mode=== 'white'?'white':'black', color: mode=== 'white'?'black':'white'}} >
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
        </div>
    )
}



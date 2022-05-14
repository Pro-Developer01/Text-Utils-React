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
          <center><h2>About</h2> </center>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{background: mode=== 'white'?'white':'black', color: mode=== 'white'?'black':'white'}} >
        <strong>Services </strong> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{background: mode=== 'white'?'white':'black', color: mode=== 'white'?'black':'white'}} >
        Text Utils is a web app build on React.js, It provide various text utility services such as uppercase, lowercase, text to speech, standarisation etc. One can extract number and email informations also from a give paragraph.
        It also show total word and charachter count in a pargraph with approx reading time one can take.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{background: mode=== 'white'?'white':'black', color: mode=== 'white'?'black':'white'}}  >
         <strong> Scope</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{background: mode=== 'white'?'white':'black', color: mode=== 'white'?'black':'white'}} >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium nesciunt repellat explicabo sit, eum, vel veritatis quo tenetur, doloremque alias suscipit quibusdam iusto excepturi. Eligendi, cumque tempore aliquid ab quis atque similique enim quasi, voluptatem alias recusandae laboriosam! Distinctio totam odio, sequi expedita ducimus dolores recusandae veritatis nam optio vitae ea error. Doloremque ut ad nulla error nesciunt voluptatibus dolores!
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{background: mode=== 'white'?'white':'black', color: mode=== 'white'?'black':'white'}} >
        <strong> Functionalities</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{background: mode=== 'white'?'white':'black', color: mode=== 'white'?'black':'white'}} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi autem necessitatibus laboriosam ullam repellat tempora consequuntur aliquid illum qui, consectetur officia magni accusamus ex. Et, fugit facilis! Deleniti saepe unde aliquam aut. Iure reiciendis rerum, sint maiores aliquid ut eveniet odio natus tenetur non quae voluptatem vero. Tempore accusamus rem laudantium necessitatibus culpa quo nihil, ipsam dolorem voluptas iure exercitationem explicabo qui, molestias aliquam corporis id ullam esse perspiciatis iste!
      </div>
    </div>
  </div>
</div>
        </div>
    )
}



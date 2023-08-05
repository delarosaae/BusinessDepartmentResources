import {useState} from "react";

const GetIDButton = (props) =>{

    const [style, setStyle] = useState({backgroundColor: ''})

    const sendIDHandler = (event) =>{
        //console.log("Delete Button ID" + event.target.id)
        props.idSend(event.target.id)
    }


    return(
      <div>
          <button style={style} key={props.idInfo} id={props.idInfo} onClick={sendIDHandler}
          onMouseEnter={e =>{
            setStyle({backgroundColor: "red"})
          }}

          onMouseLeave={e =>{
              setStyle({backgroundColor: ""})
          }}
          >Delete</button>
      </div>
    )
}

export default GetIDButton;
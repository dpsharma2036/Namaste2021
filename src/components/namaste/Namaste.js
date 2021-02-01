import React from 'react';


function Namaste(props){
    console.log(props);

   /* if (props.match.params.name){
        let name= props.match.params.name

    } else{
        let name = props.name;
    }
       = let name = props.match.params.name || props.name;
       */
    let name = props.match && props.match.params.name || props.name;
    return(
     <div className="Namaste">
        Namaste, {name}!
     </div>
    );
}

export default Namaste;
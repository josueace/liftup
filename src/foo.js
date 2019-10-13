import React from 'react';


class Foo extends React.Component{
   
    
    // if using this then you need to bind in constructor
    /* 
    handleClick(event){
    alert(event.target.name);
     alert(this); 
   }
*/
   
    handleClick=event=>{
      alert(event.target.name);
      alert(this); 
     }
     
    
    render(){
     
      return (
        <button name="coco" type="button" 
        onClick={this.handleClick}>
        Click Me
        </button>
      );
    }
  }

  export default Foo;
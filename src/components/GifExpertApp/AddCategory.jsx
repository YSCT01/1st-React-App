import { useState } from "react";
import PropTypes from 'prop-types';

const AddCategory = ({setCat}) => {

  const [value, setValue] = useState("");
  const [validate, setValidate] = useState("");

  const handleInputChange= (e)=>{
    //console.log(e.target.value);
    setValue(e.target.value);
  }

  const handleSubmit=(e)=>{
      e.preventDefault();
      if(value.trim().length>1){
        setValidate("");
        setCat(categories =>[ value, categories]);
        setValue("");
      }
      else{
        setValidate("Error, ingresa un elemento válido");
      }
  }

  return (
    <>
        <h4>{validate}</h4>
        <form onSubmit={(e)=>{ handleSubmit(e)}} >
          <input 
          type="text" placeholder="Search your category"
          value={value}
          onChange={(e)=>{handleInputChange(e)}}/>
        </form>
    </>
  )
}

export {
    AddCategory as default,
}


AddCategory.propTypes={
  setCat:PropTypes.func.isRequired,
}
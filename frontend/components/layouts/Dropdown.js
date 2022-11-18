
import React,{forwardRef} from 'react';

const Dropdown=(({value,onChange,options, placeholder,width},ref)=>{
    return (
        <div className={``}>
        <select ref={ref}  key={options} onChange={onChange} required  defaultValue={placeholder} className={`form-input w-full`} >
         <option value={placeholder} disabled onChange={onChange} className={`display-none`} >{placeholder}</option>   
        {options.map((option,idx)=>(<option key={idx} value={option.value}>{option.label}</option>))}
        </select>
        </div>
)
})

export default forwardRef(Dropdown);
import React,{Component} from 'react';
import '../css/ReviewForm.css';

const ReviewForm = ({value, onSubmit, onCreate, onChange}) =>  {
    
    return(
        <div className = "form" >
            <textarea value={value.replace('\r\n','<br>')} onChange={onChange} 
            />
            <div className="create-button" onClick={onSubmit}>
                +
            </div>
        </div>
    )
}

export default ReviewForm;
import React from 'react';

const PersonalInfo = (props) => {
    return (
        <React.Fragment>
            <h2>{props.title}</h2>

            {props.fields.map((fieldGroup)=>{    
                return(    
                    <div className="form-group">
                        <div className='row'>
                            {fieldGroup.map((field)=>{
                                return(
                                    <div className='col'>
                                        <input 
                                            type={field.type} 
                                            className="form-control" 
                                            id={field.id} 
                                            placeholder={field.label}
                                            name={field.id} 
                                        />
                                    </div> 
                                )
                            })}    
                        </div>
                    </div>
                )
            })}

        </React.Fragment>
    )
};

export default PersonalInfo;
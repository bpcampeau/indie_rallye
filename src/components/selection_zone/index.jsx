import React from 'react';
import './styles.css';

const ZoneSelection = (props) => {
    const zones = props.zones || [];

    return (
        <div className="form-group zone-select">
            <h2>{props.title}</h2>

            {zones.map((zone)=>{
                return(
                    <div key={zone.name} className="form-group">
                        <div class="form-check pretty p-icon p-curve p-jelly">
                            <input type="checkbox" className="form-check-input" onClick={()=>{if(zone.id === 'indie_zone')props.activeAction()}}  name={zone.id} id={zone.id} value={zone.name} />
                            <div class="state p-primary">
                                <i className='icon fa fa-check'></i>
                                <label className="form-check-label" for={zone.id}>{zone.name}</label>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
};

export default ZoneSelection;
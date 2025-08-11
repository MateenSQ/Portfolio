import React from 'react';
import { useState } from 'react';

const Collapsible = (props) => {

    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }

    return(
        <div>
            <button onClick={toggle}>{props.label}</button>
            {open && (
                <div className="toggle">
                    <h4>Toggle Area</h4>
                </div>
            )}
        </div>
    );
}

export default Collapsible;
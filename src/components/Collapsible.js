import { motion, AnimatePresence } from "motion/react";
import { useState } from 'react';
import { useRef } from 'react';

const Collapsible = (props) => {

     const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }

    const contentRef = useRef();
    if (contentRef.current) console.log(contentRef.current.scrollHeight);

    return(
        <div>
            <button className="toggleButton" onClick={toggle}>{props.label}</button>
            <AnimatePresence>
                {open && (<motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {props.children}
                </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Collapsible;
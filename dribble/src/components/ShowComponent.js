import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ShowComponent = ({ children }) => {
    const location = useLocation();
    const [showComponent, setShowComponent] = useState(false);

    useEffect(() => {
        if (location.pathname === "/" || location.pathname === "/details" || location.pathname === "/createprofile") {
            setShowComponent(false);
        } else {
            setShowComponent(true);
        }
    }, [location]);

    return (
        <div>
            {showComponent && children}
        </div>
    );
};

export default ShowComponent;

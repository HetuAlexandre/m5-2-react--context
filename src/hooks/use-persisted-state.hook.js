import React from "react";

const usePersistedState = (key, defaultValue) => {
    const [value, setValue] = React.useState(() =>{
        const storageItem = localStorage.getItem(key);
            if (storageItem !== null)return JSON.parse(storageItem);
            else if (storageItem === null)return defaultValue;
    })
    React.useEffect(() =>{
        localStorage.setItem(key,
        JSON.stringify(value)
        );
        
    },[key, value])
    return [value, setValue]
}

export default usePersistedState;
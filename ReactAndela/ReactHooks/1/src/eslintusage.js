import React, {useEffect, useState} from 'react'

const InputElement = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => { setIsLoading(false)}, 3000);
});

return isLoading ? <div>Loading...</div> :<input placeholder = " Enter Some Text"/>;};

export default InputElement
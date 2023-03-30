import React, { useEffect, useState } from 'react';
import Text from '../Text';
import Input from '../Input';

const Converter = () => {
    const [celsius, setCelsius] = useState(0);

    const update = isCelsius => newValue => {
        setCelsius(isCelsius ? newValue : (newValue - 32) * 5 / 9)
    }

    console.log("at every render")

    useEffect(() => {
        console.log("at load")
    }, [])

    return (
        <>
            <Input title="Celsius"
                value={celsius}
                update={update(true)}
            />
            <br />
            <Text title="=" />
            <br />
            <Input title="Fahrenheit"
                value={celsius * 9 / 5 + 32}
                update={update(false)}
            />
        </>
    )
}

export default Converter;
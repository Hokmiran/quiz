import './start.css';
import { useRef } from 'react';

export default function Start({ setUsername, letsPlay }) {
    const inputRef = useRef();
    const handleClick = () => {
        inputRef.current.value && setUsername(inputRef.current.value);
        inputRef.current.value && letsPlay();
    }
    return (
        <div className='start'>
            <input placeholder='enter your name' className='startInput'
                ref={inputRef}
            />
            <button className='startButton' onClick={handleClick}>Start</button>
        </div>
    )
}

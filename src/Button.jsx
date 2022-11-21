import React, {useContext} from 'react';
import { ThemeContext } from './ThemeContext';

function Button() {
  // access the context value
  const {toggleTheme} = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} className='button'>
      Switch
      <span role='img' aria-label='sun'>
        🌞
      </span>
      <span role='img' aria-label='moon'>
        🌚
      </span>
    </button>
  );
}

export default Button;

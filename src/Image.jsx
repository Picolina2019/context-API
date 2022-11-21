import React, { useContext } from 'react';
import Button from './Button';
import { ThemeContext } from './ThemeContext';

function Image() {
  // access the context value
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`${theme}-image image`}>
      <div className={`${theme}-ball ball`} />
      <Button />
    </div>
  );
}

export default Image;

import React from 'react';
import Button from './Button'

export default function ButtonBox( {listUpdate} ) {
  return (
    <div className="buttonBox">
        <Button listUpdate={listUpdate}  text="Milk"/>
        <Button listUpdate={listUpdate}  text="Bananas"/>
        <Button listUpdate={listUpdate}  text="Bread"/>
        <Button listUpdate={listUpdate}  text="Eggs"/>
    </div>
  );
}

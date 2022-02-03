import React from 'react';
import Button from './Button'

export default function ButtonBox( {listUpdate, itemIndex} ) {
  
  return (
    <div className="buttonBox">
        <Button listUpdate={listUpdate} index={itemIndex[0].id} text="Milk"/>
        <Button listUpdate={listUpdate} index={itemIndex[1].id} text="Bananas"/>
        <Button listUpdate={listUpdate} index={itemIndex[2].id} text="Bread"/>
        <Button listUpdate={listUpdate} index={itemIndex[3].id} text="Eggs"/>
    </div>
  );
}

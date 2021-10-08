import React from 'react';

import './CollectionItem.scss';

export default function CollectionItem(props) {
  const { imageUrl, name, price } = props;

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  );
}

import React from 'react';
import {ItemFromList} from '../component-item/ItemFromList';

export const ItemList = ({arr, arr2}) => (
<div>
    {arr.map((item, id) => (
      <ItemFromList
        key={id = Date.now}
        {...item}
      />
    ))}
  {arr2.map((item, id) => (
      <ItemFromList
        key={id = Date.now}
        {...item}
      />
    ))}

  </div>
	);

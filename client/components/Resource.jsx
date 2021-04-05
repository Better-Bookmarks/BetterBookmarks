import React from 'react';

const Resource = (props) => {
  return (
    <div>
      {props.url}
      {props.description}
    </div>
  )
}

export default Resource;
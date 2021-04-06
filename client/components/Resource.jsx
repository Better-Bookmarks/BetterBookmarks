import React from 'react';

const Resource = (props) => {
  return (
    <div>
      <div>
      {props.url}
      </div>
      <div>
      {props.description}
      </div>
    </div>
  )
}

export default Resource;
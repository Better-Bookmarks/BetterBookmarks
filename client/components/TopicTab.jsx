import React from 'react'
import Resource from './Resource'

const TopicTab = (props) => {

  const handleChange = (topic, resources) => {
    props.onChange(topic, resources)
  }

  return (
    <div>
      <button type='button' onClick={() => {
        handleChange(props.topic, props.resources);
        props.changeDisplay();
      }}>
      {props.topic}
      </button>
    </div>
  )
}

export default TopicTab;

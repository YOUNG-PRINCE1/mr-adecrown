import React from 'react'
import './Loading.css'

const Loading = () => {
  return (
    <div>
        <div className="container">
  <div className="loading-text">Loading to success</div>
  <div className="progress-bar">
    <div className="progress-fill" />
  </div>
  <div className="status">Stay Focused</div>
  <div className="lights" />
</div>

    </div>
  )
}

export default Loading
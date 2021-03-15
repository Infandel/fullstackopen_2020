import React from 'react'


const SuccessNotification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="successNoti">
      {message}
    </div>
  )
}


export default SuccessNotification
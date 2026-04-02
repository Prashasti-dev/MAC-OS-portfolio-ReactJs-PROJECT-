import React, { useEffect, useState } from 'react'

const formatDateTime = (date) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const day = days[date.getDay()]
  const month = months[date.getMonth()]
  const dayOfMonth = date.getDate()

  let hours = date.getHours()
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const seconds = date.getSeconds().toString().padStart(2, '0')

  const ampm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12
  if (hours === 0) hours = 12

  return `${day} ${month} ${dayOfMonth} ${hours}:${minutes}:${seconds} ${ampm}`
}

const DateTime = () => {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date())
    }, 1000) // 🔥 update every second

    return () => clearInterval(timer)
  }, [])

  return <div>{formatDateTime(now)}</div>
}

export default DateTime
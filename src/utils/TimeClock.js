import moment from 'moment'
import { useState } from "react"
require('moment/locale/es');

const TimeClock = () => {
    
    const [time, setTime] = useState('')

    setInterval(() => {
      setTime(moment().format('dddd Do MMMM YYYY, h:mm:ss a'));
    }, 1000);

   return (
    <div>
      {time}
    </div>
  )
}

export default TimeClock
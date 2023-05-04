import React, { useState } from 'react'
import './index.module.scss'

const Home: React.FC = () => {
  const [home] = useState(0)
  return <div>{home}</div>
}
export default Home

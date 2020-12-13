import React from 'react'
import Banner from './components/Banner'
import Overview from './components/Overview'
import CustomInput from './components/CustomInput'

const App = () => {
  return (
    <>
      <Banner />
      <div className="container">
        <Overview title="Todo" />
        <CustomInput
          type="text"
          placeholder="Create a todo"

        />
      </div>
    </>
  )
}

export default App;

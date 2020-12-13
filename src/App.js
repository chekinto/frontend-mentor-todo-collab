import React from 'react'
import Overview from './components/Overview'
import CustomInput from './components/CustomInput'

const App = () => {
  return (
    <>
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

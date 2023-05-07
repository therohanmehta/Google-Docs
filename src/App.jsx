
import ActionBar from './ActionBar/ActionBar'
import './App.css'
import IconBar from './IconBar/IconBar'
import MenuBar from './MenuBar/MenuBar'
import TextArea from './TextArea/TextArea'

function App() {

  return (
    <>
      <div className='header'>
        <MenuBar /> 
       <ActionBar/>
       </div>
       <TextArea/>
       

    </>
  )
}

export default App

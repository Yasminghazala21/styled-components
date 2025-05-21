import {Heading, CustomButton} from './styledComponents'
import './App.css'

const App = () => (
  <>
    <Heading>Hello World</Heading>
    <CustomButton type="button">Click</CustomButton>
    <CustomButton type="button" onClick={() => alert("clicked")} outline>
      Click
    </CustomButton>
  </>
)

export default App

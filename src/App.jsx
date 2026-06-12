import "./App.css"
import Card from './component/Card'

const App = () => {
  return (
    <div className="app container">
      <Card name="Balamurugan" email="balamurugan@example.com" btnname="Btn1" />
      <Card name="Arun Kumar" email="arun.kumar@example.com" btnname="Btn2" />
      <Card name="Priya Sharma" email="priya.sharma@example.com" btnname="Btn3" />
    </div>
  )
}

export default App

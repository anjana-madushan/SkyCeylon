import Dashboard from "./components/Dashboard"
import Header from "./components/Header"

function App() {

  return (
    <div className="flex flex-col p-2 h-screen w-screen">
      <div className="m-1">
        <Header />
      </div>
      <div className="m-1 flex-1">
        <Dashboard />
      </div>
    </div>
  )
}

export default App

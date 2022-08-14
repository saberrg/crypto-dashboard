import NewsFeed from "./components/Newsfeed"
import CurrencyConverter from "./components/CurrencyConverter"


const App = () => {
  return (
    <div className="app">
      <h1>Cryptocurrency Dashboard</h1>
      <div className="app-wrapper">
        <CurrencyConverter />
        <NewsFeed />
      </div>

    </div>
  )
}

export default App

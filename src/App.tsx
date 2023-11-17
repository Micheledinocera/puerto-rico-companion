import "./App.sass"
import AppRouter from "routes/AppRouter"
import Layout from "layouts/Layout"

const App = () => {
  return (
    <Layout>
      <AppRouter />
    </Layout>
  )
}

export default App;
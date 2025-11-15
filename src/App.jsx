import "./App.css"
import { CakeView } from "./app/features/cake/CakeView"
import { IcecreamView } from "./app/features/icecream/icecreamView"
import { UserView } from "./app/features/user/UserView"

function App() {
  return (
    <>
      <CakeView />
      <IcecreamView />
      <UserView />
    </>
  )
}

export default App

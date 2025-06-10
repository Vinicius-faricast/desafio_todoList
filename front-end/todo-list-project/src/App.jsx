import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar"
import { ListTasks } from "./components/ListTasks/ListTasks";
import { AddTasks } from "./components/AddTasks/AddTasks";
import { ContextProvider } from "./context/Context";

function App() {

  return (
    <ContextProvider>
      <BrowserRouter
        future={{
          v7_startTransition: true,
        }}>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<ListTasks />} />
            <Route path="/add-tasks" element={<AddTasks />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App

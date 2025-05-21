import { BrowserRouter, Routes, Route } from "react-router";
import { Navbar } from "./components/Navbar/Navbar"
import { ListTasks } from "./components/ListTasks/ListTasks";
import { AddTasks } from "./components/AddTasks/AddTasks";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListTasks />} />
        <Route path="/add-tasks" element={<AddTasks />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

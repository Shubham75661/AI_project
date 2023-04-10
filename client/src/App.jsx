import { BrowserRouter, Route, Link, Routes } from "react-router-dom"
import { Home, CreatePost } from "./pages"
import {logo} from "./assets"

function App() {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center
      bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to= "/">
          <img src = {logo} alt = "logo" 
          className="w-28 object-contain"/>
        </Link>
        <Link to = '/create-post' className="px-6 py-2
        bg-[#6469ff] font-inter font-medium text-white rounded-md">
          Create
        </Link>
      </header>
      <main className="bg-[#f9fafe] w-full min-h-[calc(100vh-73px)]
      sm:px-8 px-4 py-8">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create-post" element={<CreatePost/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App

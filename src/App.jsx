import Hero from "./components/Hero"
import Highlight from "./components/Highlight"
import Navbar from "./components/Navbar" 

const App = ()=>{
  return (
    < main  className="bg-black">
  <Navbar/> 
  <Hero/>
  <Highlight/>
      
    </main>
  )
}

export default App 
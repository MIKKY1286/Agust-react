// function App() {
//   return (
//     <div className="App">
//       <h1>Hello Vite + React!</h1>
//       <div className="card">
//         <button onClick={() => console.log('Hello Vite + React!')}>
//           Click me
//         </button>
//       </div>
//     </div>
//   )
// }

// import { TopCourses } from "./TopCourses"
import { useState } from 'react'
import { TodoList } from './TodoList'
import './App.css'
import { Button } from './Button'
import { Navbar } from './component/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { About } from './pages/about'
import { Contact } from './pages/contact'
import { Dashboard } from './pages/dashboard'
import { Profile } from './pages/profile'
import { Products } from './pages/products'
import { ProductDetails } from './pages/productDetails'
import { Login } from './pages/login'

// const App = ()=> {
//   return (
//     <div className="App">
//       <TopCourses />
      
//       <div>
//         <p>Age {age}</p>
//      <h1>Hello World</h1>
//         <p>Welcome to the App component!</p>
   
//         <h1>{name}Profile</h1>
//         <ul>
//           <li>Name: {User.n</li>
//         </ul>
//       </div>
//     </div>

    
//   )
// }


// use state hook to store the value of the count and the value of the show email and the value of the user email
export const App = ()=>{
  const [count, setCount] = useState(0)
  const [showEmail, setShowEmail] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const name = "ayo"
  const age = 8
  const user = {
    name: "Tayo", 
    age: 10,
    country: "Canada",
    gender: "female",
    active: true
  }


  // toggle email on click on the button in the p tag
   const handleToggleEmail = () => {
    setShowEmail(!showEmail);
    console.log(showEmail);
    
   }



   // handle increment the value of count when the button is clicked
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1)
    console.log(count);
    
  }
  

  // handle show email when the button is clicked
  // const handleShowEmail = () => {
  //   setShowEmail(true)

  // }


  

  // handle decrement the value of count when the button is clicked
  // const handleDecrement = () => {
  //   setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  // }


  // map through the product array and display the product name and price
  // const product = [
  //   {
  //     id: 1,
  //     title: "Bag",
  //     price: 1000, 
  //     description: "THis is a bag",
  //     rating: 5
  //   },
  //   {
  //     id: 2,
  //     title: "Bag",
  //     price: 2000, 
  //     description: "THis is a bag",
  //     rating: 5
  //   },
  //   {
  //     id: 3,
  //     title: "Bag",
  //     price: 1000, 
  //     description: "THis is a bag",
  //     rating: 5
  //   },
  //   {
  //     id: 4,
  //     title: "Bag",
  //     price: 1000, 
  //     description: "THis is a bag",
  //     rating: 5
  //   }
  // ]


  // return the value of the product array,  map through the product array and display the product name and price
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/profile/:name/:age" element={<Profile/>}/>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={
            <div>
              <h1>Dashboard Overview</h1>
              <p>Welcome to your active dashboard area. Selecting links from the sidebar will change the page!</p>
            </div>
          } />
          <Route path="settings" element={
            <div>
              <h1>Settings</h1>
              <p>Manage your application preferences and settings.</p>
            </div>
          } />
        </Route>
      </Routes>



























































































       {/* <TodoList /> */}
       {/* add a label for the email and a input for the email and a button to show the email on click */}
       {/* <label htmlFor="email">Email:</label>
       <input type="email" id="email" placeholder='Enter your email' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />  */}
       {/* show email on click  on the button in the p tag */}
       {/* <button onClick={handleToggleEmail}>show email</button>
        {showEmail && <p>user email : {userEmail}</p>} */}




       {/*  add a button to increment the value of count and a button to decrement the value of count */}
       {/* <h1>count: {count}</h1>
       <button onClick={handleIncrement}>Increment</button>
       <button onClick={handleDecrement}>Decrement</button> */}



       {/* <p className='p'>here is a p tag</p>
       <p>{name}</p>
       <p>Age {age}</p> */}


       {/*  add  a user object with the properties name, age, gender, country, active and display the value of the user object */}
       {/* <h1>{user.name} Profile</h1>
       <ul>
          <li>Name: {user.name}</li>
          <li>Age: {user.age}</li>
          <li>Gender: {user.gender}</li>
          <li>country: {user.country}</li>
          <li>Active: {user.active}</li>
       </ul> */}
       

       {/* call the button component */}
       {/* <Button text={"Submit"} bg={"btn-blue"} onClick={() => console.log('hello')}/>
       <Button text={"Cancel"} bg={"btn-red"} onClick={() => console.log('world')}/> */}
    </div>
    </Router>
  )
}

export default App
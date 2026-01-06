import React from "react"
import { Routes, Route } from "react-router-dom"
import { Home } from "./components/Home"
// import { About } from "./components/About"
import { Navbar } from "./components/Navbar"
import { OrderStatus } from "./components/OrderStatus"
import { Products } from "./components/Products"
import { NoMatch } from "./components/NoMatch"
import { NewProducts } from "./components/NewProducts"
import { Users } from "./components/Users"
import { UserDetails } from "./components/UserDetails"
import { FeaturedProducts } from "./components/FeaturedProducts"
import { Profile } from "./components/Profile"
import { AuthProvider } from "./components/auth"
import { Login } from "./components/Login"
import { RequireAuth } from "./components/RequireAuth"

const LazyAbout = React.lazy(() => import('./components/About'))
export default function App() {
  
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<React.Suspense fallback='Loading...'><LazyAbout /></React.Suspense>} />
        <Route path="order-status" element={<OrderStatus />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="profile" element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  )
}

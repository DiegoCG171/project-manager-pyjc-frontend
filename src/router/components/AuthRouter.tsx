import { Navigate, Route, Routes } from "react-router-dom"
import { authRoutes } from "../routes/authRoutes"

export const AuthRouter = () => {
  return (
    <Routes>
      {
        authRoutes.map(({path, component: Component}) => (
          <Route key={path} path={path} element={<Component />}/>
        ))
      }
      <Route path="/*" element={<Navigate to="/auth/login" replace />} />
    </Routes>
  )
}

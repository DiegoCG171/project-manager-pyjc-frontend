import { Navigate, Route, Routes } from "react-router-dom"
import { mainRoutes } from "../routes/mainRoutes"

export const MainRouter = () => {
  return (
    <Routes>
      {
        mainRoutes.map(({path, component: Component}) => (
          <Route key={path} path={path} element={<Component />} />
        ))
      }
      <Route path="/*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}

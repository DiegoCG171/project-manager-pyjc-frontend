import { Navigate, Route, Routes } from "react-router-dom"
import { mainRoutes } from "../routes/mainRoutes"
import { MainLayout } from "../../shared/layout/auth/MainLayout"

export const MainRouter = () => {
  return (
    <MainLayout>
      <Routes>
        {
          mainRoutes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))
        }
        <Route path="/*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </MainLayout>
  )
}

import type { MenuProps } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { mainRoutes } from "../router/routes/mainRoutes";

type MenuItem = Required<MenuProps>["items"][number];

export const useRoutes = () => {
  const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState<MenuItem[]>();
  const [currentRoute, setCurrentRoute] = useState('boxes');

  useEffect(() => {
    const viewRoutes = mainRoutes.filter((route) => route.viewMenu);
    
    setMenuItems(
      viewRoutes.map((route) => ({
        label: route.label,
        key: route.path,
        icon: route.icon
      }))
    );
  }, []);


  const handleNavigate = (route: string) => {
    navigate(`/${route}`)
    setCurrentRoute(route)
  }

  return {
    menuItems,
    currentRoute,
    handleNavigate,
  };
};

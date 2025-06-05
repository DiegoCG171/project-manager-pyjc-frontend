import { useNavigate } from "react-router-dom";
import LogoSVG from "../../assets/logo_title.svg";

export const Logo = () => {
  const navigate = useNavigate();
  const onNavigate = () => {
    navigate("/dashboard");
  };

  return (
    <img
      src={LogoSVG}
      onClick={onNavigate}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        padding: "24px 32px",
        width: "5rem",
        cursor: "pointer",
      }}
    />
  );
};

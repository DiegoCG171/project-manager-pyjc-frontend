import { useNavigate } from "react-router-dom";
import LogoTitleSVG from "../../assets/logo_title.svg";
import LogoSVG from "../../assets/logo.svg";

interface Props {
  size?: number;
  variant?: "simple" | "withTitle";
  isNavigated?: boolean;
}

export const Logo = ({size = 5, variant = "simple", isNavigated = false}: Props) => {
  const navigate = useNavigate();
  const onNavigate = () => {
    navigate("/dashboard");
  };

  return (
    <img
      src={ variant === "simple" ? LogoSVG : LogoTitleSVG}
      onClick={isNavigated ? onNavigate : undefined}
      style={{
        padding: "24px 32px",
        width: `${size}rem`,
        cursor: isNavigated ? "pointer" : undefined,
      }}
    />
  );
};

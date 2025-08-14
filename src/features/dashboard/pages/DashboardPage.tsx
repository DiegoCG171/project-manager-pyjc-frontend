import { Typography } from "antd";
import { BackButton } from "../../../shared/components/BackButton";
import { CardsAreas } from "../components/CardsAreas";
import { DashboardGrafica } from "../components/DashboardGrafica";
import { DashboardTabla } from "../components/DashboardTabla";
import { useBreakpoint } from "../../../hooks/useBreakpoint";

const { Title } = Typography;

export const DashboardPage = () => {
  const breakpoint = useBreakpoint();
  const isMobile = breakpoint === "xs" || breakpoint === "sm";
  return (
    <div
      style={{
        padding: isMobile ? "20px" : "30px 50px",
        height: "100vh",
        overflowY: "auto",
        flex: 1
      }}
    >
      <BackButton />
      <Title style={{ margin: isMobile ? "10px 0 20px 0" : "20px 0px 30px 0px" }} level={2}>
        Áreas
      </Title>
      <CardsAreas />
      <div
        style={{
          display: "flex",
          gap: "24px",
          flexDirection: isMobile ? "column" : "row"
        }}
      >
        <DashboardGrafica fullWidth={isMobile} />
        <DashboardTabla fullWidth={isMobile} />
      </div>
    </div>

  );
};

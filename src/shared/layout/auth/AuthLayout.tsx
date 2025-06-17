import type { JSX } from "react";
import { Carousel, Col, Row, Space } from "antd";

import styles from "../../styles/AuthLayout.module.css";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
import { Logo } from "../../components/Logo";
import Slider1 from "../../../assets/slider1.png";

interface Props {
  children?: JSX.Element;
}

export const AuthLayout = ({ children }: Props) => {
  const breakpoint = useBreakpoint();
  const smallScreen = ["xs", "sm"].includes(breakpoint);
  return (
    <Row>
      <Col
        sm={{ span: 24 }}
        md={{ span: 10 }}
        className={styles.auth_layout_content}
      >
        <Space
          direction="vertical"
          align="center"
          size={16}
          style={{ width: smallScreen ? "85%" : "70%", marginTop: 24 }}
        >
          <Logo size={8} variant="withTitle" />
          {children}
        </Space>
      </Col>
      {!smallScreen && (
        <Col sm={{ span: 24 }} md={{ span: 14 }} style={{ padding: 0 }}>
          <Carousel
            autoplay={true}
            autoplaySpeed={5000}
            className={styles.auth_layout_carousel}
          >
            {[Slider1, Slider1, Slider1].map((item) => (
              <div>
                <h3 className={styles.auth_layout_slider}>
                  <img
                    src={item}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                  />
                </h3>
              </div>
            ))}
          </Carousel>
        </Col>
      )}
    </Row>
  );
};

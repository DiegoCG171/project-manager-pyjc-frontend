import type { JSX } from "react";
import { Carousel, Col, Row, Space } from "antd";

import styles from "../../styles/AuthLayout.module.css";
import { useBreakpoint } from "../../../hooks/useBreakpoint";

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
        md={{ span: 12 }}
        className={styles.auth_layout_content}
      >
        <Space
          direction="vertical"
          size={24}
          style={{ width: smallScreen ? "80%" : "60%", marginTop: 24 }}
        >
          {children}
        </Space>
      </Col>
      {!smallScreen && (
        <Col sm={{ span: 24 }} md={{ span: 12 }} style={{ padding: 24 }}>
          <Carousel
            autoplay={true}
            autoplaySpeed={5000}
            className={styles.auth_layout_carousel}
          >
            {["1", "2", "3"].map((item) => (
              <div>
                <h3 className={styles.auth_layout_slider}>{item}</h3>
              </div>
            ))}
          </Carousel>
        </Col>
      )}
    </Row>
  );
};

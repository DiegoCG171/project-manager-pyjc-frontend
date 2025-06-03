import type { JSX } from "react";
import { Carousel, Col, Row } from "antd";

import styles from "../../styles/AuthLayout.module.css";

interface Props {
  children?: JSX.Element;
}

export const AuthLayout = ({ children }: Props) => {
  return (
    <Row>
      <Col span={12} className={styles.auth_layout_content} >{children}</Col>
      <Col span={12} style={{ padding: 24 }}>
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
    </Row>
  );
};

import { Layout, Typography } from 'antd';

const { Text } = Typography;

export const VersionDisplay = () => {
  const appVersion = "1.0.0";

  return (
    <Layout style={{ position: 'fixed', backgroundColor: 'transparent', bottom: 0, left: 0, padding: '8px 32px' }}>
      <Text style={{ fontSize: '10px', color: 'transparent' }}>Version {appVersion}</Text>
    </Layout>
  );
};


import { ConfigProvider } from "antd";
import { themeLight } from "./theme/themeLight";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { AppRouter } from "./router/components/AppRouter";

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider theme={themeLight}>
        <AppRouter />
      </ConfigProvider>
    </Provider>
  );
}

export default App;

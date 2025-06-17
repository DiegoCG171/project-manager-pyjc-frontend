import { useEffect } from "react";
import { notification } from "antd";
import { useAppDispatch, useAppSelector } from "../../store/hooks/reduxHooks";
import { clearNotification } from "../../store/nofication/notificationSlice";

export const Notifier = () => {
  const [api, contextHolder] = notification.useNotification();
  const { notify } = useAppSelector((state) => state.notification);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (notify.id) {
      api[notify.type]({
        message: notify.message,
        description: notify.description,
        duration: notify.duration ?? 5,
        placement: "bottomRight",
        showProgress: true,
        pauseOnHover: true,
      });
      dispatch(clearNotification());
    }
  }, [notify, api, dispatch]);

  return contextHolder;
};

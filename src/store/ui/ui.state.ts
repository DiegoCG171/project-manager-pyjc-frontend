import type { UIInitialState } from "./interfaces/ui.interface";

export const uiInitialState: UIInitialState = {
  authUI: {
    status: {
      loading: false,
      isChecking: false,
      isValidUser: false,
    },
    recovery: {
      step: "pending",
      code: "",
      email: "",
      loading: false,
    },
  },
};

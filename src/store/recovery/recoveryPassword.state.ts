import type { Recovery } from "./interfaces/recovery.interface"

export const recoveryInitialState: Recovery = {
  step: "pending",
  loading: true,
  email: "",
  code: "",
};

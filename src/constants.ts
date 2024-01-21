import { lazy } from "react";
import { Component } from "./types";

export const SETTINGS_COMPONENTS: { [componentId: string]: Component<any> } = {
  account: {
    id: "account",
    title: "Account",
    Component: lazy(() => import("./components/Account")),
    loader: async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return Promise.resolve({ username: "the user" });
    },
    data: { username: "" },
  },
  detail: {
    id: "detail",
    title: "Detail",
    Component: lazy(() => import("./components/Detail")),
    data: { likeCherry: false },
  },
};

export const SETTINGS_COMPONENTS_VALUES = Object.values(SETTINGS_COMPONENTS);

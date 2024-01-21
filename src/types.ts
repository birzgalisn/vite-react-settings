import { FC, LazyExoticComponent } from "react";

export interface State {
  active: string;
}

export interface MainProps<T> {
  state: any;
  updateState: (newState: Partial<T>) => void;
}

export interface Component<T> {
  id: string;
  title: string;
  Component: LazyExoticComponent<FC<MainProps<T>>>;
  loader?: () => Promise<T>;
  data: T;
}

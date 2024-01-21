import { FC, PropsWithChildren } from "react";

interface MainProps extends PropsWithChildren {}

const Main: FC<MainProps> = ({ children }) => {
  return <div className="main">{children}</div>;
};

export default Main;

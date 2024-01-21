import { FC, PropsWithChildren } from "react";

interface LoadingProps extends PropsWithChildren {}

const Loading: FC<LoadingProps> = ({ children }) => {
  return <div>{children || `Loading...`}</div>;
};

export default Loading;

import { FC, PropsWithChildren } from "react";

interface FooterProps extends PropsWithChildren {}

const Footer: FC<FooterProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Footer;

import { FC, HTMLAttributes, PropsWithChildren } from "react";

export interface ItemProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLLIElement> {
  key: string;
  isActive: boolean;
}

const Item: FC<ItemProps> = ({ isActive, children, ...props }) => {
  return (
    <li {...props}>
      {children} {isActive && "*"}
    </li>
  );
};

export default Item;

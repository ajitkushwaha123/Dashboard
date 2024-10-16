import React from "react";
import {
  LayoutDashboard,
  CalendarArrowUp,
  Table,
  ShoppingBag,
  Package,
  Store,
  CalendarRange,
  ChartNoAxesCombined,
  Settings,
  ContactRound,
  School,
  User,
  EthernetPort,
  Dot,
  X,
  Menu,
  SquareUserRound,
  CircleUser,
  LogOut,
  Bell,
  ShoppingBasket,
  EllipsisVertical,
  BadgeDollarSign,
  Truck,
  HandPlatter,
  Bike,
} from "lucide-react";

type IconProps = {
  name: string;
};

const Icons: { [key: string]: IconType } = {
  LayoutDashboard,
  CalendarArrowUp,
  Table,
  ShoppingBag,
  Package,
  Store,
  CalendarRange,
  ChartNoAxesCombined,
  Settings,
  ContactRound,
  School,
  User,
  EthernetPort,
  Dot,
  X,
  Menu,
  SquareUserRound,
  CircleUser,
  LogOut,
  Bell,
  ShoppingBasket,
  EllipsisVertical,
  BadgeDollarSign,
  Truck,
  HandPlatter,
  Bike,
};

const Icon = ({ name }: IconProps) => {
  const IconComponent = Icons[name];

  return IconComponent ? <IconComponent /> : <span>Icon not found</span>;
};

export default Icon;

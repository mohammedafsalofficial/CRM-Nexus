import { LayoutDashboard, BarChart2, Users, ShoppingCart, Package, Calendar, User } from "lucide-react";

export const NAV_MENU_ITEMS = [
  {
    id: 1,
    navItem: "Dashboard",
    href: "/home/dashboard",
    icon: LayoutDashboard,
  },
  {
    id: 2,
    navItem: "Analytics",
    href: "/home/analytics",
    icon: BarChart2,
  },
  {
    id: 3,
    navItem: "Customers",
    href: "/home/customers",
    icon: Users,
  },
  {
    id: 4,
    navItem: "Sales",
    href: "/home/sales",
    icon: ShoppingCart,
  },
  {
    id: 5,
    navItem: "Products",
    href: "/home/products",
    icon: Package,
  },
  {
    id: 6,
    navItem: "Calendar",
    href: "/home/calendar",
    icon: Calendar,
  },
];

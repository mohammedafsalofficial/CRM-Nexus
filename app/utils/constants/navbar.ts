import { LayoutDashboard, BarChart2, Users, ShoppingCart, Package, Calendar } from "lucide-react";

export const NAV_MENU_ITEMS = [
  {
    id: 1,
    navItem: "Dashboard",
    href: "/menu/dashboard",
    icon: LayoutDashboard,
  },
  {
    id: 2,
    navItem: "Analytics",
    href: "/menu/analytics",
    icon: BarChart2,
  },
  {
    id: 3,
    navItem: "Customers",
    href: "/menu/customers",
    icon: Users,
  },
  {
    id: 4,
    navItem: "Sales",
    href: "/menu/sales",
    icon: ShoppingCart,
  },
  {
    id: 5,
    navItem: "Products",
    href: "/menu/products",
    icon: Package,
  },
  {
    id: 6,
    navItem: "Calendar",
    href: "/menu/calendar",
    icon: Calendar,
  },
];

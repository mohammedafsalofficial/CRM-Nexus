import Searchbar from "./Searchbar";
import SidebarMenu from "./SidebarMenu";

export default function Sidebar() {
  return (
    <aside className="space-y-5">
      <h1 className="text-3xl font-semibold text-primary">CRM Nexus</h1>
      <Searchbar />
      <SidebarMenu />
    </aside>
  );
}

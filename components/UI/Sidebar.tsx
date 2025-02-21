import Searchbar from "./Searchbar";
import SidebarLinks from "./SidebarLinks";

export default async function Sidebar() {
  return (
    <aside className="space-y-5">
      <h1 className="text-3xl font-semibold text-primary">CRM Nexus</h1>
      <Searchbar />
      <SidebarLinks />
    </aside>
  );
}

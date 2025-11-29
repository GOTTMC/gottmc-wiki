import menus from "@/data/sidebarMenus";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="layout-sidebar">

      {menus.map((menu, idx) => 
        <div className="sidebar-menu" key={idx}>
          <div className="sidebar-menu-title">
            {menu.title}
          </div>

          <ul>
            {menu.contents.map((content, contentIdx) =>
              <li key={contentIdx}>
                <Link href={content.url}>
                  {content.title}
                </Link>
              </li>
            )}
            
          </ul>
        </div>
      )}

    </div>
  );
}
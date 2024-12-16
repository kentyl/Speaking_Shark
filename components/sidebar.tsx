"use client";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={"sidebar"}>
      <Image
        src="/assets/img/vetka.png"
        alt="preview"
        className="left-0 top-0 w-full rounded-lg"
        width={300}
        height={229}
      />
      <nav className={"sidebar-nav"}>
        <ul className={"flex flex-1 flex-col gap-6"}>
          {navItems.map(({ url, name, icon }) => (
            <Link key={name} href={url} className={"lg:w-full"}>
              <li
                className={cn(
                  "sidebar-nav-item",
                  pathname === url && "shad-active",
                )}
              >
                <Image
                  src={icon}
                  alt={name}
                  width={24}
                  height={24}
                  /* иконка горит только, когда активна
                  className={cn(
                    "nav-icon",
                    pathname === url && "nav-icon-active",
                  )} */
                />
                <p className="hidden lg:block">{name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      <div className="sidebar-user-info">
        <Image
          src="/assets/img/user_avatar.png"
          alt="avatar"
          width={44}
          height={44}
          className="sidebar-user-avatar"
        />
        <div className="hidden lg:block">
          <p className="subtitle-2 capitalize">userName</p>
          <p className="caption">email</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

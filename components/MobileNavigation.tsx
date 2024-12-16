"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { navItems } from "@/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MobileNavigation = ({
  userData,
}: {
  userData: { userName?: string; userId?: string };
}) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="mobile-header mr-0 flex items-center">
      <Link href="/" className="relative size-16 cursor-pointer">
        <Image
          src="/assets/img/logo.png"
          alt="logo"
          fill
          className="object-contain"
        />
      </Link>

      <p className="flex-1 text-center text-lg font-semibold italic text-cyan-600">
        Speaking Shark - learn with us!
      </p>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Image
            src="/assets/img/menu.webp"
            alt="menu_logo"
            width={30}
            height={30}
          />
        </SheetTrigger>
        <SheetContent className="shad-sheet h-screen px-3">
          <SheetTitle>
            <div className="header-user">
              <Image
                src="/assets/img/user_avatar.png"
                alt="avatar"
                width={44}
                height={44}
                className="header-user-avatar"
              />
              {userData.userName && userData.userId ? (
                <div>
                  <p className="subtitle-2 capitalize">{userData.userName}</p>
                  <p className="caption">ID: {userData.userId}</p>
                </div>
              ) : (
                <p className="subtitle-2 capitalize">Welcome!</p>
              )}
            </div>
            <Separator className="mb-4 bg-light-200/20" />
          </SheetTitle>
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {navItems.map(({ url, name, icon }) => (
                <Link
                  key={name}
                  href={url}
                  className={"lg:w-full"}
                  onClick={() => setOpen(false)}
                >
                  <li
                    className={cn(
                      "mobile-nav-item",
                      pathname === url && "shad-active",
                    )}
                  >
                    <Image src={icon} alt={name} width={24} height={24} />
                    <p>{name}</p>
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default MobileNavigation;

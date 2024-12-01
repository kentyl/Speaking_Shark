"use client";

import { Api } from "@/components/shared/services/api-client";
import { collection } from "@prisma/client";
import { Search } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useClickAway, useDebounce } from "react-use";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [focused, setFocused] = React.useState(false);
  const [collection, setCollection] = React.useState<collection[]>([]);
  const ref = React.useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    async () => {
      try {
        const response = await Api.collection.search(searchQuery);
        setCollection(response);
      } catch (error) {
        console.log(error);
      }
    },
    250,
    [searchQuery],
  );

  const onClickItem = () => {
    setFocused(false);
    setSearchQuery("");
    setCollection([]);
  };

  return (
    <>
      {focused && <div className="fixed inset-0 z-30 bg-black/50" />}

      <div
        ref={ref}
        className={cn(
          "flex rounded-2xl flex-1 justify-between relative h-11 z-30",
          className,
        )}
      >
        <Search className="absolute left-3 top-1/2 h-5 translate-y-[-50%] text-gray-400" />
        <input
          className="w-full rounded-2xl bg-gray-200 pl-11 outline-none"
          type="text"
          placeholder="Найти карточки..."
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {collection.length > 0 && (
          <div
            className={cn(
              "absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
              focused && "visible opacity-100 top-12",
            )}
          >
            {collection.map((collections) => (
              <Link
                onClick={onClickItem}
                key={collections.id}
                className="flex w-full items-center gap-3 px-3 py-2 hover:bg-primary/10"
                href={`/cards/${collections.id}`}
              >
                <span>{collections.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

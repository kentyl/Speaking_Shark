import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

interface Props {
  className?: string;
}

export const CollectionCard: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Link href="/card/1">
        <div className="flex h-[260px] justify-center rounded-lg bg-secondary p-6">
          <img
            className="size-[215px]"
            src="../../public/assets/computer.jpg"
            alt="Logo"
          />
        </div>
      </Link>
    </div>
  );
};

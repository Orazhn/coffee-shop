"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeaderButtonProps {
  tab: {
    icon: React.ReactNode;
    name: string;
    path: string;
  };
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ tab }) => {
  return (
    <Link href={tab.path}>
      <Button className="flex gap-1" key={tab.name}>
        {tab.icon} {tab.name}
      </Button>
    </Link>
  );
};

export default HeaderButton;

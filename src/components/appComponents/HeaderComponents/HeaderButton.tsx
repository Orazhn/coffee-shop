"use client";
import React from "react";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

interface HeaderButtonProps {
  tab: {
    icon: React.ReactNode;
    name: string;
    path: string;
  };
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ tab }) => {
  return (
    <Button
      className="flex gap-1"
      onClick={() => redirect(tab.path)}
      key={tab.name}
    >
      {tab.icon} {tab.name}
    </Button>
  );
};

export default HeaderButton;

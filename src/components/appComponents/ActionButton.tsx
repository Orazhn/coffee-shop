"use client";
import React from "react";
import { Button } from "../ui/button";
import useBagStore from "@/store/bagStore";
import Item from "@/types/DataType";
import toast from "react-hot-toast";

interface ActionButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  item: Item;
  action: "add" | "remove";
}

const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  className,
  item,
  variant,
  action,
}) => {
  const { addItem, removeItem } = useBagStore();
  const toastContent =
    action == "add"
      ? `${item.name} was added to bag`
      : `${item.name} was removed from bag`;
  return (
    <>
      {action == "add" ? (
        <Button
          className={className}
          variant={variant}
          onClick={() => {
            addItem(item);
            toast.success(toastContent, {
              style: {
                border: "1px solid #713200",
                padding: "16px",
                color: "#713200",
              },
              iconTheme: {
                primary: "#713200",
                secondary: "#FFFAEE",
              },
            });
          }}
        >
          <p className="flex gap-2 items-center">{children}</p>
        </Button>
      ) : (
        <Button
          className={className}
          variant={variant}
          onClick={() => {
            removeItem(item);
            toast.success(toastContent, {
              style: {
                border: "1px solid red",
                padding: "16px",
                color: "red",
              },
              iconTheme: {
                primary: "red",
                secondary: "#FFFAEE",
              },
            });
          }}
        >
          {children}
        </Button>
      )}
    </>
  );
};

export default ActionButton;

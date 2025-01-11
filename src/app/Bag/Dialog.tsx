"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Item from "../../types/DataType";
import { FC } from "react";
import useBagStore from "@/store/bagStore";
import toast from "react-hot-toast";
import { Truck } from "lucide-react";
import { usePostOrder } from "@/hooks/Api/usePostOrder";
import UseHasAddress from "@/hooks/Api/useHasAddress";
import Link from "next/link";

interface DialogProps {
  bag: Item[];
  total: string;
}

const DialogComponent: FC<DialogProps> = ({ bag, total }) => {
  const hasAddress = UseHasAddress();
  const { emptyBag } = useBagStore();
  const { orderFunc, isOrdering } = usePostOrder();

  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(date);
  };

  const saveOrder = async () => {
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);
    try {
      orderFunc({ bagItems: bag, total: +total, date: formattedDate });
    } catch (error) {
      return error;
    } finally {
      emptyBag();
    }
  };

  const confirmOrder = () => {
    toast.promise(saveOrder(), {
      loading: "Creating Order...",
      success: <b>Your order is coming!</b>,
      error: <b>order was not sent</b>,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button disabled={!bag.length} className="flex gap-2">
          <ShoppingCart /> Purchase
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Your Bag</DialogTitle>
          {!hasAddress && (
            <Link
              href={"/Address"}
              className="hover:text-red-500 text-sm text-red-800"
            >
              Looks like you hadn&apos;t show us your address <br />
              Click to set your address
            </Link>
          )}
        </DialogHeader>
        <div className="mt-4 space-y-4">
          {bag.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <p className="font-medium">
                  {item.name}{" "}
                  <span className="text-gray-400">{item.amount}</span>
                </p>

                <p className="text-sm text-gray-600">${item.price}</p>
              </div>
              <p className="font-bold">{item.weight}g</p>
            </div>
          ))}
          <div>
            <h1>Total: {total} $</h1>
          </div>
        </div>
        <DialogClose asChild>
          <Button
            onClick={() => confirmOrder()}
            className="mt-4 w-full bg-green-600 text-white hover:bg-green-700"
            variant="expandIcon"
            Icon={Truck}
            iconPlacement="right"
            disabled={isOrdering || !hasAddress}
          >
            Order
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default DialogComponent;

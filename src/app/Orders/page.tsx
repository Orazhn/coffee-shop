import React, { Suspense } from "react";
import OrderHistory from "./OrderHistory";
import LoadingPage from "./loading";

const page = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <OrderHistory />
    </Suspense>
  );
};

export default page;

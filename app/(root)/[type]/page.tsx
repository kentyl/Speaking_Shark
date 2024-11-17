import React from "react";

// eslint-disable-next-line no-undef
const Page = async ({ params }: SearchParamProps) => {
  const type = ((await params?.type) as string) || "";
  return (
    <div className="page-container">
      <section className="w-full">
        <h1 className="h1 capitalize">{type}</h1>
        <div className="total-size-section">
          <p className="body-1">-------------------</p>
        </div>
      </section>
    </div>
  );
};

export default Page;

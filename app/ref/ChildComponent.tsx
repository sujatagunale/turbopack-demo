"use client";

const ChildComponent = ({
  ref,
}: {
  ref: React.RefObject<HTMLInputElement>;
}) => {
  return <input type="text" ref={ref} placeholder="Focus me!" />;
};

export default ChildComponent;

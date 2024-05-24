import { GlobalProvider } from "./Context";

function UseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <GlobalProvider>{children}</GlobalProvider>;
}

export default UseLayout;

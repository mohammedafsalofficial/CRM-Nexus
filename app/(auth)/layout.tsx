import CurvyLines from "../components/svg/CurvyLines";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen w-full grid grid-cols-1 xl:grid-cols-2">
      {children}
      <CurvyLines className="absolute bottom-0 left-0 w-full opacity-50" />
    </div>
  );
}

export default function GridBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
      {children}
    </div>
  );
}

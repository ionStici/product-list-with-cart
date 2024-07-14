export default function Layout({ children }) {
  return (
    <main className="mx-auto max-w-[500px] p-6 md:max-w-[880px] md:p-10 lg:grid lg:max-w-[1296px] lg:grid-cols-[minmax(0,800px)_minmax(300px,1fr)] lg:gap-x-8 lg:py-[88px]">
      {children}
    </main>
  );
}

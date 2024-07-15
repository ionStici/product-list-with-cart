export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-md h-[52px] w-full rounded-full bg-red font-semibold text-white transition-all duration-300 hover:brightness-75"
    >
      {children}
    </button>
  );
}

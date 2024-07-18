export default function ModalItem({ dessert }) {
  const { image, name, cart, price } = dessert;

  return (
    <div className="mb-4 flex items-center border-b border-rose_100 pb-4 text-sm font-semibold last:mb-6 last:pb-6">
      <div className="mr-4 h-12 w-12 shrink-0">
        <img
          className="size-full rounded-[4px]"
          src={image?.thumbnail}
          alt={name}
          width={48}
          height={48}
        />
      </div>

      <div className="mr-4 min-w-0">
        <p className="mb-2 truncate">{name}</p>
        <p className="space-x-2">
          <span className="text-red">{cart}x</span>
          <span className="font-normal text-rose_500">@${price}</span>
        </p>
      </div>

      <p className="ml-auto text-base">${cart * price}</p>
    </div>
  );
}

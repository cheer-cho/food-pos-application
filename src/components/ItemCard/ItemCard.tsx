import { formatter } from '../../helpers';

export type Item = {
  id: string;
  name: string;
  price: number;
  image: string;
};

type ItemCardProps = {
  item: Item;
};

const ItemCard = ({ item: { name, price, image } }: ItemCardProps) => {
  return (
    <div
      role="presentation"
      aria-labelledby="item-name"
      className="h-full rounded-2xl bg-white flex flex-col items-center justify-between py-6"
    >
      <img
        src={image}
        alt={name}
        className="rounded-full w-[120px] md:w-[168px] h-[120px] md:h-[168px] object-center object-cover"
      />
      <label id="item-name" className="mt-[30px] font-bold text-xl md:text-2xl text-center">
        {name}
      </label>
      <span className="mt-[10px] font-extrabold text-2xl md:text-3xl text-[#FFCA40]">
        {formatter.format(price)}
      </span>
    </div>
  );
};

export default ItemCard;

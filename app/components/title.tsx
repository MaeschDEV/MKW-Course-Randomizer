import Image from "next/image";

interface Props {
  image_path: string;
  title: string;
}

const title = ({ image_path, title }: Props) => {
  return (
    <>
      <div className="relative min-h-screen">
        <div className="fixed top-0 left-1/2 -translate-x-1/2 pt-10 flex items-center gap-4">
          <Image
            src={image_path}
            alt="mario_kart_world_logo"
            width={1599}
            height={1599}
            className="w-25 md:w-50 h-auto"
          />
          <h1 className="text-white text-2xl md:text-5xl font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
            {title}
          </h1>
        </div>
      </div>
    </>
  );
};

export default title;

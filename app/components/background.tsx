import Image from "next/image";

interface Props {
  image_path: string;
}

const background = ({ image_path }: Props) => {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <Image
          src={image_path}
          alt="background_image"
          fill
          className="object-cover brightness-75"
          priority
        />
      </div>
    </>
  );
};

export default background;

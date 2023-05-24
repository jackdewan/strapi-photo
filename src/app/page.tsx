import Image from "next/image";
import { getPhotos } from "./util/fetch-api";

export default async function Home() {
  const { data } = await getPhotos();
  const firstPhoto: ImageInterface = data.photos.data[0];
  const { url, alternativeText } = firstPhoto.attributes.img.data.attributes;
  console.log(url);
  return (
    <main className="">
      <Image
        width={250}
        height={200}
        src={url}
        alt={alternativeText ? alternativeText : "Photo"}
      />
    </main>
  );
}

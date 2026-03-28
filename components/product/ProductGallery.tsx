"use client";

import Image from "next/image";
import { PRODUCT_IMAGES } from "@/components/constants/products";
import { useState } from "react";
import { IMAGES } from "../constants/products2";

export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(IMAGES[0]);

  function atualizarImagemSelecionada(index: number) {
    setSelectedImage(IMAGES[index]);
  }

  return (
    <div className="flex flex-col items-center">
      <Image
        src={selectedImage}
        alt="Hero Image"
        width={420}
        height={500}
        className="rounded-2xl object-cover hover:scale-105 duration-300 cursor-pointer"
        quality={100}
      />

      <div className="hidden md:grid grid-cols-4 mt-8 gap-8">
        {PRODUCT_IMAGES.map((thumbnail, index) => (
          <Image
            key={index}
            src={thumbnail}
            alt={`Thumbnail ${index + 1}`}
            width={80}
            height={90}
            onClick={() => atualizarImagemSelecionada(index)}
            className="rounded-md object-cover border-3 border-transparent transition-all duration-300 hover:border-orange-500 hover:opacity-45 cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}

import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const StarupCard = ({ post }: { StartupCardType }) => {
  const {
    _createAt,
    views,
    author: { _id: authorId, name },
    category,
    title,
    _id,
    image,
    description,
  } = post;
  return (
    <li className="startup-card group">
      <div className="startup_card_date">
        <p>{formatDate(_createAt)}</p>
      </div>
      <div className="flex gap-1.5">
        <EyeIcon className="size-6 text-primary" />
        <span className="text-16-medium">{views}</span>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authorId}`}>
            <p className="text-16-medium line-clamp-1">{name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/startup/${authorId}`}>
          <Image
            src="https://placehold.co/48x48"
            alt="placeholder"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>
      <Link href={`/startup/${_id}`} className="">
        <p className="startup-card_desc">{description}</p>
        <img src={image} alt="placeholder" className="Startup-card_img" />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StarupCard;

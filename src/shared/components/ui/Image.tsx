import { useState } from "react";
import { type ImgHTMLAttributes } from "react";

import { resolveImage } from "@/shared/utils/image";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
    fallbackSrc?: string;
};

export default function Image({
    src,
    alt,
    width,
    height,
    className,
    loading = "lazy",
    decoding = "async",
    fallbackSrc = "/images/placeholder.webp",
    ...props
}: Props) {
    const [imageSrc, setImageSrc] = useState(
        resolveImage(String(src))
    );

    return (
        <img
            {...props}
            src={imageSrc}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
            decoding={decoding}
            className={className}
            onError={() => setImageSrc(fallbackSrc)}
        />
    );
}
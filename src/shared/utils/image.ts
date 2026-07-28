const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL ?? "";

export function resolveImage(src: string): string {
    if (!src) {
        return "";
    }

    if (
        src.startsWith("http://") ||
        src.startsWith("https://")
    ) {
        return src;
    }

    if (IMAGE_BASE_URL) {
        return `${IMAGE_BASE_URL}${src}`;
    }

    return src;
}
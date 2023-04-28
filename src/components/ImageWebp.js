function ImageWebp({ src, alt }) {
  const isWebpSupported = () => {
    const elem = document.createElement("canvas");
    if (!!(elem.getContext && elem.getContext("2d"))) {
      return elem.toDataURL("image/webp").indexOf("data:image/webp") === 0;
    }
    return false;
  };

  const srcExt = src.split(".").pop();
  const webpSrc =
    isWebpSupported() && srcExt !== "webp"
      ? `${src.slice(0, -srcExt.length)}webp`
      : "";

  return (
    <picture>
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
      <img src={src} alt={alt} />
    </picture>
  );
}

export default ImageWebp;

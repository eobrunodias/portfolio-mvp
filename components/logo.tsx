import Image from "next/image";

export default function Logo({ width = 100, height = 100 }) {
  return <Image alt="logo" src={"logo.svg"} width={width} height={height} />;
}

import Link from "next/link";

type Props = {
  text: string;
  link: string;
};

const Button = ({ text, link }: Props) => {
  return (
    <Link href={link} className="btn">
      {text}
    </Link>
  );
};

export default Button;

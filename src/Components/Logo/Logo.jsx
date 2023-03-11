import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/">
      <div>
        <img
          style={{ width: "auto", height: "10vh" }}
          src="https://res.cloudinary.com/drtmog1df/image/upload/v1677375488/depositphotos_366951638-stock-illustration-initial-monogram-letter-l-k_ogcxen.webp"
          alt="Logo LatamKeyboards"
        />
      </div>
    </Link>
  );
};

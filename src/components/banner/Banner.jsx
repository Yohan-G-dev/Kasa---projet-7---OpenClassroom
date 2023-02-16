import "./banner.css";

export default function Banner({ bannerText, backgroundImg }) {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <p>{bannerText}</p>
    </div>
  );
}

import "./Card.css";
import AcademicInfo from "./AcademicInfo";

export default function Card() {
  const name = "Bruno Martins";
  const phoneNumber = "+551234546789";
  const instagramUsername = "@BrunoMartins";

  return (
    <>
      <div className={"flex card"}>
        <img
          src="https://placehold.jp/424242/ffffff/150x150.png?css=%7B%22border-radius%22%3A%22%20100%25%22%7D"
          alt="150x150 placeholder image"
        />
        <h2>{name}</h2>
        <AcademicInfo></AcademicInfo>
        <div>
          <p>Fale comigo:</p>
          <ul>
            <li>Telefone: {phoneNumber}</li>
            <li>Instagram: {instagramUsername}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

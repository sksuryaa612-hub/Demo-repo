import Button from "./Button";

const Card = ({ name, email, btnname }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-name">{name}</h2>
        <p className="card-email">{email}</p>
      </div>

      <div className="card-action">
        <Button btnname={btnname} />
      </div>
    </div>
  );
};

export default Card;
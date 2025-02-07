import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ReviewBlock({ profilePicture, title, body, rating }) {
  const roundRating = (rating) => {
    return Math.round(rating * 2) / 2;
  };

  const roundedRating = roundRating(rating);

  const renderStars = () => {
    let stars = [];
    let fullStars = Math.floor(roundedRating);
    let halfStar = roundedRating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={`full-${i}`}
          icon={faStar}
          className="text-orange text-xl"
        />
      );
    }

    if (halfStar) {
      stars.push(
        <FontAwesomeIcon
          key="half"
          icon={faStarHalf}
          className="text-orange text-xl"
        />
      );
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-3xl p-4 flex flex-col gap-3">
      <img
        src={profilePicture}
        alt="Profielfoto"
        className="w-16 h-16 rounded-full"
      />
      <h3>{title}</h3>
      <p>{body}</p>
      <div className="flex gap-1">{renderStars()}</div>
    </div>
  );
}

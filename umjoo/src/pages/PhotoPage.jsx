import { useParams, Link } from "react-router-dom";

const photosByDate = {
  "2024-06-01": ["/photo_0601_1.jpg", "/photo_0601_2.jpg"],
  "2024-06-02": ["/photo_0602_1.jpg"],
  "2024-06-15": ["/photo_0615_1.jpg"],
};

function PhotoPage() {
  const { date } = useParams();
  const photos = photosByDate[date] || [];

  return (
    <div style={{ padding: "2rem" }}>
      <Link to="/">← 메인으로</Link>
      <h2>{date}의 사진</h2>
      {photos.length > 0 ? (
        photos.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`photo-${idx}`}
            style={{ width: "300px", margin: "1rem", borderRadius: "10px" }}
          />
        ))
      ) : (
        <p>등록된 사진이 없습니다.</p>
      )}
    </div>
  );
}

export default PhotoPage;

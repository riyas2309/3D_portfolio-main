import React, { useEffect, useState } from "react";

const LeetcodeRank = () => {
  const [rankData, setRankData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [previousRank, setPreviousRank] = useState(2278000); // Mocked previous rank for demonstration

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://leetcode-stats-api.herokuapp.com/Riyasammu2309"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch rank data");
        }

        const data = await response.json();
        setRankData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Calculate rank difference
  const rankDifference = previousRank - rankData.ranking; // Positive means improvement

  return (
    <div
      style={{
        textAlign: "center",
        padding: "10px",
        display: "flex",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <h2 className="font-bold mr-2">LeetCode</h2>
      <p className="mr-2">
        <strong>Ranking: </strong>
        <span
          style={{
            color: rankDifference > 0 ? "green" : "red",
          }}
        >
          {rankData.ranking}
        </span>
      </p>

      {rankDifference !== 0 && (
        <p>
          <span style={{ color: rankDifference > 0 ? "  " : "red" }}>
            {rankDifference > 0
              ? `▲ ${rankDifference}`
              : `▼ ${Math.abs(rankDifference)}`}
          </span>
        </p>
      )}
    </div>
  );
};

export default LeetcodeRank;

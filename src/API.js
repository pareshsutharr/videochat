// ⚠️ Replace this token with one generated from VideoSDK Dashboard
// https://app.videosdk.live/api-keys
export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI2MmNmOGE3NC1hM2FjLTQ2N2EtOGRiOS1iMjExY2EwNTU1ZjEiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTc1NzQzMjM4NywiZXhwIjoxNzU4MDM3MTg3fQ.KAciYCzUrGu0_s3BfK3_yaQyS3C-KQQUW1XdFrurF3U";

// Function to create a new stream (room)
export const createStream = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  const { roomId: streamId } = await res.json();
  return streamId;
};

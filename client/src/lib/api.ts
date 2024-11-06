
export type Token = {
  access_token: string;
  token_type: string;
  email: string;
};

export type SensorData = {
  raw_json: string;
  filename: string;
};


export const api = "http://127.0.0.1:8000";

const getTokenFromLocal = () => {
  const token:Token = {
    access_token: localStorage.getItem("accessToken") as string,
    token_type: localStorage.getItem("tokenType") as string,
    email: localStorage.getItem("userEmail") as string,
  };
  if (!token) {
    throw new Error("Token not found");
  }
  return token;
}


const sendSensorDataToApi = async (data: SensorData) => {
  const token = getTokenFromLocal();
  const response = await fetch(`${api}/importSensorData`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.access_token}`,
    },
    body: JSON.stringify({ raw_json: data.raw_json, filename: data.filename }),
  });

  if (!response.ok) {
    throw new Error("Failed to upload file");
  }
  return response.json();
};

export default sendSensorDataToApi;

import axios from "axios";

export const getUserLocation = async (): Promise<{
  latitude: number;
  longitude: number;
  location: string;
} | null> => {
  try {
    const res = await axios.get("https://ipapi.co/json/");

    const latitude = res.data.latitude;
    const longitude = res.data.longitude;

    const location =
      res.data.city ||
      res.data.region ||
      res.data.country_name ||
      "Unknown location";

    return { latitude, longitude, location };
  } catch (error) {
    console.error("Error fetching IP location:", error);
    return null;
  }
};

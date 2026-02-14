import axios from "axios";

export const getUserLocation = async (): Promise<{
  latitude: number;
  longitude: number;
  location: string;
}> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        try {
          const res = await axios.get(
            "https://nominatim.openstreetmap.org/reverse",
            {
              params: {
                lat: latitude,
                lon: longitude,
                format: "json",
              },
            },
          );

          const location =
            res.data.address.city ||
            res.data.address.town ||
            res.data.address.village ||
            "Unknown location";

          resolve({ latitude, longitude, location });
        } catch (error) {
          reject("Error fetching location name");
          console.log(error);
        }
      },
      () => reject("Permission denied"),
    );
  });
};

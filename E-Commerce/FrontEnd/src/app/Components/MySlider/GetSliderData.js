import AxiosClient from "@/assets/js/AxiosClient";

export default async function GetSliderData() {
  const response = await AxiosClient.get("/all-galleries-img");
  return response;
}

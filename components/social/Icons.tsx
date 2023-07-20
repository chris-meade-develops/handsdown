import { Twitter, Instagram, Facebook } from "../../icons";

export default function Icons() {
  return (
    <div className="flex items-center justify-center w-full mb-22">
      <div className="w-auto h-15">
        <Facebook className="w-full h-full fill-white" />
      </div>
      <div className="w-auto h-19 ml-25 mr-25">
        <Instagram className="w-full h-full fill-white" />
      </div>
      <div className="w-auto h-19">
        <Twitter className="w-full h-full fill-white" />
      </div>
    </div>
  );
}

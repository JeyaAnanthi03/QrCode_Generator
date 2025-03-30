import { useState } from "react";
export const QrCode = () => {
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [qrData, setQrData] = useState("joes");
  const [qrsize, setQrSize] = useState(150);
  async function generate() {
    setLoading(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}*${qrsize}&data=${encodeURIComponent(
        qrData
      )}`;
      setImg(url);
    } catch (error) {
      console.log("Error generating QR code", error);
    } finally {
      setLoading(false);
    }
  }
  function download() {
    fetch(img)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "qrCode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.log("Error downloading QR code", error);
      });
  }
  return (
    <div className="container">
      <h1>QR CODE GENERATOR</h1>
      {img && <img src={img} />}
      {loading && <p>Please Wait...</p>}
      <div className="inner-container">
        <label forHTML="datainput" className="input-label">
          Data for QR Code:
        </label>
        <input
          type="text"
          id="datainput"
          placeholder="Enter data for QR"
          onChange={(e) => {
            setQrData(e.target.value);
          }}
        />
        <label forHTML="sizeinput" className="input-label">
          Image size(eg: 150):
        </label>
        <input
          type="text"
          id="sizeinput"
          placeholder="Enter the size"
          onChange={(e) => {
            setQrSize(e.target.value);
          }}
        />
        <button
          className="generate-button"
          onClick={generate}
          disabled={loading}
        >
          Generate QR Code
        </button>
        <button className="download-button" onClick={download}>
          Download QR Code
        </button>
      </div>
    </div>
  );
};

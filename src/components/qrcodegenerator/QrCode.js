import React, { useState } from "react";
import QRCode from "react-qr-code";

const QrCode = () => {
  const [qrcode, setQrcode] = useState("");
  const [text, setText] = useState("");

  const handleGenerateQRCode = () => {
    setQrcode(text);
    setText("");
  };

  return (
    <>
      <h2>QR Code Generator</h2>
      <input
        type="text"
        name="qr-code"
        placeholder="Enter Your Text Here.."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button
        onClick={handleGenerateQRCode}
        disabled={text !== "" ? false : true}
      >
        Generate QR Code
      </button>
      <QRCode id="qr-code-value" value={qrcode} size={40} />
    </>
  );
};

export default QrCode;

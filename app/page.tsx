"use client";

import { useRef } from "react";

export default function Home() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch("https://fraud-review-api.onrender.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    alert(`Status: ${data.status}`);
  } catch (error) {
    console.error(error);
    alert("Upload failed");
  }
};

  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#0f172a",
      color: "white",
      fontFamily: "Arial"
    }}>
      <div style={{
        width: "400px",
        padding: "30px",
        borderRadius: "12px",
        backgroundColor: "#1e293b",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>
  Fraud Review Portal v2
</h1>

        <p style={{ marginBottom: "20px", color: "#cbd5f5" }}>
          Welcome back. Your security dashboard.
        </p>

        <div style={{
          backgroundColor: "#0f172a",
          padding: "15px",
          borderRadius: "8px",
          marginBottom: "20px"
        }}>
          <p style={{ margin: 0 }}>Transactions Remaining</p>
          <h2 style={{ margin: "10px 0", fontSize: "28px" }}>15</h2>
        </div>

        <button
          onClick={handleUploadClick}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#22c55e",
            color: "white",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Upload Email or File
        </button>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </div>
    </main>
  );
}
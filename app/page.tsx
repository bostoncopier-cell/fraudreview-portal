"use client";

import { useRef, useState } from "react";

export default function Home() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [result, setResult] = useState<string>("");
  const [isUploading, setIsUploading] = useState(false);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("files", file);
    formData.append("transaction_type", "portal_upload");
    formData.append("contact_email", "bostoncopier@gmail.com");

    try {
      setIsUploading(true);
      setResult("");

      const response = await fetch(
        "https://fraud-review-api.onrender.com/api/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.ok) {
        setResult(
          `Submission received successfully.\n\nSubmission ID: ${data.submission_id}\nFile: ${
            data.files_received?.[0] || "N/A"
          }\n\nMessage: ${data.message}`
        );
      } else {
        setResult(`Submission failed.\n\n${JSON.stringify(data, null, 2)}`);
      }
    } catch (error) {
      console.error(error);
      setResult(
        `Upload failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0f172a",
        color: "white",
        fontFamily: "Arial",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "460px",
          padding: "30px",
          borderRadius: "12px",
          backgroundColor: "#1e293b",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>
          Fraud Review Portal v4
        </h1>

        <p style={{ marginBottom: "20px", color: "#cbd5f5" }}>
          Welcome back. Your security dashboard.
        </p>

        <div
          style={{
            backgroundColor: "#0f172a",
            padding: "15px",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          <p style={{ margin: 0 }}>Transactions Remaining</p>
          <h2 style={{ margin: "10px 0", fontSize: "28px" }}>15</h2>
        </div>

        <button
          onClick={handleUploadClick}
          disabled={isUploading}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: isUploading ? "#64748b" : "#22c55e",
            color: "white",
            fontSize: "16px",
            cursor: isUploading ? "not-allowed" : "pointer",
            marginBottom: result ? "20px" : "0",
          }}
        >
          {isUploading ? "Uploading..." : "Upload Email or File"}
        </button>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />

        {result && (
          <div
            style={{
              marginTop: "20px",
              textAlign: "left",
              backgroundColor: "#0f172a",
              borderRadius: "8px",
              padding: "16px",
              whiteSpace: "pre-wrap",
              color: "#e2e8f0",
              fontSize: "14px",
              lineHeight: 1.5,
            }}
          >
            {result}
          </div>
        )}
      </div>
    </main>
  );
}
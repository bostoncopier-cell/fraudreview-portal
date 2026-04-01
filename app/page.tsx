export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0f172a",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          padding: "30px",
          borderRadius: "12px",
          backgroundColor: "#1e293b",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "28px", marginBottom: "10px" }}>
          Fraud Review Portal
        </h1>

        <p style={{ marginBottom: "20px", color: "#cbd5e1" }}>
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
          <p style={{ margin: 0, fontSize: "14px", color: "#94a3b8" }}>
            Transactions Remaining
          </p>
          <h2 style={{ margin: "10px 0", fontSize: "32px" }}>15</h2>
        </div>

        <button
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#22c55e",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Upload Email or File
        </button>
      </div>
    </main>
  );
}
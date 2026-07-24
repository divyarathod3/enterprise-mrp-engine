function Header() {
  return (
    <div
      className="header"
      style={{
        display: "flex",
        justifyContent: "flex-end",
        padding: "20px"
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        style={{
          width: "320px",
          padding: "12px",
          border: "1px solid #ddd",
          borderRadius: "8px"
        }}
      />
    </div>
  );
}

export default Header;
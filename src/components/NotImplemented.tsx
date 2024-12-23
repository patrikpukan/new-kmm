import { FC } from "react";

const NotImplemented: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "1.2rem",
        color: "#666",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <p className="font-primary">
        Na tomto webu stále pracujeme. Těšíme se, že se zde brzy znovu uvidíme.
      </p>
    </div>
  );
};

export default NotImplemented;

import React from "react";
import "./card.css";

export function Card({ children, ...props }) {
  return (
    <div className="card" {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, ...props }) {
  return (
    <div className="card-content" {...props}>
      {children}
    </div>
  );
}

// src/components/ui/Card.jsx
import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div className={`bg-gray-800 text-white rounded-2xl shadow-xl p-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`text-base ${className}`}>{children}</div>;
}

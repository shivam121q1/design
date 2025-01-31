"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

interface SearchParamsHandlerProps {
  onIdChange: (id: string | null) => void;
}

export default function SearchParamsHandler({ onIdChange }: SearchParamsHandlerProps) {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    onIdChange(id);
  }, [id, onIdChange]);

  return null; // This component doesn't render anything
}

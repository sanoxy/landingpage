import { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
  
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  
  return (
    <footer className="fixed bottom-0 w-full py-4 text-center text-muted-foreground text-sm">
      <p>&copy; {currentYear} | Minimalist Landing Page</p>
    </footer>
  );
}

import WelcomeMessage from "@/components/welcome-message";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-background font-sans min-h-screen flex flex-col items-center justify-center p-4">
      <WelcomeMessage />
      <Footer />
    </div>
  );
}

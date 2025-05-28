
import { ModalProvider } from "../lib/modal-context";
import ModalManager from "./components/modals/ModalManager";
import PortfolioContent from "./components/PortfolioContent";

export default function Home() {
  return (
    <ModalProvider>
      <PortfolioContent />
      <ModalManager />
    </ModalProvider>
  );
}

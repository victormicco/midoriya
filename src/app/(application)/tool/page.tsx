import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import EntrySection from "./components/entrySection";
import { ValidateQuery } from "./components/form/validateQuery";

export default function sqlChecker() {
  const defaultValues = { sqlQuery: "" };
  return (
    <>
      <Navbar />
      <EntrySection />
      <ValidateQuery defaultValues={defaultValues} />
      <Footer />
    </>
  );
}

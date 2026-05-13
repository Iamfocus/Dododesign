import { baseMetadata } from "@/Services/shared-metadata";
import ContactClient from "./ContactClient";

export const metadata = {
  ...baseMetadata,
  title: "Contact DODO",
  description: "Keep in touch with DODO",
};

function page() {
  return <ContactClient />;
}

export default page;

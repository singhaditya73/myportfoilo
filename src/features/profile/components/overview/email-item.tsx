"use client";

import { MailIcon } from "lucide-react";
import { useState } from "react";

import { useIsClient } from "@/hooks/use-is-client";
import { decodeEmail } from "@/utils/string";

import { ContactModal } from "./contact-modal";
import { IntroItem } from "./intro-item";

export function EmailItem({ email }: { email: string }) {
  const isClient = useIsClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const emailDecoded = decodeEmail(email);

  return (
    <>
      <IntroItem
        icon={MailIcon}
        content={isClient ? emailDecoded : "[Email protected]"}
        onClick={() => setIsModalOpen(true)}
        className="cursor-pointer transition-colors hover:text-blue-500"
      />

      {isClient && (
        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}

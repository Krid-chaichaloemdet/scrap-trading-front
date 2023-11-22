import { useState } from "react";
import Modal from "../component/Modal";
import RegisterFeat from "../features/RegisterFeat";

function Button({ children, onClick }) {
  return <div onClick={onClick}>{children}</div>;
}

export default function RegisterButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>REGISTER</Button>
      <Modal
        title="Create your account"
        open={isOpen}
        maxWidth={32}
        onClose={() => setIsOpen(false)}
      >
        <RegisterFeat onSuccess={() => setIsOpen(false)} />
      </Modal>
    </div>
  );
}

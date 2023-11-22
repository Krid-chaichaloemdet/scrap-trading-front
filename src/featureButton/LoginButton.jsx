import { useState } from "react";
import Modal from "../component/Modal";
import LoginFeat from "../features/LoginFeat";

function Button({ children, onClick }) {
  return <div onClick={onClick}>{children}</div>;
}

export default function LoginButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>LOGIN</Button>
      <Modal
        title="Login"
        open={isOpen}
        maxWidth={32}
        onClose={() => setIsOpen(false)}
      >
        <LoginFeat onSuccess={() => setIsOpen(false)} />
      </Modal>
    </div>
  );
}

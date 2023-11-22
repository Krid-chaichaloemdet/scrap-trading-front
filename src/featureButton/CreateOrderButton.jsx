import { useState } from "react";
import Modal from "../component/Modal";
import CreateOrderFeat from "../features/CreateOrderFeat"


function Button({ children, onClick }) {

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
            <CreateOrderFeat onSuccess={() => setIsOpen(false)} />
          </Modal>
        </div>
      );
}

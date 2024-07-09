import { Email } from "../models/Email";

type Props = {
  emails: Email[];
  onSelectEmail: (email: Email) => void;
};

// const handleClick(email: Email) {
//   console.log(email);
// }

const Inbox = ({ emails, onSelectEmail }: Props) => {
  return emails.map((email) => (
    <div
      className="itemConatainer"
      onClick={() => {
        onSelectEmail(email);
      }}
      key={email.id}
    >
      <div>{email.subject}</div>
      <div>{`${email.body.slice(0, 10)} ... `}</div>
    </div>
  ));
};

export default Inbox;

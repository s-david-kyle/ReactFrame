import { useState } from "react";
import { Email } from "./models/Email";
import "./App.css";
import Inbox from "./components/Inbox";
import EmailView from "./components/EmailView";

const Emails = [
  {
    id: 1,
    subject: "Subject 1",
    slug: "slug-1",
    body: "Body 1",
  },
  {
    id: 2,
    subject: "Subject 2",
    slug: "slug-2",
    body: "Body 2",
  },
  {
    id: 3,
    subject: "Subject 3",
    slug: "slug-3",
    body: "Body 3",
  },
  {
    id: 4,
    subject: "Subject 4",
    slug: "slug-4",
    body: "Body 4",
  },
  {
    id: 5,
    subject: "Subject 5",
    slug: "slug-5",
    body: "Body 5",
  },
] as Email[];

function App() {
  const [emails, setEmails] = useState<Email[]>(Emails);
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);

  return (
    <div className="container">
      <div className="leftContainer">
        <div className="inboxContainer">Inbox</div>
        <Inbox
          emails={emails}
          onSelectEmail={(email) => setSelectedEmail(email)}
        />
      </div>
      <div className="rightContainer">
        <div className="emailContainer">Email View</div>
        <EmailView email={selectedEmail} />
      </div>
    </div>
  );
}

export default App;

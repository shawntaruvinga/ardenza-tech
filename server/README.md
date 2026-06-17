# Contact Email Server

This small Express server accepts POST requests at `/send-contact` and sends an email using SMTP (Nodemailer).

Setup

1. Copy `server/.env.example` to `server/.env` and fill in your SMTP credentials and desired `CONTACT_RECIPIENT`.
2. Install dependencies (from project root):

```bash
npm install
```

3. Run the server:

```bash
node server/index.js
```

API

POST /send-contact
Content-Type: application/json
Body fields: `name`, `email`, `company`, `phone`, `service`, `description`, `urgency`

The server will return JSON `{ success: true }` on success.

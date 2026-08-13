export const THERAPIST_EMAIL = "dovesmindsynergy@gmail.com";

export const createGmailComposeUrl = ({
  subject,
  body,
}: {
  subject: string;
  body: string;
}) => {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    tf: "1",
    to: THERAPIST_EMAIL,
    su: subject,
    body,
  });

  return `https://mail.google.com/mail/?${params.toString()}`;
};

export const openGmailCompose = (subject: string, body: string) => {
  window.open(createGmailComposeUrl({ subject, body }), "_blank", "noopener,noreferrer");
};

// Real contact details from navbar / profile
export const contactInfo = {
  email: "yornthanon.dev@gmail.com",
  telegram: "@yornthanon",
  facebook: "https://web.facebook.com/tha.non.20",
  github: "https://github.com/yornthanon",
};

export function telegramHref(handleOrUrl) {
  if (handleOrUrl.startsWith("http://") || handleOrUrl.startsWith("https://")) {
    return handleOrUrl;
  }
  const handle = handleOrUrl.replace(/^@/, "");
  return `https://t.me/${handle}`;
}

export const emailContactInfo = {
  address: "yornthanon.dev@gmail.com",
  label: "Email",
  subject: "Project Inquiry / សំណួរអំពីគម្រោង",
  body: "Hi Yorn,\n\nI have a question about your services / a project I'd like to discuss.\n\nBest regards,\n[Your Name]",
};

import '../styles/globals.css';

export const metadata = {
  title: 'MIS Skill Up',
  icons: {
    icon: '/mis-logo.svg',
    shortcut: '/mis-logo.svg',
    apple: '/mis-logo.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

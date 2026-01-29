import '../styles/globals.css';

export const metadata = {
  title: 'MIS Institute'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

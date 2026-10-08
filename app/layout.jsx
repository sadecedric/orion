import './globals.css';

export const metadata = {
  title: 'ORION PRONOS — Jeu des deux dés',
  description: 'Assistant du jeu des deux dés — ORION PRONOS',
  icons: {
    icon: '/de.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

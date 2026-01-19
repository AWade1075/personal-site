import "./app.css";

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  return (
    <html lang="en" id="root" className="dark">
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body>
        <main className="bg-background min-h-screen">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;

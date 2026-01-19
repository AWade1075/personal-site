import "./app.css";

const RootLayout = ({ children }: { children: React.ReactNode }): any => {
  return (
    <html lang="en" id="root" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
        (function() {
          const isDark = localStorage.getItem("dark-theme") === "true";
          document.getElementById("root")?.classList.toggle("dark", isDark);
        })();
      `,
          }}
        />
      </head>
      <body>
        <main className="bg-background min-h-screen">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;

import "./app.css";

const RootLayout = ({ children }: { children: React.ReactNode }): any => {
  return (
    <html lang="en" id="root" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
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

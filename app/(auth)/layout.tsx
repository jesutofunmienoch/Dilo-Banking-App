import Image from "next/image";

export default async function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex min-h-screen w-full justify-between font-inter">
          {children}
          <div className="auth-asset">
            <div>
              <Image
              
              src="/icons/bank.jpg"
              alt="Auth image"
              width={1000}
              height={1000}
              />
            </div>
          </div>
      </main>
    );
  }
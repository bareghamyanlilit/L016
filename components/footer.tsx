import Link from "next/link"; 

export function Footer() {
  return (
    <footer className="FontMassis bottom-0 py-10  text-center text-[#f1f1f1]  bg-guyn ">
      
      <Link href="https://www.instagram.com/siteup.am/">
        <p className="mt-2 text-sm">
          Պատրաստվել է <span className="underline">siteup.am</span> -ի  կողմից 
        </p>
      </Link>
    </footer>
  );
}

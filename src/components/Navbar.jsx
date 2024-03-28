export default function Navbar() {
  return (
    <nav className="flex justify-between items-center pt-5 px-5 lg:px-0">
      <span className="font-semibold text-base sm:text-lg">YourChallenge</span>
      <section className="space-x-2.5 sm:space-x-5 text-sm sm:text-base">
        <span className="cursor-pointer border-b-2 border-b-[#E16259] pb-px">Product</span>
        <span className="cursor-pointer hover:border-b-2 border-b-[#E16259] pb-px">Download</span>
        <span className="cursor-pointer hover:border-b-2 border-b-[#E16259] pb-px">Pricing</span>
      </section>
    </nav>
  );
}

const Footer = () => {
  return (
    <section id="footer" className=" py-14 border-t border-zinc-700 ">
      <div className="max-w-[1280px] my-0 mx-auto py-0 sm:px-[32px] px-[24px]">
        <p className="font-rubik text-center font-normal text-[16px] md:text-[18px] leading-[27px] text-slate-100  ">
          Copyright &copy; {new Date().getFullYear()} Youth Library. Developed
          by Zaw Lwin Phyo & Khin Su Wai.
        </p>
      </div>
    </section>
  );
};

export default Footer;

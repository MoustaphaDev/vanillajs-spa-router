const styles = {};

const Hero = () => {
  return `
    <div class="px-16 flex flex-col overflow-hidden w-screen h-screen after:absolute after:w-screen after:h-screen after:top-0 after:left-0 after:bg-[url('/static/img/hero-img.jpg')] after:bg-cover after:bg-center after:-z-10 after:-scale-x-100">
        <h1 class="text-white text-7xl mt-40 max-w-[16ch] font-bold">Commencez votre journée avec un bon café</h1>
        <div class="text-orange-500 text-lg mt-6"><span>PRODUIT LOCALEMENT</span> - <span>CUIT AVEC AMOUR</span></div>
        <p class="text-md text-gray-200 max-w-[35ch] mt-2 font-light">Commander votre délicieux café local dès maintenant et recevez en deux</p>
        <div class="flex w-80 text-white justify-between mt-16">
            <button class="px-6 py-3 bg-transparent border-2 font-bold transition-colors hover:text-black hover:bg-white border-white">TiakTiak</button>
            <button class="px-6 py-3 bg-transparent border-2 font-bold transition-colors hover:text-black hover:bg-white border-white">Point relais</button>
        </div>
    </div>
  `;
};

export default Hero;

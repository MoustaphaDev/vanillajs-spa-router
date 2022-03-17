const About = () => {
  return `
    <div class="px-16 mt-36 flex w-full text-black items-center justify-center">
        <h2 class="font-bold mb-12 text-xl uppercase">Qui sommes nous?</h2>
    </div>
    <div class="mx-16 grid grid-cols-2 mt-4 bg-gray-100">
        <img class="shadow-3xl translate-x-7 shadow-gray-600 scale-110" src="/static/img/about-img.jpg" alt="coffee image">
        <div class="mx-28 grid items-center">
            <div>
                <h3 class="font-bold mb-12 text-xl uppercase">Nos clients d'abord</h3>
                <p>Notre café est produit avec des outils d'agriculture modernes et cueillit avec attention. Ce café naturel germe dans des plantations ensoleillées. Nous en fournissons plusieurs parfums et varietés</p>
            </div>
        </div>

    </div>
  `;
};

export default About;

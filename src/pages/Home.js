import getData from '../utils/getData';

const Home = async() => {
        const characters = await getData();
        const view = `
        <div class="Characters">
            ${characters.results.map(character => `
                <article class="Character-item">
                    <a href="#/${character.id}/">
                        <h2 class="py-4">${character.name}</h2>
                        <img src="${character.image}" alt="${character.name}">
                    </a>
                </article>
            `).join('')}
        </div>
    `;

    return view;
}

export default Home;
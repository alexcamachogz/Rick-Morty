import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async() => {
    const id = getHash();
    const character = await getData(id);
    const view = `
        <div class="Characters-inner">
            <article class="Characters-card">
                <img src="${character.image}" alt="${character.name}">
            </article>
            <article class="Characters-card">
                <h2 class="text-xl font-normal text-center m-5 bg-gray-300 p-4 rounded-lg">${character.name}</h2>
                <h3 class="text-base font-light m-5">
                    Episodes: <span>${character.episode.length}</span>
                </h3>
                <h3 class="text-base font-light m-5">
                    Status: <span>${character.status}</span>
                </h3>
                <h3 class="text-base font-light m-5">
                    Species: <span>${character.species}</span>
                </h3>
                <h3 class="text-base font-light m-5">
                    Gender: <span>${character.gender}</span>
                </h3>
                <h3 class="text-base font-light m-5">
                    Origin: <span>${character.origin.name}</span>
                </h3>
                <h3 class="text-base font-light m-5">
                Last Location: <span>${character.location.name}</span>
                </h3>
            </article>
        </div>
    `;

    return view;
}

export default Character;
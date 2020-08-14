import Header from '../template/Header';
import Home from '../pages/Home';
import Character from '../pages/Characters';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const route = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
}

const router = async() => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
}

export default router;
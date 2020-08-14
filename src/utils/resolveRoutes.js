const { default: router } = require("../routes")

const resolverRoutes = () => {
    if (router.length <= 3) {
        let validRoute = route === '/' ? route : '/:id';
        return validRoute;
    }

    return route;
}

export default resolverRoutes;
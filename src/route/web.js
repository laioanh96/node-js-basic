import express from "express";
import homeController from '../controller/homeController'

let router = express.Router();

const initWebRoute = (app) => {
    
    router.get('/', homeController.getHomepage);
    router.get('/about', (req, res) => {
        res.send('Toi la Oanh about')
    })

    return app.use('/', router)
}

export default initWebRoute;
/* module.exports = initWebRoute; */
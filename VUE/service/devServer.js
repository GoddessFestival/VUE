// devServer.js
const  Koa = requrie('koa');
const KoaRouter = requrie('koa-router');


const app = new Koa();
const router = new KoaRouter();
router.get('/api/login',(req,res) => {

})
router.get('/api/userinfo',(req,res) => {
    
})


app.use(router.routes())
app.listen('3000')
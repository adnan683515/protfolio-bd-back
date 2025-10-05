import express from 'express';
import cors from 'cors';
import { DesginRoute } from './model/Design/design.route.js';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
app.use('/api/designs', DesginRoute);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=app.js.map
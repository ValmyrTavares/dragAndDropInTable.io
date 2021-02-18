import DragTable from './modules/DragTable.js';
import NewData from './modules/NewData.js';

const data = new NewData();
data.init();

const table = new DragTable();
table.init();

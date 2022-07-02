import './App.css';
import { BarCharts } from './components/barCharts/bar-charts';
import Charts from './components/chartsPie/charts';
import Sidebar from './components/sidebar/sidebar';
import TableC from './components/table/table';

function App() {



  return (
    <div className="App">
      <div className='fullContent'>
        <div className='sidebarContent'>
          <Sidebar />
        </div>
        <div className='chartsContent'>
          <div className='statusContent'>
            <div className='cardContent charts'>
              <Charts/></div>
            <div className='cardContent charts'>
              <BarCharts />
            </div>
          </div>
          <div className='totalContent'>
            <div className='cardContent'>
              <TableC />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import './sidebar.scss';
import { FC } from 'react';
import { Dashboard, InsertChartOutlinedOutlined, ExitToApp, BarChartOutlined, StackedLineChartOutlined, CheckCircleOutline, Contrast, FilterHdr, Recycling,  } from '@mui/icons-material'
import { Link } from 'react-router-dom';

const links = [
  {
    id: 0,
    url: '/',
    title: 'Home',
    icon: <Dashboard/>
  },
  {
    id: 1,
    url: '/codechurn',
    title: 'Code Churn',
    icon: <InsertChartOutlinedOutlined/>
  },
  {
    id: 2,
    url: '/crashrate',
    title: 'Crash Rate',
    icon: <BarChartOutlined/>
  },
  {
    id: 3,
    url: '/availability',
    title: 'Availability',
    icon: <FilterHdr/>
  },
  {
    id: 4,
    url: '/ddensity',
    title: 'Defect Density',
    icon: <FilterHdr/>
  },
  {
    id: 5,
    url: '/mttd',
    title: 'MTTD',
    icon: <FilterHdr/>
  },
  {
    id: 6,
    url: '/mtbf',
    title: 'MTBF',
    icon: <CheckCircleOutline/>
  },
  {
    id: 7,
    url: '/mttr',
    title: 'MTTR',
    icon: <StackedLineChartOutlined/>
  },
  {
    id: 8,
    url: '/csat',
    title: 'Customer Satifaction',
    icon: <Contrast/>
  },
  {
    id: 9,
    url: '/ccoverage',
    title: 'Code Coverage',
    icon: <Recycling/>
  }
]

const Sidebar:FC = () => {

  const user = false
  return (
    <div className='sidebar'>
      <ul className="s-top">
        {
          links.map((link) => (
          <Link to={link.url} className='link span'>
            <span>{link.icon}</span>
            <p>{link.title}</p>
          </Link>

          ))
        }

      </ul>
      {
        user &&
        <div className="s-bottom">
          <ExitToApp/>
          <p>Logout</p>
        </div>
      }
    </div>
  )
}

export default Sidebar

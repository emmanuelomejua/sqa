import './sidebar.scss'

const links = [
  {
    id: 0,
    url: '/',
    title: 'Home',
    icon: ''
  },
  {
    id: 1,
    url: '/codechurn',
    title: 'Code Churn',
    icon: ''
  },
  {
    id: 2,
    url: '/crashrate',
    title: 'Crash Rate',
    icon: ''
  },
  {
    id: 3,
    url: '/availability',
    title: 'Availability',
    icon: ''
  },
  {
    id: 4,
    url: '/ddensity',
    title: 'Defect Density',
    icon: ''
  },
  {
    id: 5,
    url: '/mttd',
    title: 'MTTD',
    icon: ''
  },
  {
    id: 6,
    url: '/mtbf',
    title: 'MTBF',
    icon: ''
  },
  {
    id: 7,
    url: '/mttr',
    title: 'MTTR',
    icon: ''
  },
  {
    id: 8,
    url: '/csat',
    title: 'Customer Satifaction',
    icon: ''
  },
  {
    id: 9,
    url: '/ccoverage',
    title: 'Code Coverage',
    icon: ''
  }
]

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul className="s-top">
        <span>
          <p></p>
          <span></span>
        </span>
      </ul>
      <div className="s-bottom">
        Logout
      </div>
    </div>
  )
}

export default Sidebar

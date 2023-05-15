import React from 'react'
import Datatable from '../component/Datatable.jsx'
import DashboardNav from '../component/DashboardNav.jsx'
import DashboardFooter from '../component/DashboardFooter.jsx'
const Historics = () => {
  return (
    <>
    <DashboardNav />
    <Datatable title="Historial" />
    <DashboardFooter />
    </>
  )
}

export default Historics
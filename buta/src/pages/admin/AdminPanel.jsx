import React from 'react'
import Sidebar from '../../components/adminComp/Sidebar'
import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const AdminPanel = () => {
  return (
    <div className='adminPanel'>
        <Sidebar />
        <main className='col-xl-9 col-lg-9 col-md-9 col-sm-9'>
                <div className="boxOfMain text-center mt-5">
                    Still doesnt work
                </div>
        </main>
    </div>
  )
}
export default AdminPanel

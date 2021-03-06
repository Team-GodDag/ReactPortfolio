import { employees } from '../../employeeData'
import Employee from '../Employee/index'
import './index.scss'
import { useEffect, useState } from 'react'

const EmployeeList = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  return (
    <div className="wrapper">
      <div className="cards_wrap">
        {employees.map((employee) => (
          <Employee
            key={employee.id}
            name={employee.name}
            title={employee.title}
            description={employee.description}
            imgURL={employee.imgURL}
            linkedInUrl={employee.linkedInUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default EmployeeList

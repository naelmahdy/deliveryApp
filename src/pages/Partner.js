import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Partner = () => {
  // const [errorMessage, setErrorMessage] = useState('')
  // let navigate = useNavigate()
  // const [user, setUser] = useState({
  //   'email': '',
  //   'password': '',
  // })
  let submitFormData = (e) => {
    e.preventDefault()
    console.log(e)
    alert('fsdfsd')
  }
  let getInputValue = () => {
    console.log('sd')
  }
  return (

    <div className="container text-center">
      <div className="row">
        <div className="col-md-6 col-sm-12 my-5">
          <h1>
            Reach new customers, get more sales
          </h1>
          <h3>
            Join us, and you will have alot of benefits.
          </h3>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="d-grid gap-2">
            <form onSubmit={submitFormData}>
              <div className='my-2'>
                <label htmlFor='Logo' className=''>put your Logo here</label>
                <input onChange={getInputValue} id='Logo' type='file' className='form-control my-3' name='Logo' />
              </div>
              <div className='my-2'>
                <label htmlFor='RestaurantEN' className=''>Restaurant name EN</label>
                <input onChange={getInputValue} id='RestaurantEN' type='text' className='form-control my-3' name='RestaurantEN' />
              </div>
              <div className='my-2'>
                <label htmlFor='RestaurantAr' className=''>Restaurant name Ar</label>
                <input onChange={getInputValue} id='RestaurantAr' type='text' className='form-control my-3' name='RestaurantAr' />
              </div>
              <div className='my-2'>
                <label htmlFor='Crn' className=''>put your CRN here</label>
                <input onChange={getInputValue} id='Crn' type='text' className='form-control my-3' name='Crn' />
              </div>
              <div className='my-2'>

                <label htmlFor='RestaurantType' className=''>put your Restaurant type here</label>
                <input onChange={getInputValue} id='RestaurantType' type='text' className='form-control my-3' name='RestaurantType' />
              </div>

              <div className='my-2'>
                <label htmlFor='Logo' className=''>put your Logo here</label>
                <input onChange={getInputValue} id='Logo' type='file' className='form-control my-3' name='Logo' />
              </div>

              <div className='my-2'>
                <label htmlFor='Logo' className=''>put your Logo here</label>
                <input onChange={getInputValue} id='Logo' type='file' className='form-control my-3' name='Logo' />
              </div>

              <div className='my-2'>
                <label htmlFor='FullName' className=''>Your Full Name</label>
                <input onChange={getInputValue} id='FullName' type='text' className='form-control my-3' name='FullName' />
              </div>

              <div className='my-2'>

                <label htmlFor='NationalityId' className=''>NationalityId</label>
                <input onChange={getInputValue} id='NationalityId' type='text' className='form-control my-3' name='NationalityId' />
              </div>
              <div className='my-2'>
                <label htmlFor='Email' className=''>put your Email here</label>
                <input onChange={getInputValue} id='Email' type='email' className='form-control my-3' name='Email' />
              </div>
              <div className='my-2'>
                <label htmlFor='PhoneNumber' className=''>put your PhoneNumber here</label>
                <input onChange={getInputValue} id='PhoneNumber' type='tel' className='form-control my-3' name='PhoneNumber' />
              </div>
              <div className='my-2'>
                <label htmlFor='Nationality' className=''>put your Nationality here</label>
                <input onChange={getInputValue} id='Nationality' type='file' className='form-control my-3' name='Nationality' />
              </div>
              <div className='my-2'>
                <label htmlFor='OwnerType' className=''>put your OwnerType here</label>
                <input onChange={getInputValue} id='OwnerType' type='file' className='form-control my-3' name='OwnerType' />
              </div>

              <button className='btn btn-info my-3 w-100'>Register</button>

            </form>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Partner
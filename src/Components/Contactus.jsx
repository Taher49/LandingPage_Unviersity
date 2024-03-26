import img_contact from '../assets/contact us.svg'

const Contactus = () => {
  return (
    <section className='py-5' id='contactus'>
        <div className='container'>
        <div className='row align-items-center justify-content-center'>
            <div className='col-md'>
                <img src={img_contact} alt="" className='img-fluid' />
            </div>
      
        <div class=" col-md py-4 mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
<div class=" col-md py-3 mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
        </div>
        </div>
    </section>
  )
}

export default Contactus
import image_next from '../assets/bg-hero.jpg'

const Hero = () => {
  return (
    <>
    <section id="hero" className=" bg-body-tertiary text-dark py-5">  
    <div className="container ">
        <div className="row align-items-center justify-content-center flex-row-reverse">
            <div className="col-md ">
            <img src={image_next}alt="" class="img-fluid" />
            </div>
            <div className='col-md py-4'>
                <h1 className="display-3">University <span className="text-info">io</span> </h1>
                <p className="py-1 lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Illum, impedit eius optio repudiandae dignissimos hic aliquid voluptatibus, facere, n
                obis ad delectus! Numquam harum aperiam id blanditiis ullam. Quaerat qui, sunt dolores eum tenetur d
                oloribus ratione debitis numquam libero blanditiis perferendis.</p>
                <button className="btn btn-info text-light m-1">Get Started</button>
                <button className="btn btn-light text-info">Get Started</button>
                </div>
            </div> 
         
        </div>
       
  

   </section>
   </>
  )
}

export default Hero
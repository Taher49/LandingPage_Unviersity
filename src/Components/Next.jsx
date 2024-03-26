import image_next from '../assets/next.jpg'

const Next = () => {
  return (
    <section id="learn" class="py-5 bg-dark text-light">
    <div class="container">
        <div class="row align-items-center justify-content-center flex-row-reverse">
            <div class="col-md">
            <img src={image_next}alt="" class="img-fluid" />
        </div>
        <div class="col-md py-4">
            <h2 className='text-info'>Learn Bootstrap</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quia rerum quaerat reiciendis provident delectus vitae, excepturi odit alias consectetur, ex facere iusto et beatae repellendus non magni quo exercitationem.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe consequuntur adipisci esse soluta est, doloremque sunt distinctio sed. Est, saepe.</p>
        </div>
    </div>
    </div>
   </section>

  )
}

export default Next
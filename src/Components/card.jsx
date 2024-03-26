import React from 'react'

const Card = () => {
  return (
    <>
 <section class="py-5">
      <div class="container">
        <div class="row text-center">
            <div class="col-sm">
                <div class="card bg-light text-light mb-3" >
                <i class="bi bi-award py-3 display-5 text-dark "></i> 
                    <div class="card-body">
                        <h5 class="card-title text-info">Hello</h5>
                        <p class="card-text text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, fuga.</p>
                        <a href="#" class="btn btn-info text-light">Get Started</a>
                    </div>
                </div>
            </div>
            <div class="col-sm">
                <div class="card bg-light text-light mb-3" >
                    <i class="bi bi-mortarboard-fill py-3 display-5 text-dark"></i> 
                    <div class="card-body">
                        <h5 class="card-title text-info">Hello</h5>
                        <p class="card-text text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, fuga.</p>
                        <a href="#" class="btn btn-info text-light">Get Started</a>
                    </div>
                </div>
            </div>
            <div class="col-sm">
                <div class="card bg-light text-light mb-3" >
                <i class="bi bi-graph-down py-3 display-5 text-dark"></i> 
                    <div class="card-body">
                        <h5 class="card-title text-info">Hello</h5>
                        <p class="card-text text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, fuga.</p>
                        <a href="#" class="btn btn-info text-light">Get Started</a>
                    </div>
                </div>
            </div>

        </div>
      </div>
       </section>
</>
  )
}

export default Card
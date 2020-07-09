let imagenes = [1,2,3,4,5,6,7,8,9,10,11]
    let galeria = document.getElementById('galeria');
    for (const imagen of imagenes) {
        galeria.innerHTML += `
        <div class="card">
            <a href="" data-toggle="modal" data-target="#id${imagen}">
                <img src="./img/gallery/${imagen}.jpg" alt="" class="card-img-top">
            </a>
        </div>
        <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <button type="button" class="close mr-3 mt-3" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <img src="./img/gallery/${imagen}.jpg" alt="" class="img-fluid rounded">
            </div>
        </div>
        ` 
    }   
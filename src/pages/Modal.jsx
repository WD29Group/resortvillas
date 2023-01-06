function Modal(props) {
    return (
        <>
            <div className="rvmodal material-symbols-outlined AccountProfile" data-bs-toggle="modal" data-bs-target="#AccProf">
                mail
            </div>
            <div className="modal fade" id="AccProf">
                <div className="modal-dialog modal-dialog-centered">
                    <div className=" ModaSVlBorder Cardtransp modal-content ">
                        <div className="p-5 rounded-5">
                        <h3 className="fw-bold mb-3 text-center">Subscribe to our newsletter</h3>
                        <form action="https://www.example.com">
                            <center>
                                <div className="mb-3">
                                    <input className="form-control" type="text" placeholder="Name" name="name" id="fieldname" />
                                </div>
                                <div className="mb-3">
                                    <input className="form-control" type="text" placeholder="E-mail" name="email" id="fieldemail" />
                                </div>
                                    <button className="SubscribedBtn" type="submit" data-bs-dismiss="modal">Subscribe</button>
                            </center>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Modal;
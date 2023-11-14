import qrCode from '../../assets/image-qr-code.png';

const QRCode = () => {
  return (
    <div className="bg-white p-4 mx-5 rounded-3xl w-full lg:w-80">
      <figure className="mb-5">
        <img src={qrCode} alt="" className="rounded-xl" />
      </figure>
      <div className="font-outfit px-5 text-center">
        <h3 className="font-bold mb-3 text-xl text-dark-blue">Improve your front-end skills by building projects</h3>
        <p className="text-grayish-blue">
          Scan the QR code to visit Frontend Mentor and take your coding skills to
          the next level
        </p>
      </div>
    </div>
  )
}

export default QRCode;

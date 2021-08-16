import React, { useState } from 'react';
import '../css/CurrentDG.css'
import { Modal} from 'react-bootstrap';


import ModalHeader from 'react-bootstrap/esm/ModalHeader';




function WallofFame() {
  const [eliasShow, setEliasShow] = useState(false)
  const [morganShow, setMorganShow] = useState(false)
  const [tamaraShow, setTamaraShow] = useState(false)
  const [emmaSShow, setEmmaSShow] = useState(false)
  const [antonShow, setAntonShow] = useState(false)
  const [erikShow, setErikShow] = useState(false)
  const [johanShow, setJohanShow] = useState(false)
  const [oscarShow, setOscarShow] = useState(false)
  const [marcusShow, setMarcusShow] = useState(false)
  const [shamilShow, setShamilShow] = useState(false)
  const [aliceShow, setAliceShow] = useState(false)
  const [emmaWShow, setEmmaWShow] = useState(false)
  const [axelShow, setAxelShow] = useState(false)

  return (
    <>
    <div className="row">
      <h2>Klicka på valfri groupie för att lära oss bättre</h2>
    </div>
    <div className="Groupies">
      <div className="row">
        <div className="col-6 col-md-4">
          <img
            src="https://i.imgur.com/9QCprnd.jpg"
            className="GroupieThumb"
            alt='Groupie'
            height='230px'
            width='230px'
            onClick={() => (setTamaraShow(true))}
          />
        </div>
        <div className="col-12 col-md-8">
          <h1>Tamara Jurić</h1>
          <p>Cheif</p>
          <p><a href="mailto:tamara.juric@d-group.se">tamara.juric@d-group.se</a></p>
        </div>
        
      </div>
      <div className="row">
        <div className="col-6 col-md-4">
          <img
            src="https://i.imgur.com/3Vrvgj6.jpg"
            className="GroupieThumb"
            alt='Groupie'
            height='230px'
            width='230px'
            onClick={() => (setEmmaWShow(true))}
          />

        </div>
        <div className="col-12 col-md-8">
          <h1>Emma Wahlund</h1>
          <p>Cha$h</p>
          <p><a href="mailto:emma.wahlund@d-group.se">emma.wahlund@d-group.se</a></p>
        </div>
      </div>

      <div className="row">
        <div className="col-6 col-md-4">
          <img
            src="https://i.imgur.com/SGHNmjK.jpg"
            className="GroupieThumb"
            alt='Groupie'
            height='230px'
            width='230px'
            onClick={() => (setMarcusShow(true))}
          />
        </div>
        <div className="col-12 col-md-8">
          <h1>Marcus Döberl</h1>
          <p>Webb & ÖverDomaren (TM)</p>
          <p><a href="mailto:marcus.doberl@d-group.se">marcus.doberl@d-group.se</a></p>
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-md-4">
        <img
            src="https://i.imgur.com/QcsoV4W.jpg"
            className="GroupieThumb"
            alt='Groupie'
            height='230px'
            width='230px'
            onClick={() => (setAntonShow(true))}
          />
        </div>
        <div className="col-12 col-md-8">
          <h1>Anton Bergman</h1>
          <p>Werk</p>
          <p><a href="mailto:anton.bergman@d-group.se">anton.bergman@d-group.se</a></p>
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-md-4">
          <img
            src="https://i.imgur.com/QpUTpSB.jpg"
            className="GroupieThumb"
            alt='Groupie'
            height='230px'
            width='230px'
            onClick={() => (setAxelShow(true))}
          />
        </div>
        <div className="col-12 col-md-8">
          <h1>Axel Peters</h1>
          <p>Pr & Event</p>
          <p><a href="mailto:axel.peters@d-group.se">axel.peters@d-group.se</a></p>
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-md-4">
        <img
            src="https://i.imgur.com/jVaoGVn.jpg"
            className="GroupieThumb"
            alt='Groupie'
            height='230px'
            width='230px'
            onClick={() => (setShamilShow(true))}
          />
        </div>
        <div className="col-12 col-md-8">
          <h1>Shamil Limbasiya</h1>
          <p>J^8</p>
          <p><a href="mailto:shamil.limbasiya@d-group.se">shamil.limbasiya@d-group.se</a></p>
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-md-4">
          <img
            src="https://i.imgur.com/DvwMyRa.jpg"
            className="GroupieThumb"
            alt='Groupie'
            height='230px'
            width='230px'
            onClick={() => (setAliceShow(true))}
          />
        </div>
        <div className="col-12 col-md-8">
          <h1>Alice Bramstedt</h1>
          <p>Spons</p>
          <p><a href="mailto:alice.bramstedt@d-group.se">alice.bramstedt@d-group.se</a></p>
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-md-4">
          <img
            src="https://i.imgur.com/A1hN172.jpg"
            className="GroupieThumb"
            alt='Groupie'
            height='230px'
            width='230px'
            onClick={() => (setEmmaSShow(true))}
          />
        </div>
        <div className="col-12 col-md-8">
          <h1>Emma Siklosi</h1>
          <p>Trykk</p>
          <p><a href="mailto:emma.siklosi@d-group.se">emma.siklosi@d-group.se</a></p>
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-md-4">
          <img
            src="https://i.imgur.com/wAEKWn2.jpg"
            className="GroupieThumb"
            alt='Groupie'
            height='230px'
            width='230px'
            onClick={() => (setEliasShow(true))}
          />
        </div>
        <div className="col-12 col-md-8">
          <h1>Elias Hörnberg</h1>
          <p>Biljett & U-Lag</p>
          <p><a href="mailto:elias.hornberg@d-group.se">elias.hornberg@d-group.se</a></p>
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-md-4">
        <img
            src="https://i.imgur.com/xWSoQBM.jpg"
            className="GroupieThumb"
            alt='Groupie'
            height='230px'
            width='230px'
            onClick={() => (setOscarShow(true))}
          />
        </div>
        <div className="col-12 col-md-8">
          <h1>Oscar Stolpe</h1>
          <p>Mat & Sittning</p>
          <p><a href="mailto:oscar.stolpe@d-group.se">oscar.stolpe@d-group.se</a></p>
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-md-4">
        <img
            src="https://i.imgur.com/sFY2TtE.jpg"
            className="GroupieThumb"
            alt='Groupie'
            height='230px'
            width='230px'
            onClick={() => (setErikShow(true))}
          />
        </div>
        <div className="col-12 col-md-8">
          <h1>Erik Hilke</h1>
          <p>Trykk</p>
          <p><a href="mailto:erik.hilke@d-group.se">erik.hilke@d-group.se</a></p>

        </div>
      </div>
      <div className="row">
        <div className="col-6 col-md-4">
        <img
            src="https://i.imgur.com/nHiwZiO.jpg"
            className="GroupieThumb"
            alt='Groupie'
            height='230px'
            width='230px'
            onClick={() => (setJohanShow(true))}
          />
        </div>
        <div className="col-12 col-md-8">
          <h1>Johan Sjöstedt</h1>
          <p>Pr & Personal</p>
          <p><a href="mailtojohan.sjostedt@d-group.se">johan.sjostedt@d-group.se</a></p>
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-md-4">
          <img
            className="GroupieThumb"
            src="https://i.imgur.com/SfjntgL.jpg"
            alt='Groupie'
            height='230px'
            width='230px'
            onClick={() => (setMorganShow(true))}
          />
        </div>
        <div className="col-12 col-md-8">
          <h1>Morgan Uvelid</h1>
          <p>Öl & Bar</p>
          <p><a href="mailto:morgan.uvelid@d-group.se">morgan.uvelid@d-group.se</a></p>
        </div>
      </div>      
    </div>







    <div className="Modals">
      <div className="eliasModal">
        <Modal
          size="lg"
          show={eliasShow}
          onHide={() => setEliasShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header CloseButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Elias Hörnberg
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <question>Vilken post har du?</question> <br/>
              <answer>Biljett & U-lag</answer> <br/>
              <question>Vilken klass går du i?</question> <br/>
              <answer>D2b</answer> <br/>
              <question>Vad gjorde du i sommras?</question> <br/>
              <answer>Dropkick inte någon ;(</answer> <br/>
              <question>Vad är din go to dricka?</question> <br/>
              <answer>Kir eller 7pang</answer> <br/>

          </Modal.Body>
        </Modal>
      </div>
      <div className="morganModal">
        <Modal
            size="lg"
            show={morganShow}
            onHide={() => setMorganShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Morgan Ullevid
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <question>Vilken post har du?</question> <br/>
              <answer>Öl & Bar</answer> <br/>
              <question>Vilken klass går du i?</question> <br/>
              <answer>IT2</answer> <br/>
              <question>Vad gjorde du i sommras?</question> <br/>
              <answer>Kommer inte ihåg</answer> <br/>
              <question>Vad är din go to dricka?</question> <br/>
              <answer>Kommer inte ihåg</answer> <br/>
            </Modal.Body>
          </Modal>
      </div>
      <div className="tamaraModal">
        <Modal
          size="lg"
          show={tamaraShow}
          onHide={() => setTamaraShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
          >
            <ModalHeader closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Tamara Jurić
              </Modal.Title>
            </ModalHeader>
            <Modal.Body>
              <question>Vilken post har du?</question> <br/>
              <answer>Cheif</answer> <br/>
              <question>Vilken klass går du i?</question> <br/>
              <answer>D2b</answer> <br/>
              <question>Vad gjorde du i sommras?</question> <br/>
              <answer>Besökte stora städer</answer> <br/>
              <question>Vad är din go to dricka?</question> <br/>
              <answer>Kosken (in my heart)</answer> <br/>
              </Modal.Body>
          </Modal>
      </div>
      <div classname="emmaSModal">
        <Modal
          size="lg"
          show={emmaSShow}
          onHide={() => setEmmaSShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
          >
            <ModalHeader closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Emma Sikloski
              </Modal.Title>
            </ModalHeader>
            <Modal.Body>
              <question>Vilken post har du?</question> <br/>
              <answer>Trykk</answer> <br/>
              <question>Vilken klass går du i?</question> <br/>
              <answer>U2a</answer> <br/>
              <question>Vad gjorde du i sommras?</question> <br/>
              <answer>Trykkt</answer> <br/>
              <question>Vad är din go to dricka?</question> <br/>
              <answer>Cider</answer> <br/>
            </Modal.Body>
        </Modal>
      </div>
      <div className="antonModal">
        <Modal
          size="lg"
          show={antonShow}
          onHide={() => setAntonShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
          >
            <ModalHeader closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Anton Bergman
              </Modal.Title>
            </ModalHeader>
            <Modal.Body>
              <question>Vilken post har du?</question> <br/>
              <answer>Werk</answer> <br/>
              <question>Vilken klass går du i?</question> <br/>
              <answer>D2a</answer> <br/>
              <question>Vad gjorde du i sommras?</question> <br/>
              <answer>Kört bil</answer> <br/>
              <question>Vad är din go to dricka?</question> <br/>
              <answer>Sofiero Guld</answer> <br/>
            </Modal.Body>
        </Modal>
      </div>
      <div className="erikModal">
        <Modal
          size="lg"
          show={erikShow}
          onHide={() => setErikShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
          >
            <ModalHeader closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Erik Hilke
              </Modal.Title>
            </ModalHeader>
            <Modal.Body>
              <question>Vilken post har du?</question> <br/>
              <answer>Trykk</answer> <br/>
              <question>Vilken klass går du i?</question> <br/>
              <answer>D2b</answer> <br/>
              <question>Vad gjorde du i sommras?</question> <br/>
              <answer>Käkat antibiotika</answer> <br/>
              <question>Vad är din go to dricka?</question> <br/>
              <answer>ÖL</answer> <br/>
            </Modal.Body>
        </Modal>
      </div>
      <div className="johanModal">
        <Modal
          size="lg"
          show={johanShow}
          onHide={() => setJohanShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
          >
            <ModalHeader closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Johan Sjöstedt
              </Modal.Title>
            </ModalHeader>
            <Modal.Body>
              <question>Vilken post har du?</question> <br/>
              <answer>Prolk (Pr & Folk)</answer> <br/>
              <question>Vilken klass går du i?</question> <br/>
              <answer>IT2</answer> <br/>
              <question>Vad gjorde du i sommras?</question> <br/>
              <answer> Inte blivit bakis </answer> <br/>
              <question>Vad är din go to dricka?</question> <br/>
              <answer>Allt som inte är shots</answer> <br/>
            </Modal.Body>
        </Modal>
      </div>
      <div classname="oscarModal">
        <Modal
          size="lg"
          show={oscarShow}
          onHide={() => setOscarShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
          >
            <ModalHeader closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Oscar Östman Stolpe
              </Modal.Title>
            </ModalHeader>
            <Modal.Body>
              <question>Vilken post har du?</question> <br/>
              <answer>Mat & Sittning</answer> <br/>
              <question>Vilken klass går du i?</question> <br/>
              <answer>IT2</answer> <br/>
              <question>Vad gjorde du i sommras?</question> <br/>
              <answer> Lärt D-Group att laga mat</answer> <br/>
              <question>Vad är din go to dricka?</question> <br/>
              <answer>Smothies</answer> <br/>
            </Modal.Body>
        </Modal>
      </div>
      <div className="marcusModal">
        <Modal
          size="lg"
          show={marcusShow}
          onHide={() => setMarcusShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
          >
            <ModalHeader closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Marcus Döberl
              </Modal.Title>
            </ModalHeader>
            <Modal.Body>
              <question>Vilken post har du?</question> <br/>
              <answer>Webb & Överdomaren (TM)</answer> <br/>
              <question>Vilken klass går du i?</question> <br/>
              <answer>IT2</answer> <br/>
              <question>Vad gjorde du i sommras?</question> <br/>
              <answer>Kastat pil</answer> <br/>
              <question>Vad är din go to dricka?</question> <br/>
              <answer>Ey' bro</answer> <br/>
            </Modal.Body>
          </Modal>
      </div>
      <div className="shamilModal">
        <Modal
          size="lg"
          show={shamilShow}
          onHide={() => setShamilShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
          >
            <ModalHeader closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Shamil Limbasiya 
              </Modal.Title>
            </ModalHeader>
            <Modal.Body>
              <question>Vilken post har du?</question> <br/>
              <answer>J^8</answer> <br/>
              <question>Vilken klass går du i?</question> <br/>
              <answer>D2b</answer> <br/>
              <question>Vad gjorde du i sommras?</question> <br/>
              <answer>Jäckat</answer> <br/>
              <question>Vad är din go to dricka?</question> <br/>
              <answer>Jäckningsmedel</answer> <br/>
            </Modal.Body>
          </Modal>
      </div>
      <div className="aliceModal">
        <Modal
          size="lg"
          show={aliceShow}
          onHide={() => setAliceShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
          >
            <ModalHeader closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Alice Bramstedt 
              </Modal.Title>
            </ModalHeader>
            <Modal.Body>
              <question>Vilken post har du?</question> <br/>
              <answer>Spons</answer> <br/>
              <question>Vilken klass går du i?</question> <br/>
              <answer>D2a</answer> <br/>
              <question>Vad gjorde du i sommras?</question> <br/>
              <answer>Badat i pengar</answer> <br/>
              <question>Vad är din go to dricka?</question> <br/>
              <answer>SponsPengar</answer> <br/>
            </Modal.Body>
          </Modal>
      </div>
      <div className="emmaWModal">
        <Modal
          size="lg"
          show={emmaWShow}
          onHide={() => setEmmaWShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
          >
            <ModalHeader closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Emma Wahlund
              </Modal.Title>
            </ModalHeader>
            <Modal.Body>
              <question>Vilken post har du?</question> <br/>
              <answer>Cha$h</answer> <br/>
              <question>Vilken klass går du i?</question> <br/>
              <answer>IT2</answer> <br/>
              <question>Vad gjorde du i sommras?</question> <br/>
              <answer>Badat i pengar</answer> <br/>
              <question>Vad är din go to dricka?</question> <br/>
              <answer>Kosken</answer> <br/>
            </Modal.Body>
          </Modal>
      </div>
      <div classname="axelModal">
      <Modal
          size="lg"
          show={axelShow}
          onHide={() => setAxelShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
          >
            <ModalHeader closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Axel Peters
              </Modal.Title>
            </ModalHeader>
            <Modal.Body>
              <question>Vilken post har du?</question> <br/>
              <answer>Pr & Event</answer> <br/>
              <question>Vilken klass går du i?</question> <br/>
              <answer>IT2</answer> <br/>
              <question>Vad gjorde du i sommras?</question> <br/>
              <answer>Rugbytackla en ovetenade Öl&Bar</answer> <br/>
              <question>Vad är din go to dricka?</question> <br/>
              <answer>Allt som ger mig röda ögon</answer> <br/>
            </Modal.Body>
          </Modal>
      </div>
    
    </div>
    </>
  );
}



export default WallofFame;
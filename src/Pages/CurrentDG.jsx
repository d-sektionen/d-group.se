import React, { useState } from 'react';
import '../css/CurrentDG.css'
import { Modal} from 'react-bootstrap';
import Elias from '../images/gropies/EliasH.jpg'
import Tamara from '../images/gropies/tamara.jpg'
import Morgan from '../images/gropies/Morgan.jpg'
import alice from '../images/gropies/alice.jpg'
import anton from '../images/gropies/anton.jpg'
import axel from '../images/gropies/axel.jpg'
import emmaS from '../images/gropies/emmaS.jpg'
import emmaW from '../images/gropies/emmaW.jpg'
import erik from '../images/gropies/erik.jpg'
import marcus from '../images/gropies/marcus.jpg'
import oscar from '../images/gropies/oscar.jpg'
import shmail from '../images/gropies/shamil.jpg'
import johan from '../images/gropies/johan.jpg'

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
    
    <div className="Groupies">
      <div className="row">
        <div className="col-6 col-md-4">
          <img
              src={Tamara}
              alt='Groupie'
              height='160px'
              width='160px'
              onClick={() => (setTamaraShow(true))}
            />
          
        </div>
        <div className="col-12 col-md-8">

        </div>
        
      </div>
    
      
      <img
            src={emmaW}
            alt='Groupie'
            height='160px'
            width='160px'
            onClick={() => (setEmmaWShow(true))}
          />
      <img
            src={marcus}
            alt='Groupie'
            height='160px'
            width='160px'
            onClick={() => (setMarcusShow(true))}
          />
      <img
            src={anton}
            alt='Groupie'
            height='160px'
            width='160px'
            onClick={() => (setAntonShow(true))}
          />
      <img
            src={axel}
            alt='Groupie'
            height='160px'
            width='160px'
            onClick={() => (setAxelShow(true))}
          />
      <img
            src={shmail}
            alt='Groupie'
            height='160px'
            width='160px'
            onClick={() => (setShamilShow(true))}
          />
      <img
            src={alice}
            alt='Groupie'
            height='160px'
            width='160px'
            onClick={() => (setAliceShow(true))}
          />
      <img
            src={emmaS}
            alt='Groupie'
            height='160px'
            width='160px'
            onClick={() => (setEmmaSShow(true))}
          />
      <img
            src={Elias}
            alt='Groupie'
            height='160px'
            width='160px'
            onClick={() => (setEliasShow(true))}
          />
      <img
            src={oscar}
            alt='Groupie'
            height='160px'
            width='160px'
            onClick={() => (setOscarShow(true))}
          />
      <img
            src={erik}
            alt='Groupie'
            height='160px'
            width='160px'
            onClick={() => (setErikShow(true))}
          />
      <img
            src={johan}
            alt='Groupie'
            height='160px'
            width='160px'
            onClick={() => (setJohanShow(true))}
          />
      <img
            src={Morgan}
            alt='Groupie'
            height='160px'
            width='160px'
            onClick={() => (setMorganShow(true))}
          />
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
              <answer>Öl o Bar</answer> <br/>
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
              <answer>U2</answer> <br/>
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
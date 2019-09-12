import React from 'react';
import { Row, Col } from 'reactstrap';

const Contact = () => {
  return (
    <div
      style={{
        minHeight: '75vh',
        textAlign: 'center',
        paddingTop: '15px',
        paddingBottom: '15px'
      }}
    >
      <Row style={{ maxWidth: '1400px', margin: 'auto' }}>
        <Col style={{ margin: 'auto' }} md='12' lg='4'>
          <img
            style={{
              width: '100%',
              maxWidth: '434.656px',
              border: '1px solid black'
            }}
            alt='Notice img'
            src='/Notice_Images/Notice.webp'
          />
        </Col>
        <Col md='12' lg='8'>
          <Row>
            <Col
              style={{ margin: 'auto', marginBottom: '15px' }}
              xs='12'
              md='8'
            >
              <h1 style={{ fontSize: '3rem' }} className='display-3'>
                ＊NOTICE＊
              </h1>{' '}
              <font color='red'>
                <strong>All copyrights of works belong to 'Konob'</strong>
              </font>{' '}
              <br />
              * Commercial use is not. (Please separate inquiry) to <br />*
              Figure secondary processing is not possible to (program crop
              tolerance of Use) <br />* enters the watermark in the picture
              (Please do not delete). <br />* Workpiece Can be uploaded to my
              SNS. <br />* It is possible to produce goods for private
              collection. (Please tell us in advance.) <br />* Please understand
              my painting style. (We do not receive style related feedback.){' '}
              <br />* The operation is performed on the jet broadcast. <br />*
              Contact is active from dawn to morning. <br />* Refund 100% before
              work / Rough 80% / Sketch 50% / Not possible during coloring.
              (100% refund if my personal circumstances prevent me from
              proceeding) ​ <br />
              <br />※ Please contact us for any missing parts :)
            </Col>
            <Col style={{ margin: 'auto' }} xs='12' md='12' lg='4'>
              <font color='red'>
                <strong>
                  NO) Real figures, adult males, middle aged and older, Mecca,
                  sensitive content, painting style (You can refuse at the
                  discretion of the worker.)
                </strong>
              </font>{' '}
            </Col>
            <Col xs='12' style={{ marginTop: '75px', marginBottom: '50px' }}>
              <h1 style={{ fontSize: '3rem' }} className='display-3'>
                ＊COMMISSION＊{' '}
              </h1>
              * The work will be received in advance, and the contact will
              proceed to open{' '}
              <font color='red'>
                <strong>katok</strong>
              </font>{' '}
              .<br />* Works with
              <strong> rough--sketch--coloring--finish</strong> Basically rough,
              sketch, complete capture will be sent. (The coloring process will
              be sent to you when you want / confirm the completed capture.)
              (Pose feedback is available only in rough, sketches are only
              available for faces and coloring.)
              <br />* <strong>Working period </strong>-The maximum one month is
              3-7 days after starting work.
              <br />* <strong>Size </strong>-Minimum 1500px horizontal (Pose,
              depends on the presence of small items) (Resolution 300dpi) *
              Works - we as a PNG file (if you wish, we also JPG.)
              <br />* Background does not work by default. (A bed expression
              such as Takimakura is possible and there is an additional charge.)
              (A simple background and effects can be added at random. There is
              no additional amount.)
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
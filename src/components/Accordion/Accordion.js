import React from 'react'
// import { IndexLink, Link } from 'react-router'
import './Accordion.scss'
import { Panel, Accordion as BootAccordion } from 'react-bootstrap'

export const Accordion = () => (
  <div>
    <br />
    <br />
    <br />
    <br />
    <div className='container'>
      <div className='row'>
        <div id='ethfeed' className='col-md-offset-3 col-md-6'>

          <BootAccordion>
            <Panel header={<div>Hi</div>} eventKey='1'>
              To:
              From: (Might be a Contract)
              Value:
              When:
              Input Data:


              Tech Specs:
                Block
                TxHash
                Block
                Gas Fee


            </Panel>
            <Panel header='Collapsible Group Item #2' eventKey='2'>


                                <div className='chat-message'>
                                    <div className='sender pull-left'>
                                        <div className='icon'>
                                            <img src='img/2.jpg' className='img-circle' alt='' />
                                        </div>
                                        <div className='time'>
                                            4 min
                                        </div>
                                    </div>
                                    <div className='sender pull-right'>
                                        <div className='icon'>
                                            <img src='img/1.jpg' className='img-circle' alt='' />
                                        </div>
                                        <div className='time'>
                                            3 min
                                        </div>
                                    </div>s
                                    <div className='chat-message-body on-left'>
                                        <span className='arrow'></span>
                                        <div className='sender'><a href='#'>Tikhon Laninga</a></div>
                                        <div className='text'>
                                            Hey Sam, how is it going? But I must explain to you how all this mistaken
                                            idea of denouncing of a pleasure and praising pain was born
                                        </div>
                                    </div>

                                </div>

    </Panel>
            <Panel header='Collapsible Group Item #3' eventKey='3'>
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
      terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
      skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
      Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
      beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
      excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
      raw denim aesthetic synth nesciunt you probably haven't heard of them
      accusamus labore sustainable VHS.
    </Panel>
          </BootAccordion>
        </div>
      </div>
    </div>



    <div className='container'>
      <div className='row'>
        <div className='col-md-offset-3 col-md-6'>

          <BootAccordion>
            <Panel header='Collapsible Group Item #1' eventKey='1'>
              To:
              From: (Might be a Contract)
              Value:
              When:
              Input Data:


              Tech Specs:
                Block
                TxHash
                Block
                Gas Fee


            </Panel>
            <Panel header='Collapsible Group Item #2' eventKey='2'>


                                <div className='chat-message'>
                                    <div className='sender pull-left'>
                                        <div className='icon'>
                                            <img src='img/2.jpg' className='img-circle' alt='' />
                                        </div>
                                        <div className='time'>
                                            4 min
                                        </div>
                                    </div>
                                    <div className='sender pull-right'>
                                        <div className='icon'>
                                            <img src='img/1.jpg' className='img-circle' alt='' />
                                        </div>
                                        <div className='time'>
                                            3 min
                                        </div>
                                    </div>s
                                    <div className='chat-message-body on-left'>
                                        <span className='arrow'></span>
                                        <div className='sender'><a href='#'>Tikhon Laninga</a></div>
                                        <div className='text'>
                                            Hey Sam, how is it going? But I must explain to you how all this mistaken
                                            idea of denouncing of a pleasure and praising pain was born
                                        </div>
                                    </div>

                                </div>

    </Panel>
            <Panel header='Collapsible Group Item #3' eventKey='3'>
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
      terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
      skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
      Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
      beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
      excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
      raw denim aesthetic synth nesciunt you probably haven't heard of them
      accusamus labore sustainable VHS.
    </Panel>
          </BootAccordion>
        </div>
      </div>
    </div>

    <div className='container'>
      <div className='row'>
        <div className='col-md-offset-3 col-md-6'>
<section className='widget large'>
                    <header>
                        <h4>
                            <i className='eicon-chat'></i>
                            Chat
                        </h4>
                    </header>
                    <div className='body'>
                        <div id='chat' className='chat'>
                            <div id='chat-messages' className='chat-messages'>
                                <div className='chat-message'>
                                    <div className='sender pull-left'>
                                        <div className='icon'>
                                            <img src='img/2.jpg' className='img-circle' alt='' />
                                        </div>
                                        <div className='time'>
                                            4 min
                                        </div>
                                    </div>
                                    <div className='chat-message-body'>
                                        <span className='arrow'></span>
                                        <div className='sender'><a href='#'>Tikhon Laninga</a></div>
                                        <div className='text'>
                                            Hey Sam, how is it going? But I must explain to you how all this mistaken
                                            idea of denouncing of a pleasure and praising pain was born
                                        </div>
                                    </div>
                                </div>
                                <div className='chat-message'>
                                    <div className='sender pull-right'>
                                        <div className='icon'>
                                            <img src='img/1.jpg' className='img-circle' alt='' />
                                        </div>
                                        <div className='time'>
                                            3 min
                                        </div>
                                    </div>
                                    <div className='chat-message-body on-left'>
                                        <span className='arrow'></span>
                                        <div className='sender'><a href='#'>Cenhelm Houston</a></div>
                                        <div className='text'>
                                            Pretty good. Doing my homework..  No one rejects, dislikes, or avoids
                                            pleasure itself, because it is pleasure, but because
                                        </div>
                                    </div>
                                </div>
                                <div className='chat-message'>
                                    <div className='sender pull-left'>
                                        <div className='icon'>
                                            <img src='img/2.jpg' className='img-circle' alt='' />
                                        </div>
                                        <div className='time'>
                                            2 min
                                        </div>
                                    </div>
                                    <div className='chat-message-body'>
                                        <span className='arrow'></span>
                                        <div className='sender'><a href='#'>Tikhon Laninga</a></div>
                                        <div className='text'>
                                            Any chance to go out? To take a trivial example, which of us ever undertakes
                                            laborious physical exercise, except to obtain some advantage
                                        </div>
                                    </div>
                                </div>
                                <div className='chat-message'>
                                    <div className='sender pull-right'>
                                        <div className='icon'>
                                            <img src='img/1.jpg' className='img-circle' alt='' />
                                        </div>
                                        <div className='time'>
                                            2 min
                                        </div>
                                    </div>
                                    <div className='chat-message-body on-left'>
                                        <span className='arrow'></span>
                                        <div className='sender'><a href='#'>Cenhelm Houston</a></div>
                                        <div className='text'>
                                            .. Maybe 40-50 mins. I don't know exactly. On the other hand, we denounce
                                            with righteous indignation and dislike men who are so beguiled
                                        </div>
                                    </div>
                                </div>
                                <div className='chat-message'>
                                    <div className='sender pull-left'>
                                        <div className='icon'>
                                            <img src='img/2.jpg' className='img-circle' alt='' />
                                        </div>
                                        <div className='time'>
                                            1 min
                                        </div>
                                    </div>
                                    <div className='chat-message-body'>
                                        <span className='arrow'></span>
                                        <div className='sender'><a href='#'>Tikhon Laninga</a></div>
                                        <div className='text'>
                                            Anyway sounds great! These cases are perfectly simple and easy to
                                            distinguish.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <footer className='chat-footer row'>
                                <div className='col-xs-9'>
                                    <input id='new-message' type='text' className='form-control input-transparent' placeholder='Enter your message..' />
                                </div>
                                <div className='col-xs-3'>
                                    <button type='button' id='new-message-btn' className='btn btn-transparent btn-block'>Send</button>
                                </div>
                            </footer>
                        </div>
                    </div>
                </section>


  </div>
  </div>
  </div>
  </div>
)

export default Accordion

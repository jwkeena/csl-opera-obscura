import React from 'react';
import Tooltip from '../../components/Tooltip';
import './styles.css';

function Footer() {
    return (
        <div className="page-footer">
            <div className="container">
                <div className="footer-copyright">
                    <div className="row">
                        <br></br>
                        <div className="center-align">
                            <a href="mailto:jwkeena@gmail.com" className="btn indigo darken-4" title="New texts and corrections to existing ones are welcome. For new texts please include as much bibliographical information as possible: exact date of publication, title, reference, and explanatory notes.">Submit new text
                                <i className="material-icons right">send</i>
                            </a>
                            <p className="letter-search-tooltip show-on-large hide-on-med-and-down">See also: <b><Tooltip footer={true}>C.S. Lewis Letter Search</Tooltip></b></p>
                            <p className="letter-search-tooltip hide-on-large-only show-on-med-and-down">See also: <b>C.S. Lewis Letter Search</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
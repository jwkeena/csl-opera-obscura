import React, { Component } from 'react';
import M from 'materialize-css';
import './styles.css';
import signature from '../../c-s-lewis-signature.png';

class AboutModal extends Component {

    componentDidMount() {
        M.Modal.init(this.modal)
    }

    render() {
        return (
            <div>
                <a className="modal-trigger" href={"#about"}>
                    <h1 className="topHeader center-align">Clivi Hamiltoni</h1>
                    <h1 className="bottomHeader center-align">Opera Obscura</h1>
                    <p className="subHeader center-align" title="Click to learn more">A Bibliography of Obscure and Newly Published Texts by <img className="signature" src={signature} alt="C.S. Lewis's singature"></img>
                    </p>
                </a>
                <div 
                    ref={ (modal) => {this.modal = modal} }
                    id="about"
                    className="modal modal-fixed-footer">
                    <div className="modal-content">
                        <h3 className="center-align">About This Project</h3>
                        <p><b>PURPOSE: </b>This bibliography is an exhaustive collection of all <b>published</b> works by C.S. Lewis, however fragmentary, that are, for the most part, not available in the many well-known and accessible volumes of his writings edited by Walter Hooper.</p>
                        <p><b>SUBMISSIONS: </b>Corrections and additions are welcome. The author can be reached <a className="email" href="mailto: jwkeena@gmail.com">by email</a>. Please include as much bibliographical information as possible for new submissions (exact date of publication, title, reference, and explanatory notes).</p>
                        <p><b>SOURCES: </b>However, many of the following entries in this list, and some of the notes on them, are drawn verbatim from Hooper’s indispensible bibliographies in <i>C.S. Lewis: A Companion and Guide</i> (New York: HarperCollins, 1996), pp. 799-883, <i>C.S. Lewis at the Breakfast Table and Other Reminiscences,</i> ed. James T. Como (1992, new edition), pp. 250-301, and <i>Remembering C.S. Lewis: Recollections of Those Who Knew Him,</i> ed. James T. Como (San Francisco: Ignatius, 2005, 3rd edition), pp. 387-492.</p>
                        <p>I have supplemented, expanded, or corrected Hooper’s entries as necessary, in addition to adding dozens of my own. I have not used Hooper’s long-outdated first bibliography, which can be found in <i>Light on C.S. Lewis,</i> ed. Jocelyn Gibb (London: Geoffrey Bles, 1965), pp. 117-60. Paul Tankard’s meticulously researched article, “Notes on the Bibliography of C.S. Lewis,” <i>Notes & Queries,</i> vol. 263, no. 3 (September 2018), pp. 432-8, also proved invaluable in unearthing and cataloguing several obscure letters and blurbs.</p>
                        <p><b>OMISSIONS: </b>Texts that were originally published only in part, but were later superseded by a complete or at least somewhat more complete printing, have usually been omitted. For example, Walter Hooper’s Preface to Kathryn Ann Lindskoog, <i>The Lion of Judah in Never-Never Land</i> (Grand Rapids: Eerdmans, 1973), p. 9, contains a brief passage from a realistic novel written by Lewis around 1927. This is the “Easley Fragment,” now published in full in <i> Seven: An Anglo-American Literary Review,</i> vol. 28 (2011), pp. 5-15. Accordingly, only the latter reference is included in this bibliography. Likewise, many of the blurbs and letters catalogued by Tankard in “Notes on the Bibliography of C.S. Lewis” also appear in Hooper's <i>Collected Letters,</i> and have been omitted from this list.</p>   
                    </div>
                        <div className="modal-footer">
                        <a href="#!" className="modal-close btn-flat">close</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutModal;
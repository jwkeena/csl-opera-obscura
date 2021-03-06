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
                    <div className="center-align">
                    <div className="header-wrapper">
                        <h1 className="topHeader left-align media-query-realign">Clivi Hamiltonis</h1>
                        <h1 className="bottomHeader left-align media-query-realign">Opera Obscura <span className="hide-on-med-and-down">·</span></h1>
                        <p className="subHeader right-align media-query-realign" title="Click to learn more">A Bibliography of Obscure and Newly Published Texts by <img className="signature" src={signature} alt="C.S. Lewis's singature"></img></p>
                    </div>
                    </div>
                </a>
                    <p className="center-align nudge-up"><b><a href="https://jwkeena.github.io/" target="_blank" rel="noopener noreferrer" title="See my portfolio">Code and design by Justin Keena</a> · last updated 12.30.20</b></p>
                <div 
                    ref={ (modal) => {this.modal = modal} }
                    id="about"
                    className="modal modal-fixed-footer">
                    <div className="modal-content">
                        <h3 className="center-align">About This Project</h3>
                        
                        <p><b>SUBMISSIONS: </b>Corrections and additions are welcome. The author can be reached <a className="blue-link" href="mailto: jwkeena@gmail.com">by email</a>. Please include as much bibliographical information as possible for new submissions (exact date of publication, title, reference, explanatory notes, and ideally a scan of the text itself).</p>

                        <p><b>PURPOSE: </b>This bibliography is an exhaustive collection of all <b>published</b> works by C.S. Lewis, however minor or fragmentary, that are <i>either</i> obscure <i>or</i> new. By “new” I mean published after the 50th anniversary of Lewis’s death, November 22, 2013. In this sense the last of the “old” books is <i>Image and Imagination,</i> the final collection of texts edited by Walter Hooper. By an “obscure” work I mean a text that meets all of the following three criteria:</p>
                        
                        <p>i. Is not the <i>main</i> text (note that this does not apply to paratexts like prefaces, footnotes, and blurbs: blurbs are always included; prefaces and footnotes are included if (1) there is a difference between the 1st edition and later editions, (2) there is a difference between the US and UK versions, or (3) the book is out of print.) of a monograph prepared for publication by Lewis himself, apart from prior drafts and later authorial abridgement or revision: i.e., is not the main text of</p> 
                        
                        <ol>
                            <li>1919 - <i>Spirits in Bondage</i></li>
                            <li>1926 - <i>Dymer</i></li>
                            <li>1933 - <i>The Pilgrim’s Regress</i></li>
                            <li>1936 - <i>The Allegory of Love</i></li>
                            <li>1938 - <i>Out of the Silent Planet</i></li>
                            <li>1939 - <i>The Personal Heresy</i></li>
                            <li>1940 - <i>The Problem of Pain</i></li>
                            <li>1942 - <i>The Screwtape Letters</i></li>
                            <li>1942 - <i>A Preface to Paradise Lost</i></li>
                            <li>1942 - <i>Broadcast Talks</i> (UK)/<i>The Case for Christianity</i> (US)</li>
                            <li>1943 - <i>Perelandra</i></li>
                            <li>1943 - <i>Christian Behaviour</i></li>
                            <li>1944 - <i>Beyond Personality</i></li>
                            <li>1945 - <i>That Hideous Strength</i></li>
                            <li>1946 - <i>The Abolition of Man</i></li>
                            <li>1946 - <i>The Great Divorce</i></li>
                            <li>1947 - <i>Miracles</i></li>
                            <li>1948 - <i>Arthurian Torso</i></li>
                            <li>1950 - <i>The Lion, the Witch, and the Wardrobe</i></li>
                            <li>1951 - <i>Prince Caspian</i></li>
                            <li>1952 - <i>Mere Christianity</i></li>
                            <li>1952 - <i>The Voyage of the Dawn Treader</i></li>
                            <li>1953 - <i>The Silver Chair</i></li>
                            <li>1954 - <i>The Horse and His Boy</i></li>
                            <li>1954 - <i>English Literature in the Sixteenth Century Excluding Drama</i></li>
                            <li>1955 - <i>The Magician’s Nephew</i></li>
                            <li>1955 - <i>Surprised by Joy</i></li>
                            <li>1956 - <i>The Last Battle</i></li>
                            <li>1956 - <i>Till We Have Faces</i></li>
                            <li>1958 - <i>Reflections on the Psalms</i></li>
                            <li>1960 - <i>Studies in Words</i></li>
                            <li>1961 - <i>A Grief Observed</i></li>
                            <li>1961 - <i>An Experiment in Criticism</i></li>
                            <li>1961 - <i>The Screwtape Letters and Screwtape Proposes a Toast</i></li>
                            <li>1963 - <i>Beyond the Bright Blur (US only)</i></li>
                            <li>1964 - <i>Letters to Malcolm</i></li>
                            <li>1964 - <i>The Discarded Image</i></li>
                        </ol>

                        <p>ii. Was not prepared for publication as an essay collection written by Lewis himself: i.e., is not the main text of</p>
                        
                        <ol>
                            <li>1939 - <i>Rehabilitations and Other Essays</i></li>
                            <li>1949 - <i>Transposition, and Other Addresses</i></li>
                            <li>1960 - <i>The World’s Last Night and Other Essays</i></li>
                            <li>1962 - <i>They Asked for a Paper: Papers and Addresses</i></li>
                        </ol>

                        <p>iii. Has not been published as a monograph, anthology, or collection of stories, poems, or essays by Walter Hooper (unless it’s a letter omitted from the <i>Collected Letters</i>): i.e., does not appear in</p>
                        
                        <ol>
                            <li>1966 - <i>Studies in Medieval and Renaissance Literature</i></li>
                            <li>1964 - <i>Poems</i></li>
                            <li>1966 - <i>Of Other Worlds: Essays and Stories</i></li>
                            <li>1967 - <i>Christian Reflections</i></li>
                            <li>1969 - <i>Narrative Poems</i></li>
                            <li>1969 - <i>Selected Literary Essays</i></li>
                            <li>1970 - <i>God in the Dock: Essays on Theology and Ethics</i>(US) / <i>Undeceptions</i> (UK)</li>
                            <li>1975 - <i>Fern-seed and Elephants and Other Essays on Christianity</i></li>
                            <li>1977 - <i>The Dark Tower & Other Stories</i></li>
                            <li>1979 - <i>God in the Dock: Essays on Theology</i> (UK only)</li>
                            <li>1979 - <i>They Stand Together: The Letters of C.S. Lewis to Arthur Greeves</i></li>
                            <li>1980 - <i>Letters of C.S. Lewis,</i> revised and enlarged</li>
                            <li>1980 - <i>The Weight of Glory and Other Addresses,</i> revised and expanded</li>
                            <li>1982 - <i>On Stories, and Other Essays on Literature</i></li>
                            <li>1982 - <i>Of This & Other Worlds</i></li>
                            <li>1984 - <i>The Business of Heaven: Daily Readings From C.S. Lewis</i></li>
                            <li>1984 - <i>Spirits in Bondage: A Cycle of Lyrics</i></li>
                            <li>1985 - <i>Boxen: The Imaginary World of the Young C.S. Lewis</i></li>
                            <li>1985 - <i>First and Second Things: Essays on Theology and Ethics</i></li>
                            <li>1986 - <i>Present Concerns</i></li>
                            <li>1986 - <i>The Grand Miracle: And Other Selected Essays on Theology and Ethics from God in the Dock</i></li>
                            <li>1986 - <i>The Seeing Eye and Other Selected Essays from Christian Reflections</i></li>
                            <li>1987 - <i>Timeless at Heart: Essays on Theology</i></li>
                            <li>1990 - <i>Christian Reunion: And Other Essays</i></li>
                            <li>1992 - <i>Daily Readings with C.S. Lewis / C.S. Lewis: Readings for Reflection and Meditation</i></li>
                            <li>1992 - <i>C.S. Lewis: Readings for Meditation and Reflection</i></li>
                            <li>1993 - <i>All My Road Before Me: The Diary of C.S. Lewis 1922-27</i></li>
                            <li>1994 - <i>The Collected Poems of C.S. Lewis</i></li>
                            <li>2000 - <i>Collected Letters, Vol. I: Family Letters 1905-1930</i></li>
                            <li>2004 - <i>Collected Letters, Vol. II: Books, Broadcasts and War 1931-1949</i></li>
                            <li>2007 - <i>Collected Letters, Vol. III: Narnia, Cambridge and Joy 1950-1963</i></li>
                            <li>2008 - <i>Boxen: Childhood Chronicles Before Narnia</i></li>
                            <li>2013 - <i>Image and Imagination</i></li>
                        </ol>

                        <p>If you are interested in reading everything by Lewis (at least, all that’s been published) come back here when you’ve finished the (often overlapping) contents of those works. For an account of just how labyrinthine and confusing the bibliography of Lewis's shorter pieces is, see <a href="http://lewisiana.nl/shorterwritings/index.htm" rel="noopener noreferrer" target="_blank">Arend Smilde's “A History of C.S. Lewis’s Collected Shorter Writings, 1939-2000),” <i>Journal of Inklings Studies</i> vol. 2, no. 2 (October 2012), 91-100</a>. If you are looking for the minimal combination of essay collections required to read them all, see Brenton Dickieson’s post <a className="blue-link" href="https://apilgriminnarnia.com/2017/02/08/essays/" rel="noopener noreferrer" target="_blank">“How to Read All of C.S. Lewis’ Essays”</a> and its accompanying <a className="blue-link" href="https://apilgriminnarnia.files.wordpress.com/2017/02/how-to-read-csl-essays-public.xlsx" rel="noopener noreferrer" target="_blank">Excel spreadsheet</a>.</p>
                        
                        <p><b>SOURCES: </b>For sections 1 (Prose) and 3 (Diaries), many of the following entries in this list, and some of the notes on them, are drawn verbatim from Hooper’s indispensable bibliographies in <i>C.S. Lewis: A Companion and Guide</i> (New York: HarperCollins, 1996), 799-883, <i>C.S. Lewis at the Breakfast Table and Other Reminiscences,</i> ed. James T. Como (1992, new edition), 250-301, and <i>Remembering C.S. Lewis: Recollections of Those Who Knew Him,</i> ed. James T. Como (San Francisco: Ignatius, 2005, 3rd edition), 387-492. I have supplemented, expanded, or corrected Hooper’s entries as necessary, in addition to adding dozens of my own. I have not used Hooper’s long-outdated first bibliography, which can be found in <i>Light on C.S. Lewis,</i> ed. Jocelyn Gibb (London: Geoffrey Bles, 1965), 117-60.</p>

                        <p>Paul Tankard’s meticulously researched article, “Notes on the Bibliography of C.S. Lewis,” <i>Notes & Queries,</i> vol. 263, no. 3 (September 2018), 432-438, also proved invaluable in unearthing and cataloguing several obscure letters and blurbs. I am also indebted to Arend Smilde, Stephen Thorson, Don King, Norbert Feinendegen, and Henk van Wingerden for many additional contributions.</p>
                        
                        <p><b>OMISSIONS: </b>Texts that were originally published only in part, but were later superseded by a complete or at least somewhat more complete printing, have usually been omitted. For example, Walter Hooper’s Preface to Kathryn Ann Lindskoog, <i>The Lion of Judah in Never-Never Land</i> (Grand Rapids: Eerdmans, 1973), 9, contains a brief passage from a realistic novel written by Lewis around 1927. This is the “Easley Fragment,” now published in full in <i> Seven: An Anglo-American Literary Review,</i> vol. 28 (2011), 5-15. Accordingly, only the latter reference is included in this bibliography. Likewise, many of the blurbs and letters catalogued by Tankard in “Notes on the Bibliography of C.S. Lewis” also appear in Hooper's <i>Collected Letters,</i> and have been omitted from this list.</p>   
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
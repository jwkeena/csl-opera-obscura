// TODO
// Italicize book titles 

const texts = [

    // PROSE PIECES
    {
        "title": "\"The Expedition to Holly Bush Hill\"",
        "printedIn": "Cherbourg School Magazine",
        "issueOrVolume": null,
        "pageRange": null,
        "year": 1912,
        "month": 11,
        "textProvided": false,
        "type": "prose",
        "notes": ["Original copies have not been found. Only known to exist in the Lewis Papers III, pp. 310-11 at the Wade Center and the Bodleian."]
    },

    {
        "title": "\"Are Athletes Better than Scholars?\"",
        "printedIn": "Cherbourg School Magazine",
        "issueOrVolume": "No 2",
        "pageRange": null,
        "year": 1913,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["Original copies have not been found. Only known to exist in the Lewis Papers III, pp. 318-9 at the Wade Center and the Bodleian."]
    },
   
    {
        "title": "\"The Expedition to Holly Bush Hill\"",
        "printedIn": "Cherbourg School Magazine",
        "issueOrVolume": null,
        "pageRange": null,
        "year": 1913,
        "month": 7,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["This is a different expedition from the 1912 piece.", "Original copies have not been found. Only known to exist in the Lewis Papers IV, p. 51 at the Wade Center and the Bodleian."]
    },

    {
        "title": "\"From Johnson's Life of Fox\"",
        "printedIn": "The Oxford Magazine",
        "issueOrVolume": "LVI",
        "pageRange": "737-38",
        "year": 1938,
        "month": 6,
        "day": 9,
        "textProvided": false,
        "type": "prose",
        "notes": ["A description of Adam Fox’s poetry in the style of Samuel Johnson. Fox was Oxford’s Professor of Poetry from 1938-1942.", "The piece is anonymous."]
    },
   
    {
        "title": "\"The Allegory of Love\"", 
        "printedIn": "The Tablet",
        "issueOrVolume": "vol. 173",
        "pageRange": "294",
        "year": 1939,
        "month": 3,
        "day": 20,
        "textProvided": false,
        "type": "prose",
        "notes": ["A rebuttal to an anonymous negative review of The Allegory of Love", "This piece has been reprinted in Gregory M. Anderson, “Lewis, Lost Letters, and Love,” Sehnsucht: The C.S. Lewis Journal, vol. 11 (2017), p. 17.", "It is also available at https://wipfandstock.com/sehnsucht-the-c-s-lewis-journal.html"]
    },

    {
        "title": "\"Miracles\"", 
        "printedIn": "The Guardian",
        "issueOrVolume": null,
        "pageRange": "316",
        "year": 1942,
        "month": 11,
        "day": 2,
        "textProvided": false,
        "type": "prose",
        "notes": ["An earlier, shorter version of the essay \"Miracles.\""]
    },

    {
        "title": "Appreciation of Eric Bentley", 
        "printedIn": "Bentley, The Cult of the Superman (Gloucester: Peter Smith)",
        "issueOrVolume": null,
        "pageRange": "v",
        "year": 1944,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["A one-page positive review of the book in the front matter.", "This piece is not in Image and Imagination or, to my knowledge, any other collection."]
    },

    {
        "title": "Comments on George Gordon's class", 
        "printedIn": "Mary G. Gordon, The Life of George S. Gordon, 1881-1942 (London: Oxford University Press)",
        "issueOrVolume": null,
        "pageRange": "77",
        "year": 1945,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["Does not appear in the Collected Letters or, to my knowledge, any other collection."]
    },

    {
        "title": "\"A Christian Reply to Professor Price\"", 
        "printedIn": "Phoenix Quarterly",
        "issueOrVolume": "vol. 1, no. 1",
        "pageRange": "31-44",
        "year": 1946,
        "month": 9, // Technically just "Autumn," but I put Sept. since that's when Fall starts
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["As Walter Hooper notes in his 1996 Bibliography, p. 829, item 134: \"Despite the fact that ‘Religion Without Dogma?’ was published later, ‘A Christian Reply to Professor Price’ is a revision of ‘Revision Without Dogma?’.", "\"Religion Without Dogma\" was first published in The Socratic Digest, no. 4 (1948), pp. 82-94."]
    },

    {
        "title": "\"A Christmas Sermon for Pagans\"", 
        "printedIn": "Strand",
        "issueOrVolume": null,
        "pageRange": "30-33",
        "year": 1946,
        "month": 12,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["Reprinted in SEVEN: An Anglo-American Literary Review, vol. 34 (2017)."]
    },

    {
        "title": "Letter to publisher used as a blurb for Essays Presented to Charles Williams", 
        "printedIn": "Essays Presented to Charles Williams, ed. C.S. Lewis (Oxford: Oxford University Press)",
        "issueOrVolume": null,
        "pageRange": "dust jacket",
        "year": 1947,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["Reprinted in Walter Hooper, “A Bibliography of the Writings of C.S. Lewis” in Remembering C.S. Lewis: Recollections of Those Who Knew Him, ed. James T. Como (San Francisco: Ignatius, 2005), item G21."]
    },

    {
        "title": "“Note” in Author's Foreword", 
        "printedIn": "Programme of Owen Barfield’s play Orpheus, produced by the Sheffield Educational Settlement at The Little Theatre, Shipton Street, Sheffield",
        "issueOrVolume": null,
        "pageRange": "8",
        "year": 1948,
        "month": 11,
        "day": 25,
        "textProvided": false,
        "type": "prose",
        "notes": ["This “Note” is reprinted on the cover of Owen Barfield, Orpheus: A Poetic Drama, ed. John C. Ulrich, Jr. (West Stockbridge: The Lindisfarne Press, 1983).", "The text is also accessible at http://www.owenbarfield.org/books/orpheus-extras.pdf. Look for footnote 1 in the author’s Foreword."]
    },

    {
        "title": "Reminiscence of P.V.M. Benecke", 
        "printedIn": "Margaret Denecke, Paul Victor Mendelssohn Benecke 1868-1944 (Oxford: Privately printed by A.T. Broome and Son)",
        "issueOrVolume": null,
        "pageRange": "9, 31-34",
        "year": 1954,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["I could find no copies of this book in any archival collection in the world.", "The only way to read this piece is to request a copy from the Wade Center. Walter Hooper typed the relevant excerpts from the book in a letter to the Wade Center."]
    },

    {
        "title": "\"Critical Forum: De Descriptione Temporum\"", 
        "printedIn": "Essays in Criticism",
        "issueOrVolume": "VI",
        "pageRange": "247",
        "year": 1956,
        "month": 4,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["To my knowledge this has never been reprinted."]
    },

    {
        "title": "Blurb for The Core of the Bible: Arranged from the Authorised King James Version", 
        "printedIn": "The Core of the Bible: Arranged from the Authorised King James Version, ed. Austin Farrer (New York: Harper and Bros.)",
        "issueOrVolume": null,
        "pageRange": "back cover",
        "year": 1957,
        "month": null,
        "day": null,
        "textProvided": "I am more than pleased, I am excited about Austin Farrer’s book. …This is as brilliant a presentation as we’re likely to see.",
        "type": "prose",
        "notes": ["An expanded version of the blurb also appears in the publisher’s material at the end of the first paperback edition of Miracles (1960): “I am more than pleased, I am excited, by Austin Farrer’s book. I don’t know that I ever learned so much (from anything of the same sort and on the same scale) as I have done from his introduction. This is a brilliant popularisation as we are ever likely to see.", "This blurb was discovered and publicized by Paul Tankard, “Notes on the Bibliography of C.S. Lewis,” Notes & Queries, vol. 263, no. 3 (September 2018), p. 433."]
    },

    {
        "title": "Preface to Miracles", 
        "printedIn": "Miracles: A Preliminary Study (New York: Association Press)",
        "issueOrVolume": null,
        "pageRange": "copyright page of the front matter",
        "year": 1958,
        "month": null,
        "day": null,
        "textProvided": "This is an abridgement, approved and corrected by me, of a book which appeared more than ten years ago under the same title and is still available. I am satisfied that this abridgment preserves without distortion or falsification as much of the original as will fit into a paperback edition. C.S.L.",
        "type": "prose",
        "notes": ["This abridgement of Miracles was made by Lewis himself."]
    },

    {
        "title": "\"Molliter Ossa Cubent\"", // Italicize this title 
        "printedIn": "The Campbellian (the School Magainze of Campbell College, Belfast)",
        "issueOrVolume": "XIV, no. 9",
        "pageRange": "692-93",
        "year": 1959,
        "month": 7,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["An obituary of Jane Agnes McNeill.", "Appears in Walter Hooper’s C.S. Lewis: A Companion and Guide (New York: HarperCollins, 1996), pp. 706-7."]
    },

    {
        "title": "A Series of Ten Radio Talks on Love", 
        "printedIn": "ten pamphlets published by The Episcopal Radio-TV Foundation (Atlanta, Georgia)",
        "issueOrVolume": null,
        "pageRange": null,
        "year": 1959,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["These ten individual pamphlets are the radio scripts Lewis recorded on tape in 1958, which tapes were issued in 1970 on four cassettes called Four Talks on Love. The scripts served as a basis for Lewis’s book, The Four Loves.", "The complete, typed text can be found here: HYPERLINK.", "HYPERLINK to YouTube videos."]
    },

    {
        "title": "\"Preface to the 1961 Edition\"", 
        "printedIn": "The Screwtape Letters with Screwtape Proposes a Toast, revised edition (New York: Macmillan)",
        "issueOrVolume": null,
        "pageRange": "preface", // Are there page numbers or letters?
        "year": 1961,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["The piece itself is dated by Lewis May 18, 1960, though it was first published in 1982 (so perhaps this entry should be re-labeled as arriving in 1982; on the other hand, the front matter designates the copyright as 1961."]
    },

    {
        "title": "\"Going into Europe: A Symposium\"", 
        "printedIn": "Encounter",
        "issueOrVolume": "XIX",
        "pageRange": "57",
        "year": 1962,
        "month": 12,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["Contents: a short paragraph on the type of governmental structure Lewis would approve.", "To my knowledge this text has never been reprinted."]
    },

    {
        "title": "\"I Was Decided Upon\"", 
        "printedIn": "Decision",
        "issueOrVolume": "II",
        "pageRange": "3",
        "year": 1963,
        "month": 5,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["Contents: answers to questions when interviewed by Sherwood E. Wirt of the Billy Graham Evangelistic Association on 7 May 1963." , "Available at http://www.cslewisinstitute.org/webfm_send/45."]
    },

    {
        "title": "A Note on the meaning of Civilization in the Chronicles of Narnia", 
        "printedIn": "Roger Lancelyn Green, C.S. Lewis, A Bodley Head Monograph, (London: The Bodley Head)",
        "issueOrVolume": null,
        "pageRange": "51",
        "year": 1962,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["To my knowledge this text has never been reprinted."]
    },

    {
        "title": "Blurb for Austin Farrer, Saving Belief", 
        "printedIn": "Saving Belief: A Discussion of Essentials (London: Hodder and Stoughton)",
        "issueOrVolume": null,
        "pageRange": "dust jacket",
        "year": 1964,
        "month": null,
        "day": null,
        "textProvided": "‘It has become customary with theologians to let themselves off a plain answer’ (p. 98). Here plain answers abound. Plain in the sense that no evasions are offered by the writer or permitted to the reader. In another sense, far from plain; almost every answer says more than we realize at the first glance. We have been deluged with theologies in which the most flamboyant pretensions to novelty and daring co-exist with the greatest thinness and flatness of the actual content; Dr. Farrer, remaining patient, modest and orthodox, opens new horizons to us on every other page.",
        "type": "prose",
        "notes": ["According to Paul Tankard, “Notes on the Bibliography of C.S. Lewis,” Notes & Queries, vol. 263, no. 3 (September 2018), p. 435, Hooper’s 2005 Bibliography “quotes only sixteen words of this blurb: the second half of the last sentence."]
    },

    {
        "title": "Holographs of manuscripts on Spenser", 
        "printedIn": "Spenser’s Images of Life, ed. Alastair Fowler (Cambridge: Cambridge University Press)",
        "issueOrVolume": null,
        "pageRange": "after the Preface and before the Introduction",
        "year": 1967,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["Plate 1 = folio 1; plate 2 = folio 35.", "Margaret Hannay quotes from these plates in her book, C.S. Lewis (New York: Frederick Ungar, 1981), pp. 158-63."]
    },

    {
        "title": "Martlets Society Minutes of 12 March and 14 June 1919", 
        "printedIn": "Walter Hooper, “To the Martlets,” C.S. Lewis: Speaker and Teacher, ed. Carolyn Keefe (Grand Rapids: Zondervan)",
        "issueOrVolume": null,
        "pageRange": "43, 44",
        "year": 1971,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["To my knowledge these texts have never been reprinted."]
    },

    {
        "title": "Passage from lecture on “Innate Ideas” (1924)", 
        "printedIn": "Walter Hooper, “To the Martlets,” C.S. Lewis: Speaker and Teacher, ed. Carolyn Keefe (Grand Rapids: Zondervan)",
        "issueOrVolume": null,
        "pageRange": "52",
        "year": 1971,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["To my knowledge this text has never been reprinted."]
    },

    {
        "title": "Fragment of a story beginning \"It was in autumn\"", 
        "printedIn": "Walter Hooper, “Past Watchful Dragons: The Fairy Tales of C.S. Lewis,” Imagination and the Spirit, ed. Charles A. Huttar (Grand Rapids: Eerdmans)",
        "issueOrVolume": null,
        "pageRange": "291",
        "year": 1971,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["To my knowledge this text has never been reprinted."]
    },

    {
        "title": "Boxen Manuscript \"The Locked Door\"", 
        "printedIn": "Walter Hooper, “Past Watchful Dragons: The Fairy Tales of C.S. Lewis,” Imagination and the Spirit, ed. Charles A. Huttar (Grand Rapids: Eerdmans)",
        "issueOrVolume": null,
        "pageRange": "279-80",
        "year": 1971,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["Later reprinted in Boxen (1985, 2008)."]
    },

    {
        "title": "Narnian Manuscripts (Various)", 
        "printedIn": "Walter Hooper, “Past Watchful Dragons: The Fairy Tales of C.S. Lewis,” Imagination and the Spirit, ed. Charles A. Huttar (Grand Rapids: Eerdmans)",
        "issueOrVolume": null,
        "pageRange": "[see notes for page ranges]",
        "year": 1971,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["“Outline of Narnian history so far as it is known,” pp. 298-301. Also printed in Past Watchful Dragons, ed. Hooper (1971), pp. 41-44.", "Outline of The Voyage of the “Dawn Treader” (holograph and transcribed) pp. 302, 303. Holograph also printed in Hooper, Through Joy and Beyond (1982), p. 112. Also printed, without the holograph, as “Plots” in Past Watchful Dragons, ed. Hooper (1971), p. 46.", "Galley proofs of The Silver Chair, p. 304. Fragment unique to this essay.", "Portion of “The Lefay Fragment” (an early version of The Magician’s Nephew), pp. 304-7 (holograph, p. 305 and transcription, pp. 304, 306-7). The full fragment is printed in Past Watchful Dragons, ed. Hooper (1971), pp. 48-65. Holograph unique to this essay.", "Fragments of “Eustace’s Diary,” p. 309. The full passage is printed in Past Watchful Dragons, ed. Hooper (1971), pp. 68-71.", "Original Map of Narnia (holograph), p. 310. Holograph unique to this essay.", "Drawing of Monopods (holograph), p. 313. Holograph unique to this essay."]
    },

    {
        "title": "Narnian Manuscripts (Various)", 
        "printedIn": "Past Watchful Dragons (London: Collier Macmillan)",
        "issueOrVolume": null,
        "pageRange": "[see notes for page ranges]",
        "year": 1971,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["“Outline of Narnian history so far as it is known,” pp. 41-44. Also printed in Imagination and the Spirit, ed. Charles A. Huttar (1971), pp. 298-301.","“Plots,” p. 46 (rough sketch of The Voyage of the Dawn Treader). Also printed in Imagination and the Spirit, ed. Charles A. Huttar,  (1971), p. 303.", "Holograph of “Plots” also printed in Hooper, Through Joy and Beyond (1982), p. 112.", "“The Lefay Fragment,” pp. 48-65. Only the first paragraph of p. 48, the next paragraph till the second line of p.49, and the passage from pages 62 (starting at the bottom) through page 65 are printed in Imagination and the Spirit, ed. Charles A. Huttar (1971), pp. 304-7. The rest of this fragment (almost 14 full pages) is unique to this book.", "“Eustace’s Diary,” pp. 68-71. Only partially printed in Imagination and the Spirit, ed. Charles A. Huttar (1971), p. 309. Most of this fragment is unique to this book.", "Illustrator Pauline Baynes-C.S. Lewis correspondence, pp. 77-80. Lewis’ letter of 21 January 1954 is printed in its entirety in Collected Letters III, pp. 412-3."]
    },

    { // VERIFY AUTHENTICITY
        "title": "\"Professor J.R.R. Tolkien: Creator of Hobbits and Inventor of a New Mythology\"", 
        "printedIn": "The Times",
        "issueOrVolume": null,
        "pageRange": "15",
        "year": 1973,
        "month": 9,
        "day": 3,
        "textProvided": false,
        "type": "prose",
        "notes": ["An obituary by Lewis, though the piece is unsigned.", "Available online at https://ghgraham.org/text/jrrtolkien1892_obit.html."]
    },

    {
        "title": "Earliest known Manuscript (c. 1939) of The Lion, the Witch and the Wardrobe", 
        "printedIn": "Walter Hooper’s Preface to Kathryn Ann Lindskoog, The Lion of Judah in Never-Never Land (Grand Rapids: Eerdmans)",
        "issueOrVolume": null,
        "pageRange": "12",
        "year": 1973,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["This manuscript is written on the back of the first page of the manuscript of The Dark Tower, found in the Bodleian Library."]
    },

    {
        "title": "Juvenilia and letters including fragment of a story \"To Mars and Back\"", 
        "printedIn": "C.S. Lewis: Images of His World, ed. Clyde Kilby and Douglas Gilbert (Eerdmans)",
        "issueOrVolume": null,
        "pageRange": "[see notes for page ranges]",
        "year": 1973,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["Holograph of “To Mars and back”, p. 104, the fragment of a story written by Lewis when a child. This is the only known printing of this story. It does not exist in the later 2005 edition of this book, which is not simply a reprint of the 1973 version.", "Excerpts from many letters later published in Collected Letters.", "Holographs of selected Boxen stories, later published in Boxen (1985, 2008).", "Holograph of “Carpe Diem,” the schoolboy poem, later published in Collected Poems, ed. Don King (2015)."]
    },

    {
        "title": "Pen portrait of Arthur Greeves", 
        "printedIn": "Roger Lancelyn Green and Walter Hooper, C.S. Lewis: A Biography (London: Collins; New York: Harcourt Brace Jovanovich)",
        "issueOrVolume": null,
        "pageRange": "[see notes for page ranges]",
        "year": 1974,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["According to Hooper’s bibliographies (e.g., C.S. Lewis at the Breakfast Table, p. 280, item 166), there is a pen portrait of Arthur Greeves’ family on p.40; but in fact, the portrait is of Arthur Greeves himself, not his family. This portrait can also be found in the 2002 revised edition of Hooper and Green’s biography on p. 23.", "Also according to Hooper’s bibliographies, there is a pen portrait of Arthur Greeves on p. 98, though I can’t find it. Can it be located?", "Both sources ultimately come from the Lewis Papers III, p. 305."]
    },

    {
        "title": "Annotations to Shakespeare", 
        "printedIn": "Lionel Adey, “C.S. Lewis’s Annotations to His Shakespeare Volumes,” CSL: The Bulletin of the New York C.S. Lewis Society",
        "issueOrVolume": "vol. 8, no. 7",
        "pageRange": "",
        "year": 1977,
        "month": 5,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": null
    },

    {
        "title": "Pen portraits of Arthur Greeves and his parents", 
        "printedIn": "They Stand Together, ed. Walter Hooper (New York: Macmillan)",
        "issueOrVolume": null,
        "pageRange": "[see notes for page ranges]",
        "year": 1979,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["Portrait of Greeves, pp. 24-26.", "Portrait of Greeves's parents, pp. 16-18", "The portraits of Greeves’s parents derives from The Lewis Papers III, pp. 302-4.", "The portrait of Greeves derives from The Lewis Papers X, pp. 218-20."]
    },

    {
        "title": "Minutes of the Martlets Society for 26 February 1919 (University College, Oxford)", 
        "printedIn": "They Stand Together, ed. Walter Hooper (New York: Macmillan)",
        "issueOrVolume": null,
        "pageRange": "250, Note 6",
        "year": 1979,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["Library call number: MS. Top. Oxon. D. 95/3, fo. 69."]
    },

    {
        "title": "Fragments of “The Quest of Bleheris” (prose romance written in 1916)", 
        "printedIn": "Chad Walsh, The Literary Legacy of C.S. Lewis (New York: Harcourt Brace Jovanovich)",
        "issueOrVolume": null,
        "pageRange": "126-27, 128",
        "year": 1979,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["Contains a large block quotation from the poem, starting from its title and chapter heading, with some ellipses."]
    },

    {
        "title": "Parts of original BBC broadcasts (1942) not included in the published versions", 
        "printedIn": "Walter Hooper, Introduction to C.S. Lewis, Mere Christianity, Anniversary Edition, ed. Walter Hooper (New York: Macmillan)",
        "issueOrVolume": null,
        "pageRange": "xiv, xvii-xviii, xx-xxi",
        "year": 1981,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": null
    },

    {
        "title": "\"Answers to Listeners’ Questions\", holograph of the typescript Lewis read over the BBC on 3 Sept. 1941", 
        "printedIn": "Mere Christianity, Anniversary Edition, ed. Walter Hooper (New York: Macmillan, 1981)",
        "issueOrVolume": null,
        "pageRange": "Appendix A", // Are there numerical pages?
        "year": 1981,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["This piece was later rewritten to form Chapter II (“Some Objections”) in Broadcast Talks."]
    },

    {
        "title": "“The Anvil,” BBC broadcast in which Lewis took part, 22 July 1943", 
        "printedIn": "Mere Christianity, Anniversary Edition, ed. Walter Hooper (New York: Macmillan, 1981)",
        "issueOrVolume": null,
        "pageRange": "Appendix C (207-211)",
        "year": 1981,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": null
    },

    {
        "title": "Holographs of manuscripts", 
        "printedIn": "Walter Hooper, Through Joy and Beyond: A Pictorial Biography of C.S. Lewis (New York: Macmillan)",
        "issueOrVolume": null,
        "pageRange": "[see notes for page ranges]",
        "year": 1982,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["Holograph of a 15 May 1941 letter to Sister Penelope, including his illustration at the end, pp. 94-5. Reprinted without the illustration in Collected Letters II, pp. 484-5.", "Holograph of “Plots,” an outline of The Voyage of the Dawn Treader, previously printed in Imagination and the Spirit (1971) and, in transcription only, in Past Watchful Dragons (1971)."]
    },

    {
        "title": "\"A Cretaceous Perambulator\"", 
        "printedIn": "Owen Barfield and Clive Staples Lewis, A Cretaceous Perambulator (the Re-examination Of), Oxford University CS Lewis Society",
        "issueOrVolume": null,
        "pageRange": null,
        "year": 1983,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["Limited to 100 copies, according to Collected Letters II, p. 155, note 8.", "Only held by three libraries in North America, one of which is the Wade Center."]
    },

    {
        "title": "Boxen: The Imaginary World of the Young C.S. Lewis, ed. Walter Hooper (William Collins and Co.)", 
        "printedIn": null,
        "issueOrVolume": "",
        "pageRange": null,
        "year": 1985,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["I include this, not because it’s rare, but because it may be obscure even to the general Lewis enthusiast.", "It is an abridged form of the later, complete Boxen: Childhood Chronicles before Narnia (2008). To my knowledge, though, this early edition includes the same texts of: The King’s Ring, Manx Against Manx, The Relief of Murry, History of Mouse-Land from Stone-Age to Bublish I, History of Animal-Land, The Chess Monograph, The Geography of Animal-Land, Boxen: or Scenes from Boxonian City Life, The Locked Door and Than-Kyu, The Sailor, and Encyclopedia Boxoniana."]
    },

    {
        "title": "\"Commentary on the Lay of Leithian\"", 
        "printedIn": "J.R.R. Tolkien, in The Lays of Beleriand, ed. Christopher Tolkien (Houghton Mifflin)",
        "issueOrVolume": null,
        "pageRange": "unknown", // Need to find this
        "year": 1985,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["Pagination of the 1994 Ballantine paperback edition: pp. 374-92."]
    },

    {
        "title": "Section entitled \"Critique of Locke\" from \"The Moral Good – Its Place Among the Values\" (The fourteen lectures Lewis gave in the University of Oxford 1924-25)", 
        "printedIn": "James Patrick, The Magdalen Metaphysicals: Idealism and Orthodoxy at Oxford 1901-45 (Macon: Mercer University Press)",
        "issueOrVolume": null,
        "pageRange": "116-17",
        "year": 1987,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["The excerpt is an explanation of Berkeley’s idealism. It does not overlap with other pieces that have since been published from the “Moral Good” notebook, i.e. Charlie W. Starr’s “Two Pieces from C.S. Lewis’s ‘Moral Good’ Manuscript: A First Publication,” SEVEN: An Anglo-American Literary Review, 31 (2014), pp. 30-62."]
    },

    {
        "title": "Fragments of “The Quest of Bleheris” (prose romance written in 1916)", 
        "printedIn": "George Sayer, Jack: C.S. Lewis and His Times (London: Macmillan)",
        "issueOrVolume": null,
        "pageRange": "59-60",
        "year": 1988,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["Sayer summarizes poem in three paragraphs, giving the occasional quote.", "This book was later re-titled Jack: A Life of C.S. Lewis (1994). In that edition the same paragraphs on Bleheris appear on pp. 110-11."]
    },

    {
        "title": "Fragments of an Essay on Richard Wagner (1911)", 
        "printedIn": "A.N. Wilson, C.S. Lewis: A Biography (London: Collins; New York: W.W. Norton)",
        "issueOrVolume": null,
        "pageRange": "30, 32",
        "year": 1990,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": null
    },

    {
        "title": "Fragments of “The Quest of Bleheris” (prose romance written in 1916)", 
        "printedIn": "David C. Downing, “‘The Dungeon of his Soul’: Lewis’s Unfinished Quest of Bleheris,” SEVEN: An Anglo-American Literary Review",
        "issueOrVolume": "vol. 15",
        "pageRange": "37-54",
        "year": 1998,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["This essay the summarizes this unfinished tale by the teenaged Lewis, quotes several key passages, and places the story in the context of Lewis’s spiritual journey at that point in his life. It contains many more quotations than in Sayers’ 1988 biography, but never as long a sustained excerpt as in Chad Walsh’s 1979 book."]
    },

    {
        "title": "Fragments of Othello Manuscript", 
        "printedIn": "J. Duke Pesta, “C.S. Lewis’ Lost Othello Manuscript and the Re-Presentations of Race,” Journal of the Wooden O Symposium",
        "issueOrVolume": "1",
        "pageRange": "36-41",
        "year": 2001,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": null
    },

    {
        "title": "Fragments of Othello Manuscript", 
        "printedIn": "Michael W. Price, “Rare Commentary from C.S. Lewis on Shakespeare: The Recently-Discovered Othello Essays,” Journal of the Wooden O Symposium",
        "issueOrVolume": "1",
        "pageRange": "42-48",
        "year": 2001,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": null
    },

    {
        "title": "Boxen: Childhood Chronicles Before Narnia, ed. Walter Hooper (New York: HarperCollins)", 
        "printedIn": null,
        "issueOrVolume": null,
        "pageRange": null,
        "year": 2008,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["Includes the following texts not appearing in the 1985 version: Littera Scripta Manet, Tararo, and The Life of Lord John Big of Bigham."]
    },

    {
        "title": "\"Language and Human Nature\" (Manuscript Fragment)", 
        "printedIn": "“Language and Human Nature (Manuscript Fragment),” ed. Steven A. Beebe, SEVEN: An Anglo-American Literary Review",
        "issueOrVolume": "vol. 27",
        "pageRange": "25-28",
        "year": 2010,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["For more information on this piece, see the introduction by Beebe in the same issue of SEVEN, pp. 7-24."]
    },

    {
        "title": "“C.S. Lewis, interviewed by Wayland Young 19 January 1962,”", 
        "printedIn": "Journal of Inklings Studies",
        "issueOrVolume": "vol. 1, no. 1",
        "pageRange": "23-41",
        "year": 2011,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": null
    },

    {
        "title": "Easley Fragment", 
        "printedIn": "David C. Downing and Bruce R. Johnson, “C.S. Lewis’s Unfinished ‘Easley Fragment’ and his Unfinished Journey,” SEVEN: An Anglo-American Literary Review",
        "issueOrVolume": "vol. 28",
        "pageRange": "5-26",
        "year": 2011,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["This is the first prose piece we have from Lewis in the 1920s."]
    },

    {
        "title": "Translations of Virgil's Aeneid", 
        "printedIn": "C.S. Lewis’s Lost Aeneid: Arms and the Exile, ed. A.T. Reyes (New Haven: Yale University Press)",
        "issueOrVolume": null,
        "pageRange": "passim",
        "year": 2011,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["Contents: A thorough treatment of an incomplete translation of the Aeneid by Lewis with commentary."]
    },

    {
        "title": "\"Light\" Manuscripts", 
        "printedIn": "Charlie W. Starr, Light: C.S. Lewis’ First and Final Short Story (Hamden: Winged Lion Press)",
        "issueOrVolume": null,
        "pageRange": "[see notes for page ranges]",
        "year": 2012,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["Prints the short story “Light” and compares it with the “Man Born Blind” manuscript and revisions, drawing conclusions about the dating of the pieces.", "Chapter 9, pp. 117-38 contains “The Complete Parallel Light Stories” and includes a holograph of the first page of the “Light” story on p. 116."]
    },

    {
        "title": "\"Early Prose Joy\" Manuscript", 
        "printedIn": "Andrew Lazo, “Early Prose Joy: C.S. Lewis’s Early Draft of an Autobiographical Manuscript,” SEVEN: An Anglo-American Literary Review",
        "issueOrVolume": "vol. 30",
        "pageRange": "13-49",
        "year": 2013,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["See also Lazo’s “Correcting the Chronology: Some Implications of ‘Early Prose Joy,” SEVEN: An Anglo-American Literary Review, vol. 29 (2012), pp. 51-62."]
    },

    {
        "title": "Radio transcript of May 1942 broadcast", 
        "printedIn": "Bruce R. Johnson, “C.S. Lewis and the BBC’s Brains Trust: A Study in Resiliency,” SEVEN: An Anglo-American Literary Review",
        "issueOrVolume": "vol. 30",
        "pageRange": "67-92",
        "year": null,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": null
    },

    {
        "title": "Alternate Preface to The Screwtape Letters", 
        "printedIn": "Brenton Dickieson, “The Unpublished Preface to C.S. Lewis’ The Screwtape Letters,” Notes & Queries",
        "issueOrVolume": "vol. 60, no. 2",
        "pageRange": "296-98",
        "year": 2013,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["In Brenton's own words, “In this neat manuscript we see that C.S. Lewis had Dr. Ransom (of the science fiction books) discover and translate the Letters.”"]
    },

    {
        "title": "Image and Imagination, ed. Walter Hooper (Cambridge: Cambridge University Press)", 
        "printedIn": null,
        "issueOrVolume": null,
        "pageRange": null,
        "year": 2013,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["Contents: in addition to 42 book reviews previously published but difficult to find, two obituaries (Oliver Elton and Charles Williams), three prefaces/introductions/forewords, four long essays hitherto out of print, and many other literary essays, this volume includes two previously unpublished drafts.", "First, “Lucretius,” pp. 194-7. Hooper's note on p. 194: “This essay on Lucretius (c. 94-c. 54 BC), is published here for the first time. The draft of it is written on blank pages interleaved and bound into Lewis’s copy of De Rerum Natura, now in the Rare Book Collection of the Wilson Library of North Carolina at Chapel Hill.”", "Second: “Image and Imagination,” pp. 34-53, probably composed before 1931."]
    },

    {
        "title": "“On Bolshevism” and “Mythonomy” Manuscripts", 
        "printedIn": "Charlie W. Starr, “Two Pieces from C.S. Lewis’s ‘Moral Good’ Manuscript: A First Publication,” SEVEN: An Anglo-American Literary Review",
        "issueOrVolume": "vol. 31",
        "pageRange": "30-62",
        "year": 2014,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["“On Bolshevism,” pp. 31-40.", "“Mythonomy,” pp. 43-5.", "Images of both texts on p. 30."]
    },

    {
        "title": "Annotations in a copy of The Pilgrim’s Regress", 
        "printedIn": "The Pilgrim’s Regress, Wade Annotated Edition, ed. David C. Downing (Grand Rapids: Eerdmans, 2014)",
        "issueOrVolume": null,
        "pageRange": "passim",
        "year": 2014,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["According to Downing’s Note on xiii, “On 18 June 1937, C.S. Lewis inscribed his name and the date in a copy of The Pilgrim’s Regress that he had carefully annotated for one of his students, Richard Thornton Hewitt, who was reading English at Magdalen College at the time.” That copy is now in the possession of the Wade Center.", "Lewis’s comments are printed in bold in the margins."]
    },

    {
        "title": "\"Pudaita Pie: An Anthology\"", 
        "printedIn": "C.S. and Warnie Lewis, “Pudaita Pie: An Anthology” in SEVEN: An Anglo-American Literary Review",
        "issueOrVolume": "vol. 32",
        "pageRange": "59-68",
        "year": 2015,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["Prefaced with an essay by Crystal Hurd."]
    },

    {
        "title": "\"Great War Papers\"", 
        "printedIn": "Norbert Feinendegen and Arend Smilde, “The ‘Great War’ of Owen Barfield and C.S. Lewis: Philosophical Writings (1927-1930),” Inklings Studies Supplement",
        "issueOrVolume": "vol. 1",
        "pageRange": "[see notes for page ranges]",
        "year": 2015,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["Clivi Hamiltonis Summae Metaphysices Contra Anthroposophos Libri II, pp. 58-102.", "“Note on the Law of Contradiction,” pp. 121-4.", "“Replies to Objections in Detail,” pp. 124-30 (includes holographs of Lewis’ drawings on pp. 127-9).", "De Bono et Malo, pp. 131-44.", "Lewis’ unfinished Commentarium in Tractatum De Toto et Parte in footnoes, pp. 145-69."]
    },

    {
        "title": "Summary of broadcast lecture “The Norse Spirit in English Literature”", 
        "printedIn": "Harry Lee Poe, “C.S. Lewis was a Secret Government Agent,” Christianity Today, online only at https://www.christianitytoday.com/ct/2015/december-web-only/cs-lewis-secret-agent.html.",
        "issueOrVolume": "",
        "pageRange": "",
        "year": null,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["The relevant passages are as follows.", "He spoke on the subject ‘The Norse Spirit in English Literature.’ Lewis provided a touchstone between the Norse people and the English, which Lewis made clear in his first recorded statement. He said that he did not know why he had been asked to address the people of Iceland, but that he agreed to do it in order to repay a great debt. He explained that his imaginative life had been awakened by Norse mythology when he was 14. He went on to explain how his love of Norse mythology only deepened when he began to learn the Icelandic language at Oxford.", "After this introduction, Lewis proceeded to praise the Icelandic tongue as one of the most poetic on earth. Rather than a private view of his own, Lewis argued that successive generations of English writers have felt this affinity with the old Norse tales and that this influence has found its way into the greatest of English literature. He cited Sir William Temple, William Morris, Charles Dickens, Shakespeare, Fielding, and Thomas Grey as examples of what he meant. The literature of England, inspired by the Norse, views self-important office holders as knaves and fools. By implication, the English had come to Iceland to repay a great debt and help fend off the knave and fool who ran Germany.", "Behind the literature itself, Lewis focused on a prevailing spirit found in those Norse explorers who refused to be part of a mere medieval kingdom. Instead, Lewis argued that the English and the Norse share a spirit of independence which finds its origins in the Norse settlers of Iceland and animates English literature.", "Lewis claimed that this common spirit is different from what one finds in Europe. He did not want to identify it as democracy, because this spirit rejects the interference of democracy as much as dictatorship. Nor does he regard it as a revolutionary spirit or individualism. This spirit is often marked by great loyalty that individualism does not possess. This loyalty, however, is based on choice rooted in worthy values—a chief who deserves loyalty. Just when it seems that Lewis had succeeded in avoiding jargon altogether, he names this spirit personal realism! Fortunately, he explained that personal realism involves loyalty between two people that is not based on abstractions, but on what those two people really are.", "Portions of these paragraphs are also quoted in Suzanne Bray, “‘The Exact Programme a Particular Country Wishes to Have’: C.S. Lewis’s Literary Broadcast for Iceland,” Sehnsucht, vol. 10 (2016), pp. 21-32."]
    },

    {
        "title": "\"Letters to Malcolm: Letter XIIa\"", 
        "printedIn": "“Letters to Malcolm: Letter XIIa,” SEVEN: An Anglo-American Literary Review",
        "issueOrVolume": "vol. 34",
        "pageRange": "71-74",
        "year": 2017,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["Prefaced with an essay by Norbert Feinendegen."]
    },

    {
        "title": "Account of a mock Shakespearean play in the Vice-President’s Register of Magdalen College (1941)", 
        "printedIn": "Stephanie Derrick, The Fame of C.S. Lewis: A Controversialist’s Reception in Britain and America (Oxford: Oxford University Press)",
        "issueOrVolume": null,
        "pageRange": "58",
        "year": 2018,
        "month": null,
        "day": null,
        "textProvided": false,
        "type": "prose",
        "notes": ["Derrick does not quote any excerpt of Lewis’s play, “which runs on for several pages,” but she appears to be the first Lewis scholar to publicize its existence.", "Derrick sources her account as follows: “C. S. Lewis, entry in Vice-President Register, 1941, MC:VP1/A1/6, Magdalen College Archives, Oxford University, Oxford.”"]
    }

    // DIARIES

    // POETRY
]

const template = 
{
    "title": "\"\"", 
    "printedIn": "",
    "issueOrVolume": "",
    "pageRange": "",
    "year": null,
    "month": null,
    "day": null,
    "textProvided": false,
    "type": "prose",
    "notes": [""]
}
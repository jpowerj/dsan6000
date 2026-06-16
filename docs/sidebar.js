window.document.addEventListener("DOMContentLoaded", function (event) {
  let sectionToggleHtml= `<span class='btn-group section-toggle' role='group' aria-label='Basic radio toggle button group' style='display: inline-flex !important; margin-top: 4px !important; width: 100% !important;'><input type='radio' class='btn-check pt-5' name='btnradio' id='btn-radio-01' autocomplete='off' onclick=\"window.toggleSectionClicked('01');\"><label class='btn btn-outline-secondary btn-sm' for='btn-radio-01' id='btn-label-01'>Sec 01</label><input type='radio' class='btn-check' name='btnradio' id='btn-radio-02' autocomplete='off' onclick=\"window.toggleSectionClicked('02');\"><label class='btn btn-outline-secondary btn-sm' for='btn-radio-02' id='btn-label-02'>Sec 02</label></span><br><span class='section-info sidebar-subtitle'><span class='sec-day'>M</span> <span class='sec-time'>3:30-6pm</span>, <span class='sec-room'>Walsh 394</span>`;
  var termHtml = "<span class='sidebar-subtitle'>Georgetown Fall 2026</span>";
  var emailHtml = "<span class='sidebar-subtitle w-100'>Prof. Jeff Jacobs&nbsp;<a href='mailto:jj1088@georgetown.edu' target='_blank'><i class='bi bi-envelope-at ps-1 pe-1'></i></a></span>";
  var subtitleDiv = $(`${sectionToggleHtml}<br>${termHtml}<br>${emailHtml}`);
  $('.sidebar-title').append(subtitleDiv);
  
  // And once the sidebar is set up we can do this stuff...
  console.log("Obtaining section key");
  const sectionKey = 'dsan6000-section';
  window.toggleSectionClicked = (sectionStr) => {
    console.log("window.toggleSectionClicked: " + sectionStr);
    applyToggleSection(sectionStr);
  };
  window.toggleIconClicked = () => {
    console.log("window.toggleIconClicked()");
    // Figure out the current section
    let curSectionStr = getSection();
    // Find its inverse
    let newSectionStr = invertSection(curSectionStr);
    // And apply that
    applyToggleSection(newSectionStr);
  };
  const defaultSection = "01";
  const getSection = () => {
    console.log("getSection()");
    if (localStorage.getItem(sectionKey) === null) {
      console.log("section was null");
      setSection(defaultSection);
    }
    if (localStorage.getItem(sectionKey) === undefined) {
      console.log("section was undefined");
      setSection(defaultSection);
    }
    if (localStorage.getItem(sectionKey) == "undefined") {
      // Sigh
      console.log("section was the string 'undefined'");
      setSection(defaultSection);
    }
    return localStorage.getItem(sectionKey);
  };
  const setSection = (secStr) => {
    localStorage.setItem(sectionKey, secStr);
  };
  const invertSection = (secStr) => {
    return(secStr == "01" ? "02" : "01");
  }
  const sectionData = {
    '01': {
      '.sec-num': '01',
      '.sec-day': 'M',
      '.sec-day-full': 'Monday',
      '.sec-time': '3:30-6pm',
      '.sec-room': 'Walsh 394',
      '.sec-zoom-link': 'https://georgetown.zoom.us/j/91628796534?pwd=BSnBpL4VeysAQMbUtbH4MmwOunglLh.1',
      '.sec-w01-date': 'Aug 27',
      '.sec-w02-date': 'Aug 31',
      '.sec-w03-date': 'Sep 8',
      '.sec-w04-date': 'Sep 14',
      '.sec-w05-date': 'Sep 21',
      '.sec-w06-date': 'Sep 28',
      '.sec-w07-date': 'Oct 5',
      '.sec-w08-date': 'Oct 19',
      '.sec-w09-date': 'Oct 26',
      '.sec-w10-date': 'Nov 2',
      '.sec-w11-date': 'Nov 9',
      '.sec-w12-date': 'Nov 16',
      '.sec-w13-date': 'Nov 30',
      '.sec-w14-date': 'Dec 7-8',
      '.sec-start': '3:30pm',
      '.sec-end': '6:00pm',
    },
    '02': {
      '.sec-num': '02',
      '.sec-day': 'Th',
      '.sec-day-full': 'Thursday',
      '.sec-time': '6:30-9pm',
      '.sec-room': 'Walsh 394',
      '.sec-zoom-link': 'https://georgetown.zoom.us/j/92724737140?pwd=rIyVrsa3CDq9xCv4LGNX3Cq0o2J3An.1',
      '.sec-w01-date': 'Aug 27',
      '.sec-w02-date': 'Sep 3',
      '.sec-w03-date': 'Sep 10',
      '.sec-w04-date': 'Sep 17',
      '.sec-w05-date': 'Sep 24',
      '.sec-w06-date': 'Oct 1',
      '.sec-w07-date': 'Oct 8',
      '.sec-w08-date': 'Oct 22',
      '.sec-w09-date': 'Oct 29',
      '.sec-w10-date': 'Nov 5',
      '.sec-w11-date': 'Nov 12',
      '.sec-w12-date': 'Nov 19',
      '.sec-w13-date': 'Dec 3',
      '.sec-w14-date': 'Dec 7-8',
      '.sec-start': '6:30pm',
      '.sec-end': '9:00pm',
    }
  };
  const applyToggleSection = (newStr) => {
    console.log("Changing to " + newStr);
    setSection(newStr);
    // First, if we're on slides, change the toggle
    // icon accordingly
    updateToggleIcon(newStr);
    let sData = sectionData[newStr];
    for (const [sKey, sVal] of Object.entries(sData)) {
      if (sKey.startsWith(".rec-link")) {
        $(sKey).attr('href', sVal);
      } else if (sKey == ".sec-zoom-link") {
        $(sKey).attr('href', sVal);
      } else {
        $(sKey).text(sVal);
      }
      //console.log(`${key}: ${value}`);
    }
    // Special code for updating sidebar zoom link
    // let s01ZoomUrl = sectionData['01']['.sec-zoom-link'];
    // let s02ZoomUrl = sectionData['02']['.sec-zoom-link'];
    // if (newStr == "01") {
    //   // Find any sidebar link with S02 href and update
    //   let s02LinkSelector = 'a[href="' + s02ZoomUrl + '"]';
    //   let sidebarElt = $(s02LinkSelector);
    //   // console.log(sidebarElt);
    //   sidebarElt.attr('href', s01ZoomUrl);
    // } else {
    //   let s01LinkSelector = 'a[href="' + s01ZoomUrl + '"]';
    //   let sidebarElt = $(s01LinkSelector);
    //   // console.log(sidebarElt);
    //   sidebarElt.attr('href', s02ZoomUrl);
    // }
    // A special one for the slides... Very janky
    const s01Replace = {
      // w01
      'Thursday, August 27, 2026': 'Thursday, August 27, 2026',
      // w02
      'Thursday, September 3, 2026': 'Monday, August 31, 2026',
      // w03
      'Thursday, September 10, 2026': 'Tuesday, September 8, 2026',
      // w04
      'Thursday, September 17, 2026': 'Monday, September 14, 2026',
      // w05
      'Thursday, September 24, 2026': 'Monday, September 21, 2026',
      // w06
      'Thursday, October 1, 2026': 'Monday, September 28, 2026',
      // w07
      'Thursday, October 8, 2026': 'Monday, October 5, 2026',
      // w08
      'Thursday, October 22, 2026': 'Monday, October 19, 2026',
      // w09
      'Thursday, October 29, 2026': 'Monday, October 26, 2026',
      // w10
      'Thursday, November 5, 2026': 'Monday, November 2, 2026',
      // w11
      'Thursday, November 12, 2026': 'Monday, November 9, 2026',
      // w12
      'Thursday, November 19, 2026': 'Monday, November 16, 2026',
      // w13
      'Thursday, December 3, 2026': 'Monday, November 30, 2026',
    };
    const s02Replace = {
      // w01
      'Thursday, August 27, 2026': 'Thursday, August 27, 2026',
      // w02
      'Monday, August 31, 2026': 'Thursday, September 3, 2026',
      // w03
      'Tuesday, September 8, 2026': 'Thursday, September 10, 2026',
      // w04
      'Monday, September 14, 2026': 'Thursday, September 17, 2026',
      // w05
      'Monday, September 21, 2026': 'Thursday, September 24, 2026',
      // w06
      'Monday, September 28, 2026': 'Thursday, October 1, 2026',
      // w07
      'Monday, October 5, 2026': 'Thursday, October 8, 2026',
      // w08
      'Monday, October 19, 2026': 'Thursday, October 22, 2026',
      // w09
      'Monday, October 26, 2026': 'Thursday, October 29, 2026',
      // w10
      'Monday, November 2, 2026': 'Thursday, November 5, 2026',
      // w11
      'Monday, November 9, 2026': 'Thursday, November 12, 2026',
      // w12
      'Monday, November 16, 2026': 'Thursday, November 19, 2026',
      // w13
      'Monday, November 30, 2026': 'Thursday, December 3, 2026',
    };
    let shownDate = $('p.date').text();
    console.log("shownDate:");
    console.log(shownDate);
    if (newStr == "02" && (s02Replace.hasOwnProperty(shownDate))) {
      console.log("Replacing with s02 date");
      let replaceWith = s02Replace[shownDate];
      console.log("Replacement should be: " + replaceWith);
      $('p.date').text(replaceWith);
    }
    if (newStr == "01" && (s01Replace.hasOwnProperty(shownDate))) {
      console.log("Replacing with s01 date");
      let replaceWith = s01Replace[shownDate];
      $('p.date').text(replaceWith);
    }
  };
  const updateToggleIcon = (newSection) => {
    // Check for the toggle button
    let toggleSelector = '#section-toggle-icon';
    let toggleElt = $(toggleSelector);
    if (toggleElt.length && newSection == "02") {
      toggleElt.removeClass("bi-toggle-off");
      toggleElt.addClass("bi-toggle-on");
      // And bold the name
      let oldLabelElt = $('#toggle-01-label');
      oldLabelElt.css('font-weight', 'normal')
      let newLabelElt = $('#toggle-02-label');
      newLabelElt.css('font-weight', 'bolder');
      return;
    }
    if (toggleElt.length && newSection == "01") {
      toggleElt.removeClass("bi-toggle-on");
      toggleElt.addClass("bi-toggle-off");
      let oldLabelElt = $('#toggle-02-label');
      oldLabelElt.css('font-weight', 'normal');
      let newLabelElt = $('#toggle-01-label');
      newLabelElt.css('font-weight', 'bolder');
    }
  };
  let localStorageChecked = false;
  if (!localStorageChecked) {
    let curSection = getSection();
    //console.log("Detected section:");
    //console.log(curSection);
    // Check for the slider
    let radioSelector = `#btn-radio-${curSection}`;
    let radioElt = $(radioSelector);
    if (radioElt.length) {
      radioElt.click();
    }
    // Check for the toggle icon
    let toggleSelector = '#section-toggle-icon';
    let toggleElt = $(toggleSelector);
    if (toggleElt.length) {
      //updateToggleIcon(curSection);
      applyToggleSection(curSection);
    }
    localStorageChecked = true;
  }
});

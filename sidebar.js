window.document.addEventListener("DOMContentLoaded", function (event) {
  let sectionToggleHtml= `<span class='btn-group section-toggle' role='group' aria-label='Basic radio toggle button group' style='display: inline-flex !important; margin-top: 4px !important; width: 100% !important;'><input type='radio' class='btn-check pt-5' name='btnradio' id='btn-radio-01' autocomplete='off' onclick=\"window.toggleSectionClicked('01');\"><label class='btn btn-outline-secondary btn-sm' for='btn-radio-01' id='btn-label-01'>Sec 01</label><input type='radio' class='btn-check' name='btnradio' id='btn-radio-02' autocomplete='off' onclick=\"window.toggleSectionClicked('02');\"><label class='btn btn-outline-secondary btn-sm' for='btn-radio-02' id='btn-label-02'>Sec 02</label></span><br><span class='section-info sidebar-subtitle'><span class='sec-day'>M</span> <span class='sec-time'>3:30-6pm</span>, <span class='sec-room'>Walsh 394</span>`;
  var termHtml = "<span class='sidebar-subtitle'>Georgetown Fall 2025</span>";
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
      '.sec-w01-date': 'Aug 28',
      '.sec-w02-date': 'Sep 2',
      '.sec-w03-date': 'Sep 8',
      '.sec-w04-date': 'Sep 15',
      '.sec-w05-date': 'Sep 22',
      '.sec-w06-date': 'Sep 29',
      '.sec-w07-date': 'Oct 6',
      '.sec-w08-date': 'Oct 20',
      '.sec-w09-date': 'Oct 27',
      '.sec-w10-date': 'Nov 3',
      '.sec-w11-date': 'Nov 10',
      '.sec-w12-date': 'Nov 17',
      '.sec-w13-date': 'Nov 24',
      '.sec-w14-date': 'Dec 1',
      '.sec-w15-date': 'Dec 8',
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
      '.sec-w01-date': 'Aug 28',
      '.sec-w02-date': 'Sep 4',
      '.sec-w03-date': 'Sep 11',
      '.sec-w04-date': 'Sep 18',
      '.sec-w05-date': 'Sep 25',
      '.sec-w06-date': 'Oct 2',
      '.sec-w07-date': 'Oct 9',
      '.sec-w08-date': 'Oct 23',
      '.sec-w09-date': 'Oct 30',
      '.sec-w10-date': 'Nov 6',
      '.sec-w11-date': 'Nov 13',
      '.sec-w12-date': 'Nov 20',
      '.sec-w13-date': 'Nov 24',
      '.sec-w14-date': 'Dec 4',
      '.sec-w15-date': 'Dec 8',
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
    let s01ZoomUrl = sectionData['01']['.sec-zoom-link'];
    let s02ZoomUrl = sectionData['02']['.sec-zoom-link'];
    if (newStr == "01") {
      // Find any sidebar link with S02 href and update
      let s02LinkSelector = 'a[href="' + s02ZoomUrl + '"]';
      let sidebarElt = $(s02LinkSelector);
      // console.log(sidebarElt);
      sidebarElt.attr('href', s01ZoomUrl);
    } else {
      let s01LinkSelector = 'a[href="' + s01ZoomUrl + '"]';
      let sidebarElt = $(s01LinkSelector);
      // console.log(sidebarElt);
      sidebarElt.attr('href', s02ZoomUrl);
    }
    // A special one for the slides... Very janky
    const s01Replace = {
      // w02
      'Thursday, September 4, 2025': 'Tuesday, September 2, 2025',
      // w03
      'Wednesday, September 6, 2023': 'Tuesday, September 5, 2023',
      // w04
      'Wednesday, September 13, 2023': 'Tuesday, September 12, 2023',
      // w05
      'Wednesday, September 20, 2023': 'Tuesday, September 19, 2023',
      // w06
      'Wednesday, September 27, 2023': 'Tuesday, September 26, 2023',
      // w07
      'Wednesday, October 4, 2023': 'Tuesday, October 3, 2023',
      // w08
      'Wednesday, October 18, 2023': 'Tuesday, October 17, 2023',
      // w09
      'Wednesday, October 25, 2023': 'Tuesday, October 24, 2023',
      // w10
      'Wednesday, November 1, 2023': 'Tuesday, October 31, 2023',
      // w11
      'Wednesday, November 8, 2023': 'Tuesday, November 7, 2023',
      // w12
      'Wednesday, November 15, 2023': 'Tuesday, November 14, 2023'
    };
    const s02Replace = {
      // w02
      'Tuesday, September 2, 2025': 'Thursday, September 4, 2025',
      // w03
      'Tuesday, September 5, 2023': 'Wednesday, September 6, 2023',
      // w04
      'Tuesday, September 12, 2023': 'Wednesday, September 13, 2023',
      // w05
      'Tuesday, September 19, 2023': 'Wednesday, September 20, 2023',
      // w06
      'Tuesday, September 26, 2023': 'Wednesday, September 27, 2023',
      // w07
      'Tuesday, October 3, 2023': 'Wednesday, October 4, 2023',
      // w08
      'Tuesday, October 17, 2023': 'Wednesday, October 18, 2023',
      // w09
      'Tuesday, October 24, 2023': 'Wednesday, October 25, 2023',
      // w10
      'Tuesday, October 31, 2023': 'Wednesday, November 1, 2023',
      // w11
      'Tuesday, November 7, 2023': 'Wednesday, November 8, 2023',
      // w12
      'Tuesday, November 14, 2023': 'Wednesday, November 15, 2023'
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
